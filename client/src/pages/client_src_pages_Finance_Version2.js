import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";
import ChartAnalytics from "../components/ChartAnalytics";

export default function Finance() {
  // Add more advanced analytics here as needed
  return (
    <Box>
      <Typography variant="h4" mb={2}>Financial Audit & Forecast</Typography>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="subtitle1" mb={2}>
          Financial Analytics & Projections
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <ChartAnalytics />
          </Grid>
          <Grid item xs={12} md={5}>
            <Typography variant="body2">
              <b>Forecast:</b><br />
              Based on current trends, collections for next term are projected to be <b>₦325,000</b> with expenses estimated at <b>₦120,000</b>.<br /><br />
              <b>Audit Note:</b><br />
              No discrepancies detected in the last 3 months.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}