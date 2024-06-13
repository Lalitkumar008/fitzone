import React, { useState, useEffect } from "react";
import { Route, Routes, Switch } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";
import Loader from "./components/Loader";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Calculator from "./pages/Calculator";
import DumbBell from "./components/DumbBell";
import Login from "./components/Login";
import Register from "./components/Register";
import Expense from "./components/Expense";
import MyExercises from "./components/MyExercises";
import { auth } from "./utils/firebase";
import { useStateValue } from "./components/StateProvider";
function App() {
  const [{}, dispatch] = useStateValue();
  // preloader
  // const [loading, setLoading] = useState(true);
  // if (loading) {
  //   setTimeout(() => {
  //     setLoading(!loading);
  //   }, 10000);
  //   console.log(loading);
  //   return <DumbBell />;
  // }
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is >>>>", authUser);
      if (authUser) {
        // the user get signed in when the app loads
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Box width="400px" sx={{ width: { xl: "1480px" } }} m="auto">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/myExercises" element={<MyExercises />} />
        <Route path="/expense" element={<Expense />} />
      </Routes>

      <Footer />
    </Box>
  );
}

export default App;
