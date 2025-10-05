import React, { useState, useMemo } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import getTheme from "./theme";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import StudentDetails from "./pages/StudentDetails";
import Employee from "./pages/Employee";
import EmployeeDetails from "./pages/EmployeeDetails";
import Reports from "./pages/Reports";
import SMS from "./pages/SMS";
import Finance from "./pages/Finance";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import { AuthProvider, useAuth } from "./utils/AuthContext";

function AppRoutes({ logoUrl, setLogoUrl, primary, setPrimary, secondary, setSecondary, credits, setCredits }) {
  const [mode, setMode] = useState("light");
  const theme = useMemo(() => getTheme(mode, primary, secondary), [mode, primary, secondary]);
  const { user } = useAuth();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        {user && (
          <Sidebar
            logoUrl={logoUrl}
            mode={mode}
            setMode={setMode}
            user={user}
          />
        )}
        <div style={{ marginLeft: user ? 220 : 0, minHeight: "100vh", paddingBottom: 60, paddingTop: 24, paddingRight: 16, paddingLeft: 16 }}>
          <Routes>
            {!user ? (
              <Route path="*" element={<Login setLogoUrl={setLogoUrl} />} />
            ) : (
              <>
                <Route path="/" element={<Dashboard />} />
                <Route path="/students" element={<Students />} />
                <Route path="/students/:id" element={<StudentDetails />} />
                <Route path="/employee" element={<Employee />} />
                <Route path="/employee/:id" element={<EmployeeDetails />} />
                <Route path="/sms" element={<SMS />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/finance" element={<Finance />} />
                <Route path="/settings" element={
                  <Settings
                    logoUrl={logoUrl}
                    setLogoUrl={setLogoUrl}
                    primary={primary}
                    setPrimary={setPrimary}
                    secondary={secondary}
                    setSecondary={setSecondary}
                    credits={credits}
                    setCredits={setCredits}
                  />
                } />
                <Route path="*" element={<Navigate to="/" />} />
              </>
            )}
          </Routes>
        </div>
        <Footer credits={credits} />
      </Router>
    </ThemeProvider>
  );
}

export default function App() {
  const [logoUrl, setLogoUrl] = useState("/logo192.png"); // Default, changeable in settings
  const [primary, setPrimary] = useState("#003b4a");
  const [secondary, setSecondary] = useState("#cc9f53");
  const [credits, setCredits] = useState("");
  return (
    <AuthProvider>
      <AppRoutes
        logoUrl={logoUrl}
        setLogoUrl={setLogoUrl}
        primary={primary}
        setPrimary={setPrimary}
        secondary={secondary}
        setSecondary={setSecondary}
        credits={credits}
        setCredits={setCredits}
      />
    </AuthProvider>
  );
}