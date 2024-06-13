import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

import HeroBannerImage from "../assets/images/banner.png";
import menDumbBell1 from "../assets/images/menDumbBell1.jpg";
import menDumbBell2 from "../assets/images/menDumbBell2.jpg";
import menDumbBell3 from "../assets/images/menDumbBell3.jpg";
import menDumbBell4 from "../assets/images/menDumbBell4.jpg";
import menDumbBell5 from "../assets/images/menDumbBell5.jpg";
import latest1 from "../assets/images/latest1.jpg";
import latest2 from "../assets/images/latest2.jpg";
import latest3 from "../assets/images/latest3.jpg";
import latest4 from "../assets/images/latest4.jpg";

import { padding } from "@mui/system";
const HeroBanner1 = () => {
  const handleClick = () => {
    window.scrollTo({ top: "1500", left: "0", behavior: "smooth" });
  };
  return (
    <Box
      color="#fff"
      sx={{ mt: { lg: "180px", xs: "72px" }, ml: { sm: "51px" } }}
      position="relative"
      p="18px"
    >
      <Typography
        color="#FF2625"
        fontSize="20px"
        fontWeight="700"
        marginTop="-20px"
      >
        Fitness app
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "40px", xs: "35px" } }}
        mb="10px"
        mt="29px"
        color="#000"
      >
        Sweat,Smile <br /> and Repeat
      </Typography>
      <Typography
        sx={{
          fontSize: { lg: "20px", xs: "24px" },
          lineHeight: "2",
          color: "#000",
        }}
        style={{ padding: "0 0 0 0" }}
      >
        Get access to over 1000 of Exercises
      </Typography>
      <Button
        onClick={handleClick}
        variant="contained"
        color="error"
        href="#exercises1"
        style={{ margin: "10px 0", backgroundColor: "#ff2625", zIndex: "10" }}
      >
        Explore Exercises
      </Button>

      <Typography
        style={{
          opacity: 0.1,
          color: "#000",
          fontSize: "201px",
          fontWeight: "700",
          margin: "-40px 0",
        }}
        sx={{ display: { lg: "block", sm: "none" } }}
      >
        Exercise
      </Typography>

      <img
        src={latest1}
        style={{
          zIndex: "-1",
          width: "45%",
          position: "absolute",
          top: "-180px",
          right: "60px",
          height: "600px",
          borderBottomLeftRadius: "100px",
          // rotate: "0.5deg",
        }}
        alt="banner"
        className="hero-banner-img"
      />
      {/* <img src={HeroBannerImage} alt="banner" className="hero-banner-img" /> */}
    </Box>
  );
};
export default HeroBanner1;
