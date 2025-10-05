import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Divider, Typography, Switch } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ReceiptIcon from "@mui/icons-material/Receipt";
import TableChartIcon from "@mui/icons-material/TableChart";
import SmsIcon from "@mui/icons-material/Sms";
import SettingsIcon from "@mui/icons-material/Settings";
import AssessmentIcon from "@mui/icons-material/Assessment";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { text: "Dashboard", icon: <DashboardIcon />, link: "/" },
  { text: "Students", icon: <GroupIcon />, link: "/students" },
  { text: "Employee", icon: <PeopleAltIcon />, link: "/employee" },
  { text: "Fees", icon: <MonetizationOnIcon />, link: "/finance" },
  { text: "Expenses", icon: <ReceiptIcon />, link: "/finance" },
  { text: "Reports", icon: <TableChartIcon />, link: "/reports" },
  { text: "SMS Reminders", icon: <SmsIcon />, link: "/sms" },
  { text: "Audit & Forecast", icon: <AssessmentIcon />, link: "/finance" },
  { text: "Settings", icon: <SettingsIcon />, link: "/settings" },
];

export default function Sidebar({ logoUrl, mode, setMode, user }) {
  const location = useLocation();

  // Role-based nav (example: parent only sees dashboard, students, reports, settings)
  const filteredNav = navItems.filter(item => {
    if (user.role === "parent") {
      return ["Dashboard", "Students", "Reports", "Settings"].includes(item.text);
    }
    if (user.role === "teacher") {
      return item.text !== "Employee";
    }
    return true;
  });

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 220,
        [`& .MuiDrawer-paper`]: { width: 220, boxSizing: "border-box" },
      }}
    >
      <div style={{ padding: 16, textAlign: "center" }}>
        <img src={logoUrl} alt="School Logo" style={{ height: 60, marginBottom: 8 }} />
        <Typography variant="h6" color="primary">GOH Accounting</Typography>
      </div>
      <Divider />
      <List>
        {filteredNav.map(item => (
          <ListItem
            button
            key={item.text}
            component={Link}
            to={item.link}
            selected={location.pathname === item.link}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <div style={{ position: "absolute", bottom: 16, left: 24 }}>
        <IconButton onClick={() => setMode(mode === "light" ? "dark" : "light")}>
          {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        <Switch
          checked={mode === "dark"}
          onChange={() => setMode(mode === "light" ? "dark" : "light")}
          color="primary"
        />
        <span style={{ fontSize: 12 }}>{mode === "dark" ? "Dark" : "Light"} mode</span>
      </div>
    </Drawer>
  );
}