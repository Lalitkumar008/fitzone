import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Logo from "../assets/images/Logo.png";
import MemberShip from "./MemberShip";
import DropDown from "./DropDown";
import { BsFillCaretDownFill, BsPersonFill } from "react-icons/bs";
import { auth } from "../utils/firebase";
import { useStateValue } from "./StateProvider";

// defining modals
const Modals = () => {
  return (
    <div className="modals">
      <p>Are you sure you want to logout</p>
    </div>
  );
};

const Navbar = () => {
  const navigate = useNavigate();
  const [dropMenu, setDropMenu] = useState(false);
  const showMenu = () => {
    setDropMenu(true);
  };

  const hideMenu = () => {
    setDropMenu(false);
  };

  const [{ user, exercises }, dispatch] = useStateValue();
  console.log(user);
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
      navigate("/");
    }
  };
  return (
    <Stack
      className="navbar"
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "120px", xs: "42px" },
        // mt: { lg: "-3px", sm: "2px", xs: "1px" },
        // padding: "15px",
        justifyContent: "none",
        fontFamily: "verdana",
      }}
      px="21px"
    >
      {/* <DropDown /> */}
      <Link
        to="/"
        style={{
          textDecoration: "none",
          fontStyle: "italic",
          fontSize: "22px",
        }}
      >
        {/* <img
          src={Logo}
          alt="logo"
          style={{ width: "50px", height: "50px", margin: "-10px 22px" }}
        /> */}
        <h3 style={{ marginTop: "0px", color: "#fff" }}>
          FitZone
          {/* <span style={{ color: "red" }}>++</span>{" "} */}
        </h3>
      </Link>
      <Stack
        direction="row"
        gap="39px"
        alignItems="flex-end"
        fontSize="16px"
        fontWeight="600"
      >
        <Link className="link-menu" to="/" style={{ textDecoration: "none" }}>
          Home
        </Link>
        <a
          className="link-menu"
          href="#exercises"
          style={{ textDecoration: "none", overscrollBehaviorY: "smooth" }}
        >
          Exercises
        </a>
        {/* <a href="#" style={{textDecoration:'none' ,color:'#3A1212'}}>Caluclator</a> */}
        <Link
          className="link-menu"
          to="/Calculator"
          style={{ textDecoration: "none" }}
        >
          Calculator
        </Link>
      </Stack>
      <Stack marginLeft="220px" direction="row" gap="60px">
        {user ? (
          <p
            className="drop-down"
            // style={{ backgroundColor: "green" }}
            onClick={showMenu}
            onMouseLeave={hideMenu}
          >
            <BsPersonFill /> Hello,{" "}
            <span id="username"> {user.displayName}</span>
            <BsFillCaretDownFill
              style={{ margin: "0px 5px", position: "relative", top: "3px" }}
            />
            {dropMenu ? (
              <ul
                className="drop-down-ul"
                style={{
                  color: "#ff2526",
                  backgroundColor: "#fff",
                }}
                onMouseEnter={showMenu}
                onMouseLeave={hideMenu}
              >
                <li>
                  {/* <button
                    className="sign-in-btn"
                    // to={!user && "/Login"}
                    underline="hover"
                    sx={{ textDecoration: "none" }}
                  > */}
                  <div onClick={handleAuthentication}>
                    {user ? <p>Sign Out</p> : null}
                  </div>
                  {/* </button> */}
                </li>
                <li>
                  <Link
                    className="link-menu"
                    to="/myExercises"
                    style={{ textDecoration: "none", color: "#ff2526" }}
                  >
                    myExercises
                    <span
                      style={{
                        color: "#ff2526",
                        textDecoration: "underline",
                      }}
                    >
                      ({exercises.length})
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/expense"
                    style={{ color: "#ff2526", textDecoration: "none" }}
                  >
                    Expense Tracker
                  </Link>
                </li>
                {/* <li>fourth</li>  */}
              </ul>
            ) : null}
          </p>
        ) : null}
        {!user ? (
          <Link
            className="sign-in-btn"
            to={!user && "/Login"}
            underline="hover"
            sx={{ textDecoration: "none" }}
          >
            <div onClick={handleAuthentication}>
              {user ? <p>Sign Out</p> : <p>Login</p>}
            </div>
          </Link>
        ) : null}
        {/* {!user && (
          <Button variant="outlined" margin="200px" color="error">
            <Link to="/Register" underline="hover" textDecoration="none">
              Register
            </Link>
          </Button>
        )} */}
        {/* {showModal && <Modals />} */}
      </Stack>
    </Stack>
  );
};
export default Navbar;
