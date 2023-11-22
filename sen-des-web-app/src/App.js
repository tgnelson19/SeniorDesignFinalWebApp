import * as React from 'react';
import DataTable from './Table';
import Paper from '@mui/material/Paper';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, onValue } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATXDCNWRDPLG6XBqDW3Q1Snyv7TlYdDh4",
  authDomain: "seniordesign-9342c.firebaseapp.com",
  databaseURL: "https://seniordesign-9342c-default-rtdb.firebaseio.com",
  projectId: "seniordesign-9342c",
  storageBucket: "seniordesign-9342c.appspot.com",
  messagingSenderId: "391432450434",
  appId: "1:391432450434:web:28fa71d79f09e6abd75f9b",
  measurementId: "G-MMWKSHCQ95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getDatabase();

const rowsExample = [
  { id: 1, foodName: 'Apple', entryDate: "11/21/2023", expirationDate: "11/30/2023", cost: 0.50},
  { id: 2, foodName: 'Apple', entryDate: "11/21/2023", expirationDate: "11/30/2023", cost: 0.50},
  { id: 3, foodName: 'Apple', entryDate: "11/21/2023", expirationDate: "11/30/2023", cost: 0.50},
  { id: 4, foodName: 'Apple', entryDate: "11/21/2023", expirationDate: "11/30/2023", cost: 0.50},
  { id: 5, foodName: 'Apple', entryDate: "11/21/2023", expirationDate: "11/30/2023", cost: 0.50}
];

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      rows: rowsExample
    };
  }


  /* This is the start of the render routine, or what is presented when the app is rendered */
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>

        <Paper 
            className="App-body"
            sx={{
              m: 2,
              display: 'flex',
              flexDirection: 'column',
              bgcolor: 'linen',
            }}
          >

        <DataTable
          rows={this.state.rows}
        >
            

        </DataTable>


        </Paper>
      </div>
    )
  }



}

export default App;