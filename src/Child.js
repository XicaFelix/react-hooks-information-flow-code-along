import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, color }) {
  return <div className="child" onClick={handleClick} style={{ backgroundColor: color }} />;
  console.log(onChangeColor);

  function handleClick(){
    const newColor = getRandomColor();
    onChangeColor(newColor);
  }
}

export default Child;
