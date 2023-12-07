import * as React from 'react';
import Paper from '@mui/material/Paper';
import { RealtimeData } from './realtimeData';

const rowsExample = [
  { id: 1, Name: 'Apple', EntryDate: "11/21/2023", ExpirationDate: "11/30/2023", Cost: 0.50},
  { id: 2, Name: 'Apple', EntryDate: "11/21/2023", ExpirationDate: "11/30/2023", Cost: 0.50},
  { id: 3, Name: 'Apple', EntryDate: "11/21/2023", ExpirationDate: "11/30/2023", Cost: 0.50},
  { id: 4, Name: 'Apple', EntryDate: "11/21/2023", ExpirationDate: "11/30/2023", Cost: 0.50},
  { id: 5, Name: 'Apple', EntryDate: "11/21/2023", ExpirationDate: "11/30/2023", Cost: 0.50},
 
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

          <RealtimeData></RealtimeData>


        </Paper>
      </div>
    )
  }

}

export default App;