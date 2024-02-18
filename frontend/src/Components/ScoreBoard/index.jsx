import Box from "@mui/material/Box";

const ScoreBoard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
        },
      }}
    >
      <img
        src="https://media.istockphoto.com/id/1356466745/vector/vector-illustration-coming-soon-banner-with-clock-sign.jpg?s=612x612&w=0&k=20&c=B3zjuvyrKLWPXmadC1TptchLH6et9P9-Nrr76Pia8Lo="
        alt=""
      />
    </Box>
  );
};

export default ScoreBoard;
