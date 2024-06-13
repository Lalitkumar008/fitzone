import React from "react";
import "./MemberShip.css";
import { Box, Stack, Card, Typography } from "@mui/material";
import imgIcon from "../assets/images/menDumbBell1.jpg";
import memberShipData from "../utils/memberShipData";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
const MemberShip = () => {
  return (
    <Stack>
      <Box
        id="plans"
        color="#000"
        backgroundColor="#18122B"
        // padding="1% 1%"
        // border="1px solid red "
      >
        <Box sx={{ backgroundColor: "#18122B" }}>
          <Typography
            variant="h4"
            fontWeight="900"
            color="#ffff"
            fontSize="30px"
            mx="50px"
            my="50px"
          >
            Start Your Journey with{" "}
            <span style={{ color: "red", fontWeight: "600", fontSize: "35px" }}>
              APEX++
            </span>{" "}
          </Typography>
          <Typography
            variant="h6"
            color="#FFF"
            sx={{
              margin: "0",
              fontWeight: "500",
              fontSize: "1.25rem",
              lineHeight: "1.6",
              letterSpacing: "3px",
              color: "#FFF",
              marginTop: "-55px",
              marginLeft: "52px",
              marginRight: "40px",
              marginBottom: "25px",
            }}
          >
            CHOOSE A PRICING PLAN
          </Typography>
          {memberShipData.map((memberShip) => {
            const { id, price, time, imgIcon, consult, plan, icon } =
              memberShip;
            return (
              <Stack
                className="membership-plan"
                sx={{
                  display: "inline-block",
                  mx: "88px",
                  padding: "60px 10px",
                  border: "1px solid silver",
                  color: "#fff",
                  marginBottom: "35px",
                }}
                width="250px"
                height="370px"
              >
                <h4
                  style={{
                    fontSize: "20px",
                    fontFamily: "Verdana",
                  }}
                >
                  {plan}
                </h4>
                <h3 style={{ fontSize: "34px", padding: "13px 2px" }}>
                  ₹ {price}
                  <span style={{ fontSize: "20px", fontWeight: "400" }}>
                    /month
                  </span>
                </h3>
                <h4 style={{ padding: "15px 2px", fontSize: "21px" }}>
                  <TaskAltIcon />
                  {time}
                </h4>
                <h4 style={{ padding: "15px 2px", fontSize: "16px" }}>
                  <TaskAltIcon />
                  {consult}
                </h4>

                <button
                  style={{
                    display: "block",
                    border: "none",
                    width: "90%",
                    margin: "1px 10px 9px 5px",
                    padding: "6px 10px",
                    backgroundColor: "yellow",
                    // color: "#fff",
                    fontWeight: "600",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                >
                  Join Now
                </button>
              </Stack>
            );
          })}
        </Box>
      </Box>
    </Stack>
  );
};

export default MemberShip;
