import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])
  const [eatenSushis, setEatenSushis] = useState([])

  function eatSushi(id) {
    setSushis(sushis.map(sushi => {
      if(sushi.id === id) {
        setEatenSushis([...eatenSushis, sushi])
        return {
          ...sushi,
          eaten: !sushi.eaten
        }
      } else { return sushi }
    }))
  }

  console.log("Sushi: ", sushis)

  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(data => setSushis(data.map(sushi => {
      return {...sushi, eaten: false}
    })))
  }, [])
  return (
    <div className="app">
      <SushiContainer sushis={sushis} onSetSushis={setSushis} eatSushi={eatSushi}/>
      <Table plates={eatenSushis}/>
    </div>
  );
}

export default App;
