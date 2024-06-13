import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import { exerciseOptions, fetchData, newExercises } from "../utils/fetchData";
import ExerciseCard from "../components/ExerciseCard";
import Loader from "./Loader";
const Exercises1 = ({ exercises, setExercises, bodyPart, search }) => {
  const [result, setResult] = useState(bodyPart);
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;

  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;

  const currentExercises = exercises?.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );
  console.log(currentExercises, "current exercises");
  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1400, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExerciseData = async () => {
      let exercisesData = exercises;

      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
        setExercises(exercisesData);
      }
      // const exerciseNew = await fetchData(
      //   "https://musclewiki.p.rapidapi.com/exercises/attributes",
      //   newExercises
      // );
      // console.log("new exercises>>>>>>", exerciseNew);
    };
    fetchExerciseData();
  }, [bodyPart]);

  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="21px">
      <Typography variant="h4" mb="46px">
        Showing Results for :{" "}
        <span style={{ color: "#FF2625" }}>
          {bodyPart}{" "}
          <span style={{ color: "#ccc" }}>({exercises?.length} exercises)</span>
        </span>
      </Typography>
      <Stack
        direction="row-3"
        justifyContent="center"
        flexWrap="wrap"
        sx={{ gap: { lg: "60px", xs: "50px" }, my: "30px" }}
      >
        {currentExercises.map((exercise, index) => {
          return (
            <div key={index}>
              <ExerciseCard
                key={index}
                exercise={exercise}
                width="100px"
                height="100px"
              />
            </div>
          );
        })}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises?.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises1;
