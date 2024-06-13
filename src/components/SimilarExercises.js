import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Loader from "./Loader";
import Carousel from "react-multi-carousel";
import HorizontalScrollBar from "./HorizontalScrollBar";
// const responsive = {
//   superLargeDesktop: {
//     // the naming can be any, depends on you.
//     breakpoint: { max: 4000, min: 300 },
//     items: 5,
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//   },
// };
const SimilarExercises = ({ equipmentExercises, targetMuscleExercises }) => {
  return (
    // <Carousel responsive={responsive} className="similar-carousel">
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant="h3">
        Similar{" "}
        <span style={{ fontWeight: "600", color: "#ff2526" }}>
          Target Muscle{" "}
        </span>
        Exercises
      </Typography>
      <Stack
        direction="column"
        sx={{ p: "2", position: "relative" }}
        // mx="-50px"
        paddingBottom="30px"
        width="92%"
      >
        {targetMuscleExercises.length ? (
          <HorizontalScrollBar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
        <Typography variant="h3" mx="2">
          Similar{" "}
          <span style={{ fontWeight: "600", color: "#ff2526" }}>
            Equipment{" "}
          </span>
          Exercises
        </Typography>
        <Stack
          // direction=""
          sx={{ position: "" }}
        >
          {equipmentExercises.length !== 0 ? (
            <HorizontalScrollBar data={equipmentExercises} />
          ) : (
            <Loader />
          )}
        </Stack>
      </Stack>
    </Box>
    // {/* </Carousel> */}
  );
};

export default SimilarExercises;
