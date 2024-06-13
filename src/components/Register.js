import React, { useState } from "react";
import "./Register.css";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import PhoneIcon from "@mui/icons-material/Phone";
import LinearProgress from "@mui/material/LinearProgress";
import { Stack, Typography } from "@mui/material";
import banner from "../assets/images/banner.png";
import menDumbBell2 from "../assets/images/menDumbBell2.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth, db } from "../utils/firebase";
import { updateCurrentUser, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import latest3 from "../assets/images/latest3.jpg";
import latest4 from "../assets/images/latest4.jpg";

const Register = () => {
  const navigate = useNavigate();
  const [isLoader, setIsLoader] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    contactNo: "",
  });

  // method for registering the user
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, contactNo } = user;
    console.log("working");
    if (user.name && user.email && user.password && user.contactNo) {
      auth
        .createUserWithEmailAndPassword(user.email, user.password, user.name)
        .then(async (auth) => {
          //it successfully creates a new user with email and password
          if (auth) {
            setIsLoader(true);
            const resp = await fetch(
              "https://fitness-app-d0996-default-rtdb.firebaseio.com/fitnessData.json",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  name,
                  email,
                  contactNo,
                }),
              }
            );
            navigate("/");
          }
          const newUser = auth.user;
          console.log("the created user is>>>>", newUser);
          await updateProfile(newUser, {
            displayName: user.name,
          });
          console.log("working");
        })
        .catch((error) => alert(error.message));
    } else {
      alert("please fill all the details");
    }

    // adding the toast
    // toast("registering user");
    // if (auth) toast("user registration succesful");
  };
  // handlechange listener
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  return (
    <Stack className="register" textAlign="center">
      <img
        src={latest4}
        alt=""
        style={{
          position: "absolute",
          width: "100%",
          height: "90%",
          zIndex: "-1",
          opacity: "0.4",
        }}
      />

      <form action="#" className="register-form">
        {isLoader && <LinearProgress color="inherit" />}
        <h3>CREATE ACCOUNT</h3>
        <p>sign up with email</p>
        {/* <div>
          <PersonIcon id="person" />
          <EmailIcon id="email-r" />
          <KeyIcon id="password-r" />
          <PhoneIcon id="phone-r" />
        </div> */}

        <input
          type="text"
          placeholder="name"
          name="name"
          value={user.name}
          onChange={handleChange}
        />

        <input
          type="email"
          placeholder="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={user.password}
          onChange={handleChange}
        />
        <input
          type="number"
          name="contactNo"
          placeholder="contact No"
          value={user.contactNo}
          onChange={handleChange}
        />
        <button style={{ color: "#fff" }} type="submit" onClick={handleSubmit}>
          Sign up
        </button>
        <p
          style={{ fontSize: "11px", wordSpacing: "0px", padding: "0px 30px" }}
        >
          By creating your account, you agree to APEX's{" "}
          <span style={{ fontWeight: "900", margin: "0 5px" }}>
            Terms of Service
          </span>
          and{" "}
          <span style={{ fontWeight: "900", margin: "0 5px" }}>
            Privacy Policy
          </span>
        </p>
      </form>
    </Stack>
  );
};

export default Register;
