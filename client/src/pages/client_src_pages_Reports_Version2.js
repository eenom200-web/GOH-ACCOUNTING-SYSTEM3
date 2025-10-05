import React from "react";
import { Box, Typography, Paper, Button } from "@mui/material";
import ChartAnalytics from "../components/ChartAnalytics";

export default function Reports() {
  // You would fetch/generate real reports and print/download here
  const handlePrint = () => window.print();
  return (
    <Box>
      <Typography variant="h4" mb={2}>Reports</Typography>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="subtitle1" mb={2}>
          Financial & Academic Reports (Printable)
        </Typography>
        <ChartAnalytics />
        <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handlePrint}>
          Print / Download Report
        </Button>
      </Paper>
    </Box>
  );
}