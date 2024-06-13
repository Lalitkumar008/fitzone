import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
import { useStateValue } from "./StateProvider";
import { BsPlusCircle, BsDashCircle } from "react-icons/bs";
import { auth } from "../utils/firebase";

const ExerciseCard = ({ exercise }) => {
  const [{ exercises, user }, dispatch] = useStateValue();
  const [button, setButton] = useState(true);
  const [disabled, setDisabled] = useState(false);

  const addToExercises = () => {
    const { id, gifUrl, equipment, bodyPart, target, name } = exercise;
    console.log("dispatching exercise", exercise.target);
    if (user) {
      setButton(false);
      setDisabled(true);
      dispatch({
        type: "ADD_TO_EXERCISES",
        item: {
          id: id,
          equipment: equipment,
          gifUrl: gifUrl,
          bodyPart: bodyPart,
          target: target,
          name: name,
        },
      });
    } else {
      alert("log in to continue");
    }
  };
  return (
    <Stack
      className="exercise-card"
      // style={{ color: "RED", border: "1px solid blue" }}
    >
      <Link to={`/exercise/${exercise.id}`}>
        <img
          src={exercise.gifUrl}
          alt={exercise.name}
          loading="lazy"
          width="300px"
          height="300px"
        />
      </Link>
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#FFA9A9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#FCC757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="#000"
        fontWeight="bold"
        sx={{ fontSize: { lg: "24px", xs: "20px" } }}
        mt="11px"
        pb="10px"
        textTransform="capitalize"
      >
        {exercise.name}
      </Typography>
      <button
        onClick={addToExercises}
        style={{
          fontWeight: "900",
          position: "absolute",
          right: "0px",
          fontSize: "20px",
          // color: "#fff",
          border: "none",
          background: "#fff",
          fontSize: "28px",
        }}
        disabled={disabled}
      >
        {button ? <BsPlusCircle color="red" /> : <BsDashCircle />}
      </button>
    </Stack>
  );
};

export default ExerciseCard;
