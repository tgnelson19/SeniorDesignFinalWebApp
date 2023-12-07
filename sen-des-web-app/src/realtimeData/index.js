import StartFirebase from "../firebaseConfig"
import React from 'react'
import {ref, onValue} from 'firebase/database'
import DataTable from '../Table';
import 'firebase/database'
import {Table} from "react-bootstrap"

const db = StartFirebase();

const rowsExample = [
    { id: 1, Name: 'Apple', EntryDate: "11/21/2023", ExpirationDate: "11/30/2023", Cost: 0.50},
    { id: 2, Name: 'Apple', EntryDate: "11/21/2023", ExpirationDate: "11/30/2023", Cost: 0.50},
    { id: 3, Name: 'Apple', EntryDate: "11/21/2023", ExpirationDate: "11/30/2023", Cost: 0.50},
    { id: 4, Name: 'Apple', EntryDate: "11/21/2023", ExpirationDate: "11/30/2023", Cost: 0.50},
    { id: 5, Name: 'Apple', EntryDate: "11/21/2023", ExpirationDate: "11/30/2023", Cost: 0.50},
   
  ];

export class RealtimeData extends React.Component{
    constructor(){
        super();
        this.state = {
            tableData: [],
            test:0
        }
    }

    componentDidMount(){
        const dbRef = ref(db);

        onValue(dbRef, (snapshot)=>{
            let records = [];
            snapshot.forEach(childSnapshot=>{
                let data = childSnapshot.val();
                records.push({"id": data.id,
                              "Name": data.Name,
                              "EntryDate": data.EntryDate,
                              "ExpirationDate" : data.ExpirationDate,
                              "Cost": data.Cost
                            });
                this.setState({test: data.Name})
            });
            
            this.setState({tableData: records});
        });
    }

    render(){
        return(
        <div>
        <h1>Smart Fridge Contents</h1>
        <DataTable rows={this.state.tableData}>
        </DataTable>
        </div>
        )
    }


}  