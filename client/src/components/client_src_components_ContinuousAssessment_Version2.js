import React from "react";
import { Paper, Typography, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

export default function ContinuousAssessment() {
  // Demo data
  const assessments = [
    { term: "First", ca: 22 },
    { term: "Second", ca: 18 },
    { term: "Third", ca: 20 },
  ];
  return (
    <Paper sx={{ mb: 3, p: 2 }}>
      <Typography variant="h6" mb={1}>Continuous Assessment</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Term</TableCell>
            <TableCell>CA Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {assessments.map((row, idx) => (
            <TableRow key={idx}>
              <TableCell>{row.term}</TableCell>
              <TableCell>{row.ca}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}