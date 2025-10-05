import React from "react";
import { Box, Grid, Paper, Typography, Button, Divider } from "@mui/material";
import ChartAnalytics from "../components/ChartAnalytics";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
import StudentsTable from "../components/StudentsTable";

export default function Dashboard() {
  // Demo data; replace with real API data
  const collections = 250000;
  const expenses = 96000;
  const balance = collections - expenses;
  const { user } = useAuth();

  return (
    <Box>
      <Typography variant="h4" mb={2} fontWeight={700}>
        Dashboard
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Paper sx={{ p: 3, bgcolor: "primary.main", color: "#fff" }}>
            <Typography variant="subtitle1">Total Collections</Typography>
            <Typography variant="h5">₦{collections.toLocaleString()}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper sx={{ p: 3, bgcolor: "secondary.main", color: "#fff" }}>
            <Typography variant="subtitle1">Total Expenses</Typography>
            <Typography variant="h5">₦{expenses.toLocaleString()}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="subtitle1">Balance</Typography>
            <Typography variant="h5" color="primary">
              ₦{balance.toLocaleString()}
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box my={4}>
        <ChartAnalytics />
      </Box>

      <Divider sx={{ my: 3 }} />

      <Box display="flex" gap={2} flexWrap="wrap">
        <Button variant="contained" color="primary" component={Link} to="/reports">
          Print Reports
        </Button>
        <Button variant="outlined" color="secondary" component={Link} to="/sms">
          Send SMS Reminders
        </Button>
        <Button variant="contained" color="secondary" component={Link} to="/finance">
          Audit / Forecast
        </Button>
        <Button variant="outlined" color="primary" component={Link} to="/students">
          Students List
        </Button>
        <Button variant="outlined" color="primary" component={Link} to="/employee">
          Staff Performance
        </Button>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h6" mb={1}>
        Students Overview
      </Typography>
      {user.role === "parent" ? (
        <Typography>As a parent, you will see only your child’s data here.</Typography>
      ) : (
        <StudentsTable />
      )}
    </Box>
  );
}