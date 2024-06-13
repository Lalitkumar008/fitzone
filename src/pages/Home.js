import React, { useState } from "react";
import { Box } from "@mui/material";

import HeroBanner1 from "../components/HeroBanner1";
import SearchExercises1 from "../components/SearchExercises1";
import Exercises1 from "../components/Exercises1";
import MemberShip from "../components/MemberShip";
const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  console.log(bodyPart);
  return (
    <Box>
      <HeroBanner1 />
      <SearchExercises1
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises1
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
      />
      {/* <MemberShip /> */}
    </Box>
  );
};
export default Home;
