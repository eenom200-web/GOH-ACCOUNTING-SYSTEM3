import React, { useRef } from "react";
import { Paper, Typography, Button, TextField } from "@mui/material";

export default function Settings({
  logoUrl, setLogoUrl,
  primary, setPrimary,
  secondary, setSecondary,
  credits, setCredits,
}) {
  const inputRef = useRef();
  const handleLogoChange = e => {
    const file = e.target.files[0];
    if (file) setLogoUrl(URL.createObjectURL(file));
  };

  return (
    <Paper sx={{ maxWidth: 600, margin: "32px auto", p: 3 }}>
      <Typography variant="h5" gutterBottom>App Settings</Typography>
      <div style={{ marginTop: 24 }}>
        <Typography variant="subtitle1">School Logo</Typography>
        <img src={logoUrl} alt="Logo" style={{ height: 60, display: "block", margin: "12px 0" }} />
        <Button variant="contained" onClick={() => inputRef.current.click()}>Upload Logo</Button>
        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          style={{ display: "none" }}
          onChange={handleLogoChange}
        />
      </div>
      <div style={{ marginTop: 24 }}>
        <Typography variant="subtitle1">Theme Colors</Typography>
        <TextField
          label="Primary Color"
          type="color"
          value={primary}
          onChange={e => setPrimary(e.target.value)}
          style={{ marginRight: 16, width: 100 }}
        />
        <TextField
          label="Secondary Color"
          type="color"
          value={secondary}
          onChange={e => setSecondary(e.target.value)}
          style={{ width: 100 }}
        />
      </div>
      <div style={{ marginTop: 24 }}>
        <Typography variant="subtitle1">Footer Credits</Typography>
        <TextField
          label="Custom Footer"
          fullWidth
          margin="normal"
          value={credits}
          onChange={e => setCredits(e.target.value)}
          placeholder="e.g. Powered by GOH ADMIN 2025, all rights reserved."
        />
      </div>
    </Paper>
  );
}