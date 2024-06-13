import React from "react";
import { Stack } from "@mui/material";
import { InfinitySpin, TailSpin } from "react-loader-spinner";
import LinearProgress from "@mui/material/LinearProgress";
const Loader = () => {
  return (
    <Stack direction="row" justifyContent="center" width="100%" zIndex="10">
      {/* <InfinitySpin color='pink' /> */}
      {/* <TailSpin color="pink" /> */}
      <LinearProgress />
    </Stack>
  );
};

export default Loader;
