import { useState } from "react";
import { TextField, Typography, Box } from "@mui/material";
import React from "react";

const PercentageCalculator = () => {
  const [percentage, setPercentage] = useState("");
  const [value1, setValue1] = useState("");
  const [number, setNumber,] = useState("");
  const [number2, setNumber2] = useState("");

  // Calculate percentage value
  const result1 = percentage && number ? ((percentage / 100) * number).toFixed(2) : 0;
  const result2 = value1 && number2 ? ((value1 *100) / number2).toFixed(3):0;

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
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, paddingTop:5}}>
      <Typography>What is </Typography>
        <TextField
          type="number"
          label="Percentage"
          variant="outlined"
          size="small"
          value={percentage}
          onChange={(e) => setPercentage(e.target.value)}
          sx={{ width: '20%' }}
        />
        <Typography>% of</Typography>
        <TextField
          type="number"
          label="Number"
          variant="outlined"
          size="small"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          sx={{ width: '20%' }}
        />
        <Typography>=</Typography>
        <Typography variant="h6" color="primary" display="flex">
          {result1 || "?"}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, paddingTop:5}}>
        {/* Value to Percentage */}
        <TextField
          type="number"
          label="Value"
          variant="outlined"
          size="small"
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
          sx={{ width: '20%' }}
        />
        <Typography>is what percentage of</Typography>
        <TextField
          type="number"
          label="Number"
          variant="outlined"
          size="small"
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
          sx={{ width: '20%' }}
        />
        <Typography>=</Typography>
        <Typography variant="h6" color="primary" display="flex">
          {result2+ "%"|| "?"}
        </Typography>
      </Box>
    </Box>
  );
};

export default PercentageCalculator;
