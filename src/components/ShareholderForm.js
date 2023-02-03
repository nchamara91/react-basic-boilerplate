import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";

const formDetails = [
  { label: "Name", name: "name" },
  { label: "Address", name: "address" },
  { label: "Business Reg", name: "business_registration" },
  { label: "Ownership Type", name: "ownership_type" },
  {
    label: "Share Count",
    name: "share_count",
  },
  { label: "Value Per Share", name: "value_per_share" },
  { label: "Share Class", name: "share_class" },
];

const initial = {
  name: "",
  address: "",
  business_registration: "",
  ownership_type: "",
  share_count: "",
  value_per_share: "",
  share_class: "",
};

const ShareholderForm = () => {
  const [shareholder, setName] = useState({ name: "" });

  const changeHandler = (e) =>
    setName({ ...shareholder, [e.target.name]: e.target.value });

  return (
    <form>
      <Grid container spacing={3}>
        {formDetails.map((item,index) => (
        <Grid item >
        <TextField
         name={item.name}
         label={item.label}
        >
        </TextField>
      </Grid>
      
      ))}
        <Grid item xs={8} />
        <Grid item xs={6} />
        <Grid item xs={6}>
          <Button type="submit" variant="contained" sx={{ float: "right" }}>
            submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ShareholderForm;
