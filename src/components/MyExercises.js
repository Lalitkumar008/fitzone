import React from "react";
import "./MyExercises.css";
import { useNavigate } from "react-router-dom";
import { Stack, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { BsPlusCircle, BsDashCircle } from "react-icons/bs";
import ExerciseCard from "./ExerciseCard";
const MyExercises = () => {
  const [{ exercises }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const removeFromExercises = (id) => {
    console.log("working", id);
    dispatch({
      type: "REMOVE_FROM_EXERCISES",
      id: id,
    });
  };
  return (
    <div className="myExercises">
      {exercises.length != 0 ? (
        <h2>Your Exercises ({exercises.length})</h2>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "220px 0",
            // justifyContent: "center",
          }}
        >
          <h3>It is Empty</h3>
          <button
            className="add-btn"
            // style={{ margin: "280px 470px" }}
            onClick={() => navigate("/")}
          >
            Add Some Exercise
          </button>
        </div>
      )}
      <div className="my-exercise-comp">
        {exercises.map((item) => {
          return (
            <Stack
              style={{
                marginBottom: "10px",
                border: "1px solid transparent",
                textDecoration: "none",
                // width: "100px",
              }}
              key={item.id}
            >
              <Stack className="exercise-card" style={{ margin: "10px " }}>
                <button
                  onClick={() => removeFromExercises(item.id)}
                  style={{
                    fontWeight: "900",
                    position: "absolute",
                    right: "0px",
                    fontSize: "20px",
                    // color: "#fff",
                    zIndex: "10",
                    border: "none",
                    background: "#fff",
                    fontSize: "28px",
                  }}
                >
                  <BsDashCircle />
                </button>
                <Link to={`/exercise/${item.id}`}>
                  <img
                    src={item.gifUrl}
                    alt={item.name}
                    loading="lazy"
                    width="180px"
                    height="180px"
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
                    {item.bodyPart}
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
                    {item.target}
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
                  {item.name}
                </Typography>
              </Stack>
            </Stack>
          );
        })}
      </div>
    </div>
  );
};

export default MyExercises;
