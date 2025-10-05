import React, { useRef, useState } from "react";
import { Box, Typography, Button, Dialog, DialogTitle, DialogContent, TextField, FormControl, InputLabel, Select, MenuItem, Avatar, Grid } from "@mui/material";
import StudentsTable from "../components/StudentsTable";

export default function Students() {
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
      <Typography variant="h4" mb={2}>Students Management</Typography>
      <Box mb={2}>
        <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
          Add New Learner
        </Button>
      </Box>
      <StudentsTable />
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Add New Learner</DialogTitle>
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
              {photo && <Avatar src={photo} alt="Learner" sx={{ width: 80, height: 80, mt: 1 }} />}
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField label="Full Name" fullWidth margin="dense" />
              <TextField label="Admission No" fullWidth margin="dense" />
              <FormControl fullWidth margin="dense">
                <InputLabel>Class</InputLabel>
                <Select label="Class">
                  <MenuItem value="JSS1">JSS1</MenuItem>
                  <MenuItem value="JSS2">JSS2</MenuItem>
                  <MenuItem value="SS1">SS1</MenuItem>
                  <MenuItem value="SS2">SS2</MenuItem>
                </Select>
              </FormControl>
              <TextField label="Parent Name" fullWidth margin="dense" />
              <TextField label="Parent Contact" fullWidth margin="dense" />
              <TextField label="Notes" fullWidth margin="dense" multiline rows={2} />
              <Box mt={2}>
                <Button variant="contained" color="primary" onClick={() => setOpen(false)}>
                  Save Learner
                </Button>
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </Box>
  );
}