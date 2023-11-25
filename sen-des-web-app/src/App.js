import * as React from 'react';
import DataTable from './Table';
import Paper from '@mui/material/Paper';

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

          <DataTable rows={this.state.rows}>
          </DataTable>


        </Paper>
      </div>
    )
  }

}

export default App;