import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Name', headerName: 'Food Name', width: 130 },
  { field: 'EntryDate', headerName: 'Entry Date', width: 130 },
  { field: 'ExpirationDate', headerName: 'Expiration Date', width: 130 },
  { field: 'Cost', headerName: 'Cost', type: 'number', width: 90}
];

class DataTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          selected: [],
          rows: [],
        };
      }
    
    render() { 
        return (
            <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={this.props.rows}
                columns={columns}
                initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
            </div>
        );
    }
}

export default DataTable;