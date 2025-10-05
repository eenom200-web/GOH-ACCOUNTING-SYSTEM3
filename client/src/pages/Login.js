import React, { useState } from "react";
import { Button, TextField, Paper, Typography } from "@mui/material";
import { useAuth } from "../utils/AuthContext";

export default function Login() {
  const { setUser } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin"); // For demo/testing only
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Replace with real API call!
    if (username && password) {
      setUser({ username, role });
    } else {
      setError("Invalid login");
    }
  };

  return (
    <Paper style={{ maxWidth: 400, margin: "64px auto", padding: 32 }}>
      <Typography variant="h5" gutterBottom>Login</Typography>
      <TextField
        fullWidth
        margin="normal"
        label="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <TextField
        fullWidth
        margin="normal"
        type="password"
        label="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <TextField
        select
        fullWidth
        margin="normal"
        label="Role (for demo)"
        value={role}
        onChange={e => setRole(e.target.value)}
        SelectProps={{ native: true }}
      >
        <option value="admin">Admin</option>
        <option value="accountant">Accountant</option>
        <option value="teacher">Teacher</option>
        <option value="parent">Parent</option>
      </TextField>
      {error && <Typography color="error">{error}</Typography>}
      <Button onClick={handleLogin} variant="contained" color="primary" fullWidth style={{ marginTop: 16 }}>
        Login
      </Button>
    </Paper>
  );
}