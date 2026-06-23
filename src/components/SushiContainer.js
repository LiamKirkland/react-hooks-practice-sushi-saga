import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({sushi, onSetSushi}) {
  const sushiToDisplay = sushi.slice(0,4)

  console.log("sushitodisplay: ", sushiToDisplay)
  return (
    <div className="belt">
      {sushiToDisplay.map(sushi => <Sushi name={sushi.name} image={sushi.img_url} price={sushi.price} key={sushi.id} />)}
      <MoreButton />
    </div>
  );
}

export default SushiContainer;
