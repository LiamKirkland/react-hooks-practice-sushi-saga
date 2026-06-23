import React from "react";

function MoreButton({sushiIndex, onSetIndex}) {
  return <button onClick={() => onSetIndex(sushiIndex += 4)}>More sushi!</button>;
}

export default MoreButton;
