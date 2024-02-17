import "./App.css";
import CustomAppBar from "./Components/AppBar/index.jsx";
import { Box, Tab, Tabs } from "@mui/material";
import TabPanel, { a11yProps } from "./Components/Tabs/index.jsx";
import { useState } from "react";
import DuelWindow from "./Components/Duel/index.jsx";

const App = () => {
  const [value, setValue] = useState(0);
  const handleChange = (_event, newValue) => {
    setValue(newValue);
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
          <TabPanel value={value} index={1}></TabPanel>
        </Box>
      </Box>
    </>
  );
};

export default App;
