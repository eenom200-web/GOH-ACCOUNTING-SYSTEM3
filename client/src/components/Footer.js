import React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer({ credits }) {
  const year = new Date().getFullYear();
  return (
    <Box sx={{
      p: 2,
      mt: 6,
      textAlign: "center",
      bgcolor: "background.paper",
      borderTop: "1px solid #eee",
    }}>
      <Typography variant="body2" color="textSecondary">
        {credits || `Powered by GOH ADMIN ${year}, all rights reserved.`}
      </Typography>
    </Box>
  );
}