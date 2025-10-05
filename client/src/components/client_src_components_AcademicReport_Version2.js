import React from "react";
import { Paper, Typography, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

export default function AcademicReport() {
  // Demo data
  const scores = [
    { subject: "Mathematics", score: 92 },
    { subject: "English", score: 85 },
    { subject: "Science", score: 88 },
    { subject: "Social Studies", score: 80 },
  ];
  return (
    <Paper sx={{ mb: 3, p: 2 }}>
      <Typography variant="h6" mb={1}>Academic Report</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Subject</TableCell>
            <TableCell>Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {scores.map((row, idx) => (
            <TableRow key={idx}>
              <TableCell>{row.subject}</TableCell>
              <TableCell>{row.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}