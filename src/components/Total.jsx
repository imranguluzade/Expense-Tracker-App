import React, {useState, useEffect} from "react";

const Total = ({data}) => {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    let totalIncome = 0;
    let totalExpense = 0;

    data.forEach((item) => {
      if (item.amount > 0) {
        totalIncome += +item.amount;
      } else if (item.amount < 0) {
        totalExpense -= item.amount;
      }
    });

    setIncome(totalIncome);
    setExpense(totalExpense);
  }, [data]);

  return (
    <div>
      <div className="balance">
        <span className="your-balance">Your Balance: $</span>
        <span className="total">{income - expense}</span>
      </div>
      <div className="income-expense-wrapper">
        <div className="income-wrapper">
          <span className="income">Income </span>
          <span className="income-value">${income}</span>
        </div>
        <div className="expense-wrapper">
          <span className="expense">Expense </span>
          <span className="expense-value">${expense}</span>
        </div>
      </div>
    </div>
  );
};

export default Total;
