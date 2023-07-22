import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";
import Total from "./components/Total";

function App() {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("tracker")) || []
  );
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  console.log(data);

  return (
    <div>
      <Header />
      <Total data={data} />
      <List data={data} setData={setData} />
      <Form
        text={text}
        setText={setText}
        amount={amount}
        setAmount={setAmount}
        data={data}
        setData={setData}
      />
    </div>
  );
}

export default App;
