import React, { useState } from "react";
import { View } from "react-native";
import ColorCounter from "./ColorCounter";

const COLOR_COUNTER = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        break;

      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        break;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
      default:
        break;
    }
  };

  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor("red", +COLOR_COUNTER)}
        onDecrease={() => setColor("red", -1 * COLOR_COUNTER)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setColor("green", +COLOR_COUNTER)}
        onDecrease={() => setColor("green", -1 * COLOR_COUNTER)}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => setColor("blue" + COLOR_COUNTER)}
        onDecrease={() => setColor("blue" - 1 * COLOR_COUNTER)}
        color="Blue"
      />
      <View
        style={{
          height: 150,
          width: 150,
          borderRadius: 50,
          backgroundColor: `rgb(${red},${blue},${green})`,
        }}
      />
    </View>
  );
};

export default SquareScreen;
