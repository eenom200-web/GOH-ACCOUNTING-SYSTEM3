import React from "react";
import { Table, TableHead, TableRow, TableCell, TableBody, Avatar } from "@mui/material";

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
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}