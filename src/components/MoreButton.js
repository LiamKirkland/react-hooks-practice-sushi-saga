import React from "react";

function MoreButton({sushiIndex, onSetIndex}) {
  function rotateSushi() {
    if(sushiIndex < 96) {
      onSetIndex(sushiIndex += 4)
    } else {
      onSetIndex(0)
    }
  }

  return <button onClick={rotateSushi}>More sushi!</button>;
}

export default MoreButton;
