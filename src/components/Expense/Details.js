import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";

import useStyles from "./styles";
// import useTransactions from "../../useTransactions";

const Details = ({ title, subheader }) => {
  //   const { total, chartData } = useTransactions(title);
  const classes = useStyles();

  return (
    <Card className={title === "Income" ? classes.income : classes.expense}>
      <CardHeader title={title} subheader={subheader} />
      <CardContent>
        {/* <Typography variant="h5">${total}</Typography> */}
        {/* <Doughnut data={chartData} /> */}
      </CardContent>
    </Card>
  );
};

export default Details;

// import React, { useState, useContext } from "react";
// import { GlobalContext } from "../context/GlobalState";

// export const AddTransaction = () => {
//   const [text, setText] = useState("");
//   const [amount, setAmount] = useState(0);

//   const { addTransaction } = useContext(GlobalContext);

//   const onSubmit = (e) => {
//     e.preventDefault();

//     const newTransaction = {
//       id: Math.floor(Math.random() * 100000000),
//       text,
//       amount: +amount,
//     };

//     addTransaction(newTransaction);
//   };

//   return (
//     <>
//       <h3>Add new transaction</h3>
//       <form onSubmit={onSubmit}>
//         <div className="form-control">
//           <label htmlFor="text">Text</label>
//           <input
//             type="text"
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             placeholder="Enter text..."
//           />
//         </div>
//         <div className="form-control">
//           <label htmlFor="amount">
//             Amount <br />
//             (negative - expense, positive - income)
//           </label>
//           <input
//             type="number"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//             placeholder="Enter amount..."
//           />
//         </div>
//         <button className="btn">Add transaction</button>
//       </form>
//     </>
//   );
// };
