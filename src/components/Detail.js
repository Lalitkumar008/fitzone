import React from "react";
import { Typography, Stack, Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";
const Detail = ({ exerciseDetail }) => {
  // const history = useHistory();
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];
  return (
    <Stack
      gap="30x"
      sx={{ flexDirection: { lg: "row" }, p: "21px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} Loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h3" color="error">
          {name}
        </Typography>
        <Typography variant="h6">
          Exercises kepp you strong.{name}
          bup is one of the best exercises to target your {target}. It will help
          you improve your mood and gain energy.
        </Typography>
        {extraDetail.map((item) => {
          return (
            <Stack
              key={item.name}
              direction="row"
              gap="25px"
              alignItems="center"
            >
              <Button
                sx={{
                  background: "#ff2db",
                  borderRadius: "50%",
                  width: "101px",
                  height: "101px",
                  backgroundColor: "aliceblue",
                }}
              >
                <img
                  src={item.icon}
                  alt={bodyPart}
                  style={{ width: "51px", height: "51px" }}
                />
              </Button>
              <Typography textTransform="capitalize" variant="h5">
                {item.name}
              </Typography>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default Detail;
