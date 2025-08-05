import { useState } from "react";
import { TextField, Typography, Box } from "@mui/material";
import React from "react";

const PercentageChangeCalculator = () => {
  const [initialValue, setInitialValue] = useState("");
  const [finalValue, setFinalValue] = useState("");

  // Calculate percentage change
  const calculateChange = () => {
    const initial = parseFloat(initialValue);
    const final = parseFloat(finalValue);

    if (!initial || !final) return null;

    const change = ((final - initial) / Math.abs(initial)) * 100;
    return change.toFixed(2);
  };

  const result = calculateChange();
  const isIncrease = result && result > 0;
  const isDecrease = result && result < 0;

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
      {/* <Typography variant="h6" gutterBottom>
        Percentage Change Calculator
      </Typography> */}
      <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: "center",gap: 1, }}>
        <Typography>What is the percentage increase/decrease from</Typography>
        <TextField
          type="number"
          label="Initial Value"
          variant="outlined"
          size="small"
          value={initialValue}
          onChange={(e) => setInitialValue(e.target.value)}
          sx={{ width: { xs: '100%', sm: 'auto' } }}
        />
        <Typography> to </Typography>
        <TextField
          type="number"
          label="Final Value"
          variant="outlined"
          size="small"
          value={finalValue}
          onChange={(e) => setFinalValue(e.target.value)}
          sx={{ width: { xs: '100%', sm: 'auto' } }}
        />
        <Typography> = </Typography>
        <Typography variant="h6" color={isIncrease ? "green" : isDecrease ? "red" : "text.primary"}>
          {result !== null ? (
            <>
              {isIncrease ? "Increase" : isDecrease ? "Decrease" : ""}: {Math.abs(result)}%
            </>
          ) : (
            "?"
          )}
        </Typography>
      </Box>
    </Box>
  );
};

export default PercentageChangeCalculator;
