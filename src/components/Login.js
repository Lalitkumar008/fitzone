import React, { useState } from "react";
import { Stack, Typography, Button, Link } from "@mui/material";
import Register from "./Register";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import googleIcon from "../assets/images/googleIcon.png";
import facebookIcon from "../assets/images/facebookIcon.png";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LinearProgress from "@mui/material/LinearProgress";
import Loader from "./Loader";
import Latest1 from "../assets/images/latest2.jpg";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLoader, setIsLoader] = useState(false);
  // const [passType,setPassType]=useState('password');

  // function myFunction() {
  //   var x = document.getElementById("myInput");
  //   if (x.type === "password") {
  //     x.type = "text";
  //   } else {
  //     x.type = "password";
  //   }
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClick = () => {
    console.log("working");
    setIsLoader(true);
    if (email && password) {
      setTimeout(() => {
        setIsLoader(false);
        auth
          .signInWithEmailAndPassword(email, password)
          .then((auth) => {
            navigate("/");
            setEmail("");
            setPassword("");
          })
          .catch((error) => {
            toast(error.message);
          });
      }, 2000);
    } else {
      setIsLoader(false);
      alert("enter all details");
    }
  };

  return (
    <Stack
      sx={{
        width: "400px",
        height: "400px",
        backgroundColor: "#F9F2ED",
        m: "50px auto 10%",
        color: "#ff2526",
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
      }}
    >
      {isLoader && <LinearProgress color="inherit" />}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Typography
        variant="h5"
        margin="10px 0px"
        textAlign="center"
        fontWeight="700"
        color="#000"
      >
        Welcome to{" "}
        <span style={{ fontStyle: "italic", fontWeight: "900" }}>FitZone</span>
      </Typography>
      <Typography variant="p" mt="-10px" mx="auto">
        sign in to continue
      </Typography>
      <form action="#" onSubmit={handleSubmit} id="login-form">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          placeholder="username"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          value={password}
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <input type="checkbox" onclick={myFunction} />
        Show Password */}
        <button onClick={handleClick}>Sign in</button>
        {/* <a href="#" style-={{ color: "#000" }}>
          forget password?
        </a> */}
        <p
          style={{
            margin: "20px 10px 5px",
            fontFamily: "sans-serif",
            color: "#000",
          }}
        >
          New To APEX ?
          <Link id="to-register" href="/register">
            create an account
          </Link>
        </p>
      </form>

      <Stack mx="84px" direction="row" gap="20px">
        {/* <button
          style={{
            textAlign: "center",
            width: "100px",
            padding: "6px",
            border: "none",
          }}
        >
          <img
            src={googleIcon}
            alt=""
            style={{
              width: "20px",
            }}
          />
          <span
            style={{
              position: "relative",
              bottom: "5px",
              left: "5px",
              fontWeight: "700",
              color: "#393E46",
              cursor: "pointer",
            }}
          >
            Google
          </span>
        </button>
        <button
          style={{
            textAlign: "center",
            width: "100px",
            padding: "6px",
            border: "none",
            backgroundColor: "#34B3F1",
          }}
        >
          <img src={facebookIcon} alt="" style={{ width: "20px" }} />
          <span
            style={{
              position: "relative",
              bottom: "5px",
              left: "5px",
              fontWeight: "700",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            facebook
          </span>
        </button> */}
      </Stack>
    </Stack>
  );
};

export default Login;
