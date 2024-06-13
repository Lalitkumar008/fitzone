// import React from 'react'
// import Loader from './Loader'
// import {Box,Typography,Stack} from '@mui/material'
// const ExerciseVideos = ({exerciseVideos,name}) => {
//     console.log(exerciseVideos)
// if(!exerciseVideos) return <Loader />
//   return (
//     <Box sx={{marginTop:{lg:'201px',xs:'20px'},p:'20px'}}>
// <Typography variant='h3' mb='33px' >
//   Watch 3/4 <span style={{color:'#ff2625',textTransform:'capitalize'}}>{name}</span> exercise videos
// </Typography>
// <Stack justifyContent='flex-start' flexWrap='wrap' alignItems='center'
// sx={{flexDirection:{lg:'row'},gap:{lg:'100px',xs:'0'}}}
// >
// {exerciseVideos?.slice(0,3)?.map((item,index)=>{
//   return (
//     <a
//   key={index} className='exercise-video' href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
//   target='_blank' rel='nopreferrer'
//   >
//     <img src={item.video.thumbnails[0].url} alt={item.video.title} />
//   </a>
//   )
// })}
// </Stack>
//     </Box>

//   )
// }

// export default ExerciseVideos

import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import Loader from "./Loader";
import Carousel from "react-multi-carousel";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 300 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const ExerciseVideos = ({ exerciseVideos, name }) => {
  const exerciseVideosNew = Object.keys(exerciseVideos);
  console.log(exerciseVideos);
  // if (!exerciseVideos.length) return <Loader />;

  return (
    <Box
      sx={{ marginTop: { lg: "203px", xs: "20px" } }}
      p="20px"
      // style={{ border: "1px solid red" }}
      className="parent-box"
    >
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" } }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Watch{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        className="parent-video"
        sx={{
          // border: "2px solid green",
          display: "flex",
          flexDirection: "row",
          gap: { lg: "70px", xs: "0px" },
        }}
        justifyContent="flex-start"
        flexWrap="wrap"
        // alignItems="center"
      >
        {exerciseVideos?.slice(0, 8)?.map((item, index) => (
          <div className="exercise-video">
            <a
              key={index}
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                style={{ borderTopLeftRadius: "20px", width: "290px" }}
                src={item.video.thumbnails[0].url}
                alt={item.video.title}
              />

              <Box>
                <Typography
                  sx={{ fontSize: { lg: "15px", xs: "18px" } }}
                  fontWeight={600}
                  color="#000"
                >
                  {item.video.title}
                </Typography>
                <Typography fontSize="14px" color="#000">
                  {item.video.channelName}
                </Typography>
              </Box>
            </a>
          </div>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
