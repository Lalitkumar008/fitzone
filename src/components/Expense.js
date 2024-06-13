import React, { useEffect, useState, useRef } from "react";
import "./Expense.css";
import styled from "styled-components";
import ExpenseHome from "./ExpenseHome";
import ExpenseImg from "../assets/images/money.png";
const Container = styled.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  z-index:10;
  // height: 100vh;
  
  width: 40%;
  border:1px solid #ff2526
  padding-top: 30px;
  font-family: Montserrat;
`;

const Header = styled.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 22px;
  font-size: 25px;
  font-weight: bold;
  border-bottom: 1px solid #ccc;
`;
const Expense = () => {
  return (
    <Container>
      {/* <img id="expense-img" src={ExpenseImg} alt="" /> */}
      <Header>Expense Tracker</Header>
      <ExpenseHome />
    </Container>
  );
};

export default Expense;

// import { Grid } from "@material-ui/core";

// import "./Expense.css";
// import { useStateValue } from "./StateProvider";
// const Expense = () => {
//   const [sum, setSum] = useState(0);
//   const [text, setText] = useState("");
//   const [money, setMoney] = useState([]);
//   const [allText, setAllText] = useState([]);
//   const [{ transactions }, dispatch] = useStateValue();

//   const handleClick = (e) => {
//     e.preventDefault();
//     if (text && money) {
//       const newEntry = {
//         id: new Date().getMilliseconds(),
//         text: text,
//         money: money,
//       };
//       setAllText([...allText, newEntry]);
//       dispatch({
//         type: "ADD_TRANSACTION",
//         id: new Date().getMilliseconds(),
//       });
//       console.log("transactiona added");
//       setText("");
//       setMoney("");
//     } else {
//       alert("please enetr value");
//     }
//   };
//   //   const handleDelete = (id) => {
//   //     dispatch({
//   //       type: "DELETE_TRANSACTION",
//   //       id: id,
//   //     });
//   //   };
//   return (
//     <div className="expense" style={{ padding: "3% 5%" }}>
//       <h2>Expense Tracker {sum}</h2>
//       <input
//         type="text"
//         placeholder="enter notes"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//       <input
//         type="number"
//         placeholder="enter amount"
//         value={money}
//         onChange={(e) => setMoney(e.target.value)}
//       />
//       <button onClick={handleClick}>Add Expense</button>

//       <h3>YOUR EXPENSES</h3>
//       {allText.map((item) => {
//         return (
//           <div key={item.id} className="expense-list">
//             {console.log(transactions)}
//             <ul>
//               <li>{item.text}</li>
//               <li>{item.money}</li>
//               {/* <button onClick={() => handleDelete(item.id)}>delete</button> */}
//             </ul>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Expense;

// import React from "react";
// import { Header } from "./Expense/Header";
// import { Balance } from "./Expense/Balance";
// import { IncomeExpenses } from "./Expense/IncomeExpenses";
// import { TransactionList } from "./Expense/TransactionList";
// import { AddTransaction } from "./Expense/AddTransaction";

// // import "./App.css";

// function Expense() {
//   return (
//     // <GlobalProvider>

//     <div className="container">
//       <Header />
//       <Balance />
//       <IncomeExpenses />
//       <TransactionList />
//       <AddTransaction />
//     </div>
//     // </GlobalProvider>
//   );
// }

// export default Expense;
