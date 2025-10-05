import React from "react";
import { Paper, Typography, Grid, Box } from "@mui/material";
import StudentsTable from "../components/StudentsTable";

export default function Dashboard() {
  // Replace with API data
  const collections = 120000;
  const expenses = 65000;
  const balance = collections - expenses;

  return (
    <div>
      <Typography variant="h4" gutterBottom>Dashboard</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Paper sx={{ p: 2, bgcolor: "primary.main", color: "#fff" }}>
            <Typography>Total Collections</Typography>
            <Typography variant="h5">₦{collections.toLocaleString()}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper sx={{ p: 2, bgcolor: "secondary.main", color: "#fff" }}>
            <Typography>Total Expenses</Typography>
            <Typography variant="h5">₦{expenses.toLocaleString()}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper sx={{ p: 2 }}>
            <Typography>Balance</Typography>
            <Typography variant="h5">₦{balance.toLocaleString()}</Typography>
          </Paper>
        </Grid>
      </Grid>
      <Box mt={4}>
        <Typography variant="h6" gutterBottom>All Students</Typography>
        <StudentsTable />
      </Box>
    </div>
  );
}