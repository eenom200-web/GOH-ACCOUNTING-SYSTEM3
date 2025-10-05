import React from "react";
import { Box, Typography, Paper, Grid, Avatar, Divider, Button } from "@mui/material";
import AcademicReport from "../components/AcademicReport";
import ContinuousAssessment from "../components/ContinuousAssessment";

export default function StudentDetails() {
  // Demo data; replace with API data and routing params
  const student = {
    name: "John Doe",
    class: "JSS1",
    admissionNo: "ADM001",
    parentName: "Jane Doe",
    parentContact: "08012345678",
    photoUrl: "",
    notes: "Excellent in mathematics."
  };
  return (
    <Box>
      <Typography variant="h5" mb={2}>Student Details</Typography>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Grid container spacing={2}>
          <Grid item>
            <Avatar src={student.photoUrl} sx={{ width: 80, height: 80 }} />
          </Grid>
          <Grid item xs>
            <Typography fontWeight={600}>{student.name}</Typography>
            <Typography>Admission No: {student.admissionNo}</Typography>
            <Typography>Class: {student.class}</Typography>
            <Typography>Parent: {student.parentName} ({student.parentContact})</Typography>
            <Typography variant="body2" color="textSecondary">{student.notes}</Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary">
              Financial Status
            </Button>
            <Button variant="outlined" color="secondary" sx={{ mt: 1 }}>
              Print Academic Report
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <Divider sx={{ mb: 3 }} />
      <AcademicReport />
      <ContinuousAssessment />
    </Box>
  );
}