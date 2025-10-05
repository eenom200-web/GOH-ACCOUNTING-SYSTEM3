import React from "react";
import { Box, Typography, Paper, Grid, Avatar, Divider } from "@mui/material";

export default function EmployeeDetails() {
  // Demo data; replace with API data and routing params
  const employee = {
    name: "Jane Staff",
    empId: "EMP01",
    position: "Teacher",
    contact: "08011112222",
    photoUrl: "",
    notes: "Excellent performance; punctual, highly rated by students.",
    metrics: [
      { label: "Classes Taught", value: 5 },
      { label: "Attendance (%)", value: 98 },
      { label: "Parent Feedback", value: "Good" },
    ]
  };
  return (
    <Box>
      <Typography variant="h5" mb={2}>Employee Details</Typography>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Grid container spacing={2}>
          <Grid item>
            <Avatar src={employee.photoUrl} sx={{ width: 80, height: 80 }} />
          </Grid>
          <Grid item xs>
            <Typography fontWeight={600}>{employee.name}</Typography>
            <Typography>Employee ID: {employee.empId}</Typography>
            <Typography>Role/Position: {employee.position}</Typography>
            <Typography>Contact: {employee.contact}</Typography>
            <Typography variant="body2" color="textSecondary">{employee.notes}</Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="subtitle1">Performance Metrics:</Typography>
            <ul>
              {employee.metrics.map(m => (
                <li key={m.label}><b>{m.label}:</b> {m.value}</li>
              ))}
            </ul>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}