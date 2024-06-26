import React, { createContext, useContext, useReducer } from "react";

// prepare the data layer
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

const useStateValue = () => useContext(StateContext);
export { useStateValue };
