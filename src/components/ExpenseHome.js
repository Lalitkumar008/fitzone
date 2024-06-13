import React, { useEffect, useState } from "react";
import styled from "styled-components";
import OverView from "./OverView";
import Transaction from "./Transaction";

const Container = styled.div`
  background-color: white;
  color: #0d1d2c;
  font-family: verdana;
  display: flex;
  flex-direction: column;
  padding: 10px 22px;
  font-size: 18px;
  width: 360px;
  align-items: center;
  justify-content: space-between;
`;

const ExpenseHome = (props) => {
  const [transactions, updateTransaction] = useState([]);
  const [expense, updateExpense] = useState(0);
  const [income, updateIncome] = useState(0);

  const calculateBalance = () => {
    let exp = 0;
    let inc = 0;
    transactions.map((payload) =>
      payload.type === "EXPENSE"
        ? (exp = exp + payload.amount)
        : (inc = inc + payload.amount)
    );
    updateExpense(exp);
    updateIncome(inc);
  };
  useEffect(() => calculateBalance(), [transactions]);
  // useEffect(() => {
  //   localStorage.setItem("expense", expense);
  // }, [expense]);
  const addTransaction = (payload) => {
    const transactionArray = [...transactions];
    transactionArray.push(payload);
    updateTransaction(transactionArray);
  };
  return (
    <Container>
      {/* <h2>balance {localStorage.getItem("expense")}</h2> */}
      <OverView
        expense={expense}
        income={income}
        addTransaction={addTransaction}
      />
      {transactions?.length ? <Transaction transactions={transactions} /> : ""}
    </Container>
  );
};
export default ExpenseHome;
