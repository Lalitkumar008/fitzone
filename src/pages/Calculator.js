import React, { useEffect, useState } from "react";
import { Stack, Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { width } from "@mui/system";
import Loader from "../components/Loader";
const Calculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(0);
  const [age, setAge] = useState("");

  const handleSubmit = () => {
    const height2 = height / 100;
    const height3 = height2 * height2;
    const bmi1 = (weight / height3).toFixed(2);
    setBmi(bmi1);
  };

  const findBmi = (bmi) => {
    <Loader />;
    if (bmi == 0 || bmi == "NaN" || bmi < 0) {
      return (
        <h4
          id="enter1"
          style={{
            textAlign: "center",
            margin: "9px 10%",
            backgroundColor: "red",
            width: "70%",
            padding: "9px",
            borderRadius: "14px",
          }}
        >
          Enter valid details
        </h4>
      );
    } else if (bmi < 18.5) {
      return (
        <h3
          style={{
            textAlign: "center",
            margin: "9px 10%",
            backgroundColor: "#F9F9F9",
            width: "70%",
            // padding: "14px",
            borderRadius: "14px",
          }}
        >
          YOU ARE UNDERWEIGHT
        </h3>
      );
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return (
        <h3
          style={{
            textAlign: "center",
            margin: "9px 10%",
            color: "#000",
            backgroundColor: "#F9F9F9",
            width: "70%",
            // padding: "14px",
            borderRadius: "14px",
          }}
        >
          YOU ARE NORMAL
        </h3>
      );
    } else if (bmi >= 25 && bmi < 29.9) {
      return (
        <h3
          style={{
            textAlign: "center",
            margin: "9px 10%",
            backgroundColor: "#F9F9F9",
            width: "70%",
            // padding: "14px",
            borderRadius: "14px",
          }}
        >
          YOU ARE OVERWEIGHT
        </h3>
      );
    } else if (bmi >= 30 && bmi < 34.9) {
      return (
        <h3
          style={{
            textAlign: "center",
            margin: "9px 10%",
            backgroundColor: "#F9F9F9",
            width: "70%",
            // padding: "14px",
            borderRadius: "14px",
          }}
        >
          YOU ARE OBESE
        </h3>
      );
    } else if (bmi >= 35) {
      return (
        <h3
          style={{
            textAlign: "center",
            margin: "9px 10%",
            backgroundColor: "#F9F9F9",
            width: "70%",
            // padding: "14px",
            borderRadius: "14px",
          }}
        >
          YOU ARE EXTREMELY OBESE
        </h3>
      );
    }
  };

  return (
    <Stack direction="row" gap="2%" backgroundColor="#F9F9F9">
      <Stack>
        <Typography
          variant="h5"
          style={{
            textAlign: "center",
            marginLeft: "0px",
            marginTop: "60px",
            fontWeight: "700",
          }}
        >
          BMI CALCULATOR CHART
        </Typography>
        <table className="bmi-table">
          <tr>
            <th>BMI</th>
            <th>weight status</th>
          </tr>
          <tr>
            <td>Below 18.5</td>
            <td>UnderWeight</td>
          </tr>
          <tr>
            <td>18.5 - 24.9</td>
            <td>Healthy</td>
          </tr>
          <tr>
            <td>25.0-29.9</td>
            <td>OverWeight</td>
          </tr>
          <tr>
            <td>30.0 and above</td>
            <td>Obese</td>
          </tr>
        </table>
      </Stack>
      <Stack>
        <Typography
          variant="h4"
          fontWeight="600"
          textAlign="center"
          textTransform="capitalize"
          borderRadius="10px"
          margin="10px 50px"
        >
          Calculate Your Bmi
        </Typography>
        <Stack
          sx={{
            backgroundColor: "#fff",
            width: "400px",
            height: "400px",
            color: "#fff",
            mx: "50px",
          }}
        >
          <Box textAlign="center" sx={{ m: "1%" }}>
            <Typography
              variant="p"
              color="#ccc"
              fontSize="1rem"
              fontWeight="400"
            >
              <label
                htmlFor="height"
                style={{
                  padding: "4px",
                  display: "block",
                  margin: "10px 10px 0px -70px",
                  textAlign: "center",
                }}
              >
                Enter Weight (in kg)
              </label>
            </Typography>
            <input
              type="number"
              id="height"
              placeholder="weight/kg"
              style={{
                padding: "10px",
                border: "none",
                borderRadius: "10px",
                marginLeft: "-30px",
                width: "70%",
                backgroundColor: "#F7F7F7",
              }}
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            <Typography
              variant="p"
              color="#ccc"
              fontSize="1rem"
              fontWeight="400"
            >
              <label
                htmlFor="height"
                style={{
                  padding: "4px",
                  display: "block",
                  margin: "10px 10px 0px -70px",
                  textAlign: "center",
                }}
              >
                Enter Height (in cm)
              </label>
            </Typography>

            <input
              type="text"
              id="height"
              placeholder="height/cm"
              style={{
                padding: "10px",
                border: "none",
                borderRadius: "10px",
                marginLeft: "-30px",
                width: "70%",
                backgroundColor: "#F7F7F7",
              }}
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />

            <Typography
              variant="p"
              color="#ccc"
              fontSize="1rem"
              fontWeight="400"
            >
              <label
                htmlFor="age"
                style={{
                  padding: "4px",
                  display: "block",
                  margin: "10px 10px 0px -180px",
                  textAlign: "center",
                }}
              >
                Age
              </label>
            </Typography>

            <input
              type="number"
              id="age"
              placeholder="Age"
              style={{
                padding: "10px",
                border: "none",
                borderRadius: "10px",
                marginLeft: "-30px",
                width: "70%",
                backgroundColor: "#F7F7F7",
              }}
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </Box>
          <button
            style={{
              backgroundColor: "red",
              border: "none",
              padding: "9px",
              width: "30%",
              color: "#fff",
              borderRadius: "5px",
              cursor: "pointer",
              margin: "7px 60% 8px 30%",
            }}
            onClick={() => handleSubmit()}
          >
            Calculate
          </button>
          <Stack
            textAlign="center"
            height="100px"
            backgroundColor="#F9F3EE"
            color="#434242"
            margin="10px"
          >
            <h4 style={{ margin: "10px" }}>Your bmi is {bmi}</h4>
            <h4 style={{ marginLeft: "10px" }}>{findBmi(bmi)}</h4>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Calculator;
