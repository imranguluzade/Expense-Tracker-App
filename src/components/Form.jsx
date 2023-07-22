import React, { useState } from "react";

const Form = ({ text, setText, amount, setAmount, data, setData }) => {
  function handleSubmit(e) {
    e.preventDefault();
    const newData = [...data, {
        id: Date.now(),
        text,
        amount
    }]
    setData(newData)
    localStorage.setItem("tracker", JSON.stringify(newData))
    setText ("");
    setAmount ("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
      placeholder="Enter description..."
      value={text}
      onChange={(e)=>(setText(e.target.value))}/>

      <input type="text"
      placeholder="Enter amount"
      value={amount}
      onChange={(e)=>(setAmount(e.target.value))}/>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default Form;
