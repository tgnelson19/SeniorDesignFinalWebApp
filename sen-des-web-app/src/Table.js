import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'foodName', headerName: 'Food Name', width: 130 },
  { field: 'entryDate', headerName: 'Entry Date', width: 130 },
  { field: 'expirationDate', headerName: 'Expiration Date', width: 130 },
  {field: 'cost', headerName: 'Cost', type: 'number', width: 90}
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