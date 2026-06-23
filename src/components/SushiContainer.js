import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"
import AddMoney from "./AddMoney";

function SushiContainer({sushis, eatSushi, budget, setBudget}) {
  const [sushiIndex, setSushiIndex] = useState(0)
  const sushiToDisplay = sushis.slice(sushiIndex, sushiIndex + 4)
  const [moneyInput, setMoneyInput] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    console.log(budget)
    setBudget(budget + +moneyInput)
    setIsModalOpen(false)
    setMoneyInput(0)
  }
  
  return (
    <div className="belt">
      {sushiToDisplay.map(sushi => <Sushi sushi={sushi} key={sushi.id} onEatSushi={eatSushi}/>)}
      <MoreButton sushiIndex={sushiIndex} onSetIndex={setSushiIndex}/>
      <button onClick={() => setIsModalOpen(true)}>Add Funds💸</button>

      <AddMoney isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Hello World!</h2>
        <form onSubmit={handleSubmit}>
          <input name="money" type="number" value={moneyInput} onChange={e => setMoneyInput(e.target.value)} required></input>
          <input type="submit" value="Add Funds💸"></input>
        </form>
      </AddMoney>
    </div>
  );
}

export default SushiContainer;
