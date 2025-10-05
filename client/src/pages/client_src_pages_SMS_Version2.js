import React, { useState } from "react";
import { Box, Typography, Paper, TextField, Button, MenuItem, Snackbar, Alert } from "@mui/material";

const demoStudents = [
  { id: 1, name: "John Doe", class: "JSS1", parentContact: "08012345678" },
  { id: 2, name: "Mary Jane", class: "SS1", parentContact: "08087654321" },
];

export default function SMS() {
  const [selected, setSelected] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    // Integrate with backend and Twilio API
    setSent(true);
    setMessage("");
  };

  return (
    <Box>
      <Typography variant="h4" mb={2}>SMS Reminders</Typography>
      <Paper sx={{ p: 3, maxWidth: 500 }}>
        <TextField
          select
          label="Select Parent/Student"
          value={selected}
          onChange={e => setSelected(e.target.value)}
          fullWidth
          margin="normal"
        >
          {demoStudents.map(s => (
            <MenuItem key={s.id} value={s.parentContact}>
              {s.name} ({s.class}) - {s.parentContact}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Message"
          multiline
          rows={4}
          value={message}
          onChange={e => setMessage(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          disabled={!selected || !message}
          onClick={handleSend}
        >
          Send SMS
        </Button>
      </Paper>
      <Snackbar open={sent} autoHideDuration={4000} onClose={() => setSent(false)}>
        <Alert severity="success" sx={{ width: '100%' }}>
          SMS sent successfully (demo)!
        </Alert>
      </Snackbar>
    </Box>
  );
}