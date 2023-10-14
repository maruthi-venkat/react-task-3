// src/ColorPicker.js
import React, { useState } from "react";

const ColorPicker = () => {
  const [showColorList, setShowColorList] = useState(false);
  const [selectedColor, setSelectedColor] = useState("green");
  const colors = [
    "red",
    "blue",
    "yellow",
    "orange",
    "purple",
    "pink",
    "cyan",
    "brown",
    "gray",
    "black",
  ];

  const toggleColorList = () => {
    setShowColorList(!showColorList);
  };

  const selectColor = (color) => {
    setSelectedColor(color);
    toggleColorList();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "75vw",
          height: "50vw",
          backgroundColor: "white",
          textAlign: "center",
        }}
      >
        <button onClick={toggleColorList}>Pick a color</button>
        {showColorList && (
          <div>
            {colors.map((color, index) => (
              <div
                key={index}
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: color,
                  display: "inline-block",
                  margin: "5px",
                  cursor: "pointer",
                }}
                onClick={() => selectColor(color)}
              ></div>
            ))}
          </div>
        )}
      </div>
      <button
        style={{
          backgroundColor: selectedColor,
          color: "white",
          width: "150px",
          height: "50px",
        }}
      >
        {selectedColor}
      </button>
    </div>
  );
};

export default ColorPicker;
