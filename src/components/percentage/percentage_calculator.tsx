import { useState } from "react";
import { TextField, Typography, Box } from "@mui/material";
import React from "react";

const PercentageCalculator = () => {
  const [percentage, setPercentage] = useState("");
  const [number, setNumber] = useState("");

  // Calculate percentage value
  const result = percentage && number ? ((percentage / 100) * number).toFixed(2) : 0;

  return (
    <Box
      sx={{
        p: 3,
        bgcolor: "background.paper",
        boxShadow: 3,
        borderRadius: 2,
        maxWidth: 500,
        mx: "auto",
        textAlign: "center",
      }}
    >
      <Typography variant="h6" gutterBottom>
        Percentage Calculator
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Typography>What is </Typography>
        <TextField
          type="number"
          label="Percentage"
          variant="outlined"
          size="small"
          value={percentage}
          onChange={(e) => setPercentage(e.target.value)}
          sx={{ width: 120 }}
        />
        <Typography>% of</Typography>
        <TextField
          type="number"
          label="Number"
          variant="outlined"
          size="small"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          sx={{ width: 120 }}
        />
        <Typography>=</Typography>
        <Typography variant="h6" color="primary">
          {result || "?"}
        </Typography>
      </Box>
    </Box>
  );
};

export default PercentageCalculator;
