import React, { useEffect } from "react";
import { fetchData, planExerciseOptions } from "../utils/fetchData";
const PlanExercise = () => {
  useEffect(() => {
    const getExercisePlan = async () => {
      const resp = await fetchData(
        "https://workout-planner1.p.rapidapi.com/",
        planExerciseOptions
      );
      console.log(resp);
    };
    getExercisePlan();
  }, []);

  return <div>plan Exercise</div>;
};

export default PlanExercise;
