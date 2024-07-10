import React from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { Box, Typography, Button } from "@mui/material";

function MuiTask() {
  const [selectedStyle, setSelectedStyle] = React.useState("neutral");

  const handleStyleChange = (event, newStyle) => {
    setSelectedStyle(newStyle);
  };
  return (
    <Box
      border={1}
      borderColor="#E0E0E0"
      padding="16px"
      maxWidth="500px"
      margin="auto"
    >
      <Box marginBottom="16px">
        <Typography
          fontSize="14px"
          fontWeight={400}
          marginBottom="8px"
          color="#00000099"
        >
          Select style (Optional)
        </Typography>
        <ToggleButtonGroup
          value={selectedStyle}
          exclusive
          onChange={handleStyleChange}
          aria-label="text alignment"
        >
          <ToggleButton value="neutral" aria-label="neutral">
            Neutral
          </ToggleButton>
          <ToggleButton value="formal" aria-label="formal">
            Formal
          </ToggleButton>
          <ToggleButton value="informal" aria-label="informal">
            Informal
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={() => alert(`Selected style: ${selectedStyle}`)}
      >
        Create Voice
      </Button>
    </Box>
  );
}

export default MuiTask;
