import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({sushis, eatSushi}) {
  const [sushiIndex, setSushiIndex] = useState(0)
  const sushiToDisplay = sushis.slice(sushiIndex, sushiIndex + 4)

  

  console.log("sushitodisplay: ", sushiToDisplay)
  return (
    <div className="belt">
      {sushiToDisplay.map(sushi => <Sushi sushi={sushi} key={sushi.id} onEatSushi={eatSushi}/>)}
      <MoreButton sushiIndex={sushiIndex} onSetIndex={setSushiIndex}/>
    </div>
  );
}

export default SushiContainer;
