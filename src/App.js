import "./styles.css";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState();
  // const [data, setData] = useState(null)
  const [print, setPrint] = useState();

  function getData(e) {
    setData(e.target.value);
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {print ? <h1>{data}</h1> : null}
      <input type="text" onChange={getData} />
      <button onClick={() => setPrint(true)}>Print data</button>
    </div>
  );
}
