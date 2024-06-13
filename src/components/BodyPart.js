import React, { useContext } from "react";
import { Stack, Typography } from "@mui/material";
import PlanExercise from "./PlanExercise";
import Icon from "../assets/icons/gym.png";
const BodyPart = ({ parts, bodyPart, setBodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === parts ? "4px solid #ff2625" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "130px",
        height: "160px",
        cursor: "pointer",
        gap: "45px",
      }}
      onClick={() => {
        setBodyPart(parts);
        window.scrollTo({ top: 1240, left: 100, behaviour: "smmoth" });
      }}
    >
      <img src={Icon} alt="dumbell" style={{ width: "41px", height: "30px" }} />

      <Typography fontWeight="600" fontSize="20px" color="grey">
        {parts}
      </Typography>
      {/* <PlanExercise /> */}
    </Stack>
  );
};

export default BodyPart;
