import React, { useState } from "react";
import { Paper, Typography, TextField, Button, MenuItem, Box } from "@mui/material";
import { useAuth } from "../utils/AuthContext";

const roles = [
  { label: "Admin", value: "admin" },
  { label: "Accountant", value: "accountant" },
  { label: "Teacher", value: "teacher" },
  { label: "Employee", value: "employee" },
  { label: "Parent", value: "parent" },
];

export default function Login({ setLogoUrl }) {
  const { setUser } = useAuth();
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("admin");
  const [password, setPassword] = useState("");
  const [logoPreview, setLogoPreview] = useState(null);

  // Demo login: just set user in context. Replace with real API call.
  const handleLogin = (e) => {
    e.preventDefault();
    setUser({ username, role });
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setLogoPreview(url);
      setLogoUrl(url);
    }
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center" minHeight="100vh" bgcolor="#f8f9fa">
      <Paper sx={{ width: 370, p: 4, boxShadow: 4 }}>
        <Box textAlign="center" mb={2}>
          <input
            type="file"
            id="logo-upload"
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleLogoChange}
          />
          <label htmlFor="logo-upload" style={{ cursor: "pointer" }}>
            <img
              src={logoPreview || "/logo192.png"}
              alt="School Logo"
              style={{ width: 72, height: 72, objectFit: "contain", borderRadius: 12, marginBottom: 8 }}
              title="Upload School Logo"
            />
          </label>
          <Typography variant="h5" color="primary" fontWeight={600}>
            GOH Admin Portal
          </Typography>
        </Box>
        <form onSubmit={handleLogin}>
          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            variant="outlined"
            fullWidth
            margin="normal"
            autoFocus
          />
          <TextField
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
          />
          <TextField
            select
            label="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            fullWidth
            margin="normal"
          >
            {roles.map((r) => (
              <MenuItem key={r.value} value={r.value}>
                {r.label}
              </MenuItem>
            ))}
          </TextField>
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Login
          </Button>
        </form>
      </Paper>
    </Box>
  );
}