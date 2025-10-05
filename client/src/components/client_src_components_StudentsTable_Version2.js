import React from "react";
import { Table, TableHead, TableRow, TableCell, TableBody, Avatar, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";

// Demo data; replace with API data
const demoStudents = [
  { id: 1, name: "John Doe", class: "JSS1", admissionNo: "ADM001", parentContact: "08012345678", photoUrl: "" },
  { id: 2, name: "Mary Jane", class: "SS1", admissionNo: "ADM002", parentContact: "08087654321", photoUrl: "" },
];

export default function StudentsTable() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Photo</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Admission No</TableCell>
          <TableCell>Class</TableCell>
          <TableCell>Parent Contact</TableCell>
          <TableCell>View</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoStudents.map(student => (
          <TableRow key={student.id}>
            <TableCell>
              <Avatar src={student.photoUrl} alt={student.name}>{student.name.charAt(0)}</Avatar>
            </TableCell>
            <TableCell>{student.name}</TableCell>
            <TableCell>{student.admissionNo}</TableCell>
            <TableCell>{student.class}</TableCell>
            <TableCell>{student.parentContact}</TableCell>
            <TableCell>
              <IconButton component={Link} to={`/students/${student.id}`}>
                <VisibilityIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}