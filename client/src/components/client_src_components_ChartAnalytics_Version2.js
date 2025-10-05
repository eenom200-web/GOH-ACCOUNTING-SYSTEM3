import React from "react";
import { Paper, Typography } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell } from "recharts";

// Demo data; replace with real API data
const financesData = [
  { month: "Jan", collections: 30000, expenses: 15000 },
  { month: "Feb", collections: 40000, expenses: 18000 },
  { month: "Mar", collections: 35000, expenses: 19000 },
  { month: "Apr", collections: 25000, expenses: 14000 },
  { month: "May", collections: 50000, expenses: 20000 },
  { month: "Jun", collections: 70000, expenses: 30000 },
];
const classPieData = [
  { name: "JSS1", value: 30 },
  { name: "JSS2", value: 24 },
  { name: "SS1", value: 26 },
  { name: "SS2", value: 20 },
];
const COLORS = ["#003b4a", "#cc9f53", "#00bfae", "#ffb300"];

export default function ChartAnalytics() {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="subtitle1" mb={2}>
        Financial Trends & Class Distribution
      </Typography>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
        <div style={{ flex: 1, minWidth: 340, height: 260 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={financesData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="collections" stroke="#003b4a" />
              <Line type="monotone" dataKey="expenses" stroke="#cc9f53" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div style={{ flex: 1, minWidth: 230, height: 250 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={classPieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              >
                {classPieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Paper>
  );
}