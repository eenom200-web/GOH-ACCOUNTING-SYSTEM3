import React, { useRef, useState } from "react";
import { Box, Typography, Button, Dialog, DialogTitle, DialogContent, TextField, Avatar, Grid } from "@mui/material";
import EmployeeTable from "../components/EmployeeTable";

export default function Employee() {
  const [open, setOpen] = useState(false);
  const [photo, setPhoto] = useState(null);
  const fileInputRef = useRef();

  const handlePhotoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <Box>
      <Typography variant="h4" mb={2}>Employee Management</Typography>
      <Box mb={2}>
        <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
          Add New Employee
        </Button>
      </Box>
      <EmployeeTable />
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Add New Employee</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} alignItems="center" sx={{ mt: 1 }}>
            <Grid item xs={12} sm={4}>
              <Button
                variant="outlined"
                onClick={() => fileInputRef.current.click()}
                fullWidth
                sx={{ mb: 1 }}
              >
                Upload Photo
              </Button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handlePhotoChange}
              />
              {photo && <Avatar src={photo} alt="Employee" sx={{ width: 80, height: 80, mt: 1 }} />}
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField label="Full Name" fullWidth margin="dense" />
              <TextField label="Employee ID" fullWidth margin="dense" />
              <TextField label="Role/Position" fullWidth margin="dense" />
              <TextField label="Contact" fullWidth margin="dense" />
              <TextField label="Performance Notes" fullWidth margin="dense" multiline rows={2} />
              <Box mt={2}>
                <Button variant="contained" color="primary" onClick={() => setOpen(false)}>
                  Save Employee
                </Button>
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </Box>
  );
}