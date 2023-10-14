import React, { useState } from "react";
import "./App.css";

const colorList = [
  "#591F0A",
  "#477998",
  "#4E6E5D",
  "#F6AE2D",
  "#F26419",
  "#9046CF",
  "#B5BA72",
  "#F45866",
  "#C4D6B0",
  "#F42C04",
  "#0F1A20",
];

function App() {
  const [selectedColor, setSelectedColor] = useState("green");
  const [isColorListVisible, setIsColorListVisible] = useState(false);

  const toggleColorList = () => {
    setIsColorListVisible(!isColorListVisible);
  };

  const handleColorSelection = (color) => {
    setSelectedColor(color);
    setIsColorListVisible(false);
  };

  return (
    <div className="App">
      <div
        className="color-box"
        style={{
          width: "75vw",
          height: "35vw",
          backgroundColor: "#D4F1F4",
          borderRadius: "15px",
        }}
      >
        <button
          className="pick-button"
          onClick={toggleColorList}
          style={{
            backgroundColor: selectedColor,
            color: "white",
            borderRadius: "5px",
          }}
        >
          Pick a Color
        </button>
        {isColorListVisible && (
          <div className="color-list">
            {colorList.map((color, index) => (
              <div
                key={index}
                className="color-square"
                style={{ backgroundColor: color }}
                onClick={() => handleColorSelection(color)}
              ></div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
