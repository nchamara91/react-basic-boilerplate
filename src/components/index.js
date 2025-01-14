import React, { useState } from "react";
import { Grid } from "@mui/material";
import Shareholders from "./Shareholders";
import ShareholderForm from "./ShareholderForm"

const ROWS = [
  {
      id : 1,
      lname : "Rahul",
      address : "Malabe",
      business_registration : "12wet",
      ownership_type : " Agreement",
      share_count : 2,
      value_per_share : 10000,
      share_class : "Mid"
  },
  {
      id : 2,
      lname : "Rahul",
      address : "Malabe",
      business_registration : "12wet",
      ownership_type : " Agreement",
      share_count : 2,
      value_per_share : 10000,
      share_class : "Mid"
  }
]



 const Index = () => {

  const [shareholders,setShareholder] = useState(ROWS);
  const [formData,SetFormData] = useState({ });

  const deleteHandler = (id) => 
       
        setShareholder([
          ...shareholders.filter((shareholder) => shareholder.id !== id),
        ])
 

  return (
    <Grid container spacing={3} sx={{p : 2}}>
        <Grid item xs={12}>
            <ShareholderForm  />
        </Grid>
      <Grid itme xs={12} >
        <Shareholders  shareholders ={shareholders} onDelete ={deleteHandler} />
      </Grid>
    </Grid>
  );
};

export default Index;