import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({sushi}) {
  const [sushiIndex, setSushiIndex] = useState(0)
  const sushiToDisplay = sushi.slice(sushiIndex, sushiIndex + 4)

  console.log(sushiIndex)
  console.log(sushi.slice(sushiIndex,4))
  console.log("sushitodisplay: ", sushiToDisplay)
  return (
    <div className="belt">
      {sushiToDisplay.map(sushi => <Sushi name={sushi.name} image={sushi.img_url} price={sushi.price} key={sushi.id} />)}
      <MoreButton sushiIndex={sushiIndex} onSetIndex={setSushiIndex}/>
    </div>
  );
}

export default SushiContainer;
