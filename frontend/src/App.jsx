import "./App.css";
import CustomAppBar from "./Components/AppBar/index.jsx";
import { Box, Tab, Tabs, Button } from "@mui/material";
import TabPanel, { a11yProps } from "./Components/Tabs/index.jsx";
import { useState } from "react";
import DuelWindow from "./Components/Duel/index.jsx";
import ScoreBoard from "./Components/ScoreBoard/index.jsx";
import { sendCharAfterDelay } from "./Serial.js";

const App = () => {
  const [value, setValue] = useState(0);
  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  // Function to handle button click
  const handleButtonClick = () => {
    // Call the function to send a character after a delay
    sendCharAfterDelay("S", 3000);
    // Play the MP3 file
  };

  return (
    <>
      <CustomAppBar></CustomAppBar>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Live Duel" {...a11yProps(0)} />
            <Tab label="Scoreboard" {...a11yProps(1)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <DuelWindow></DuelWindow>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <ScoreBoard></ScoreBoard>
          </TabPanel>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {/* Button triggering the function after a delay */}
        <Button
          sx={{ pl: 3, pr: 3 }}
          variant="contained"
          onClick={handleButtonClick}
        >
          Begin
        </Button>
      </Box>
    </>
  );
};

export default App;
