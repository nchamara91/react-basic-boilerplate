import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';


const COLUMNS = [
    {
        field : 'name',
        headerName : 'Name',
        flex: 1,
        renderCell : (params) => <p>{params.row.lname}</p>,
    },
    {
        field : "address",
        headerName : "address",
        flex: 1
    },
    {
        field : "business_registration",
        headerName : "Business registration",
        flex: 1
    },
    {
        field : "ownership_type",
        headerName : "Ownership type",
        flex: 1
    },
    {
        field : "share_count",
        headerName : "Share Count",
        flex: 1
    },
 
    {
        field : "value_per_share",
        headerName : "Value per share",
        flex: 1
    },
    {
        field : "action",
        headerName : "",
        flex: 1,
        renderCell : () => <Button color="error" variant='contained' > Delete</Button>
    }
       
]



const Shareholders = ({shareholders}) => {
  return (
   
    <DataGrid 
    sx={{ height: 400, width: '100%' }}
    columns={COLUMNS} 
    rows={shareholders}
    pageSize={5}
    rowsPerPageOptions={[5]}  />
    
  )
}

export default Shareholders