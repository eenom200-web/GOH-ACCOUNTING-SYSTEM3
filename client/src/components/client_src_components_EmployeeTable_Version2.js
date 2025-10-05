import React from "react";
import { Table, TableHead, TableRow, TableCell, TableBody, Avatar, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";

// Demo data; replace with API data
const demoEmployees = [
  { id: 1, name: "Jane Staff", empId: "EMP01", position: "Teacher", contact: "08011112222", photoUrl: "" },
  { id: 2, name: "Samuel Admin", empId: "EMP02", position: "Accountant", contact: "08033334444", photoUrl: "" },
];

export default function EmployeeTable() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Photo</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Employee ID</TableCell>
          <TableCell>Role/Position</TableCell>
          <TableCell>Contact</TableCell>
          <TableCell>View</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoEmployees.map(emp => (
          <TableRow key={emp.id}>
            <TableCell>
              <Avatar src={emp.photoUrl} alt={emp.name}>{emp.name.charAt(0)}</Avatar>
            </TableCell>
            <TableCell>{emp.name}</TableCell>
            <TableCell>{emp.empId}</TableCell>
            <TableCell>{emp.position}</TableCell>
            <TableCell>{emp.contact}</TableCell>
            <TableCell>
              <IconButton component={Link} to={`/employee/${emp.id}`}>
                <VisibilityIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}