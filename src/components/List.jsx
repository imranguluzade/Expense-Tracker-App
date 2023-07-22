import React from "react";

const List = ({ data, setData }) => {

  function handleClick(id) {
    const newArr = data.filter((item) => id !== item.id);
    setData(newArr);
    localStorage.setItem("tracker", JSON.stringify(newArr));
  }
  return (
    <div>
      <h2>History</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.text}: <span>{item.amount}</span>
            <button onClick={()=>handleClick(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
