import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

const LinearProgressWithLabel = (props) => {
  const { value } = props;
  const color = value <= 30 ? "error" : "primary";
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress color={color} variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}`}</Typography>
      </Box>
    </Box>
  );
};

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};
const DuelWindow = () => {
  const [car1Data, setCar1Data] = useState({});
  const [car2Data, setCar2Data] = useState({});
  const [car1Progress, setCar1Progress] = useState(100);
  const [car2Progress, setCar2Progress] = useState(100);

  const fetchData = async (carID, setCarData) => {
    try {
      const response = await fetch(`http://localhost:3000/api/car/${carID}`);
      const data = await response.json();
      console.log(data);
      setCarData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchHP = async (carId, setProgress) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/car/getHP/${carId}`
      );
      const data = await response.json();
      setProgress(data.healthPoints);
    } catch (error) {
      console.error("Error fetching HP:", error);
    }
  };

  useEffect(() => {
    fetchData("e3ad3978-9c7b-42a7-837e-3c10d27df0b4", setCar1Data);
    fetchData("5a1beb6e-5940-439c-a308-b5cbfa0606ce", setCar2Data);
    const timer = setInterval(() => {
      fetchHP("e3ad3978-9c7b-42a7-837e-3c10d27df0b4", setCar1Progress); // Replace 1 with the actual car ID
      fetchHP("5a1beb6e-5940-439c-a308-b5cbfa0606ce", setCar2Progress); // Replace 2 with the actual car ID
    }, 500);
    fetchData();
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 250,
          height: 250,
        },
      }}
    >
      <Paper>
        <Typography sx={{ ml: 2 }} variant="h6">
          {car1Data.name}
        </Typography>
        <LinearProgressWithLabel value={car1Progress} />
      </Paper>
      <Paper>
        <Typography sx={{ ml: 2 }} variant="h6">
          {car2Data.name}
        </Typography>
        <LinearProgressWithLabel value={car2Progress} />
      </Paper>
    </Box>
  );
};
export default DuelWindow;
