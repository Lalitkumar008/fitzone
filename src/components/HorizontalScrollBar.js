import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import ExerciseCard from "./ExerciseCard";

import BodyPart from "../components/BodyPart";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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

const HorizontalScrollBar = ({
  data,
  setBodyPart,
  bodyPart,
  search,
  isBodyParts,
}) => {
  return (
    <Carousel className="carousel" responsive={responsive}>
      {data?.map((parts) => {
        return (
          <Box
            key={parts.id || parts}
            partsId={parts.id || parts}
            title={parts.id || parts}
          >
            {isBodyParts ? (
              <BodyPart
                parts={parts}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
                // margin="0 39px"
              />
            ) : (
              <ExerciseCard search={search} exercise={parts} />
            )}
            {/* {bodyParts ? <BodyPart parts={parts} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={parts} /> } */}
          </Box>
        );
      })}
    </Carousel>
  );
};

export default HorizontalScrollBar;

// import React, { useContext } from "react";
// // import "./HorizontalScrollBar.css";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import { Box, Typography } from "@mui/material";
// import BodyPart from "./BodyPart";
// import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
// import RightArrowIcon from "../assets/icons/right-arrow.png";
// import LeftArrowIcon from "../assets/icons/left-arrow.png";

// const HorizontalScrollBar = ({ data, bodyPart, setBodyPart }) => {
//   console.log(data);
//   const responsive = {
//     superLargeDesktop: {
//       // the naming can be any, depends on you.
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5,
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//     },
//   };
//   return (
//     <Carousel responsive={responsive}>
//       {data.map((item) => {
//         return (
//           <Box
//             style={{ border: "1 px solid green" }}
//             key={item.id || item}
//             itemId={item.id || item}
//             title={item.id || item}
//             m="0 40px"
//           >
//             <BodyPart
//               style={{ marginRight: "100px", border: "1px solid red" }}
//               item={item}
//               setBodyPart={setBodyPart}
//               bodyPart={bodyPart}
//             />
//           </Box>
//         );
//       })}
//     </Carousel>
//   );
// };

// export default HorizontalScrollBar;
