import React, { useEffect, useState } from "react";

import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { borderRadius, width } from "@mui/system";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollBar from "../components/HorizontalScrollBar";

const SearchExercises1 = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");

  const [bodyParts, setBodyParts] = useState([]);
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartData]);
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      setExercises(exerciseData);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      const searchedExercises = exerciseData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );
      window.scrollTo({ top: 1500, left: 100, behavior: "smooth" });
      console.log(searchedExercises);
      console.log(exerciseData);
      setSearch("");

      setExercises(searchedExercises);
    }
  };

  return (
    <Stack justifyContent="center" padding="2% 6%" margin="20px 100px">
      <Typography
        sx={{
          fontSize: "30px",
          fontWeight: "600",
          textAlign: "center",
          mt: "100px",
          mb: "24px",
        }}
      >
        Awesome Exercises you should know
      </Typography>
      <Box>
        <TextField
          sx={{
            input: {
              borderRadius: "10px",
              border: "none",
              fontWeight: "600",
            },
            width: { lg: "800px", xs: "340px" },
            backgroundColor: "#fff",
            borderRadius: "120px",
          }}
          value={search}
          placeholder="search exrecises"
          onChange={(e) => {
            setSearch(e.target.value.toLocaleLowerCase());
          }}
          height="80px"
          type="text"
        />

        <Button
          className="search-btn"
          variant="contained"
          onClick={handleSearch}
          sx={{
            backgroundColor: "#ff2625",
            mx: "0px",
            padding: "6px",
            textTransform: "none",
            width: { lg: "200px", xs: "81px" },
            position: "absolute",
            height: "54px",
          }}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "90%", padding: "30px" }}>
        <HorizontalScrollBar
          data={bodyParts}
          bodyParts
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          isBodyParts
          serach={search}
        />
        {/* <h2>working</h2> */}
      </Box>
    </Stack>
  );
};
export default SearchExercises1;
