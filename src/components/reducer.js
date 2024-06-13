const initialState = {
  user: null,
  exercises: [],
  transactions: [],
};

const reducer = (state = initialState, action) => {
  console.log(initialState);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "ADD_TO_EXERCISES":
      return {
        ...state,
        exercises: [...state.exercises, action.item],
      };
    case "REMOVE_FROM_EXERCISES":
      const index = state.exercises.findIndex((item) => item.id === action.id);
      let newExercises = [...state.exercises];
      newExercises.splice(index, 1);
      return {
        ...state,
        exercises: newExercises,
      };
    case "DELETE_TRANSACTION":
      const indexT = state.transactions.findIndex(
        (item) => item.id === action.id
      );
      let newTransactions = [...state.transactions];
      newTransactions.splice(indexT, 1);
      return {
        // ...state,
        // transactions: state.transactions.filter(
        //   (transaction) => transaction.id !== action.payload
        // ),
        ...state,
        transactions: newTransactions,
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};
export { reducer, initialState };
console.log("this is the reducer>>>>", initialState.exercises);
