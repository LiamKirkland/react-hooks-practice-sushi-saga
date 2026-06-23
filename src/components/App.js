import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushi, setSushi] = useState([])

  console.log("Sushi: ", sushi)

  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(data => setSushi(data))
  }, [])
  return (
    <div className="app">
      <SushiContainer sushi={sushi} onSetSushi={setSushi}/>
      <Table />
    </div>
  );
}

export default App;
