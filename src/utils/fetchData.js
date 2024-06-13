export const exerciseOptions = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
  },
};

export const planExerciseOptions = {
  method: "GET",
  params: {
    time: "30",
    muscle: "biceps",
    location: "gym",
    equipment: "dumbbells",
  },
  headers: {
    "X-RapidAPI-Key": "608b6a9ea5msh4904afe7849d311p1a13dbjsnd7e7e33a2d34",
    "X-RapidAPI-Host": "workout-planner1.p.rapidapi.com",
  },
};

export const newExercises = {
  method: "GET",
  url: "https://musclewiki.p.rapidapi.com/exercises/",
  headers: {
    "X-RapidAPI-Key": "996d779ba6msh797b96bed980e55p12eb3djsn0c925cb97eb3",
    "X-RapidAPI-Host": "musclewiki.p.rapidapi.com",
  },
};
export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
