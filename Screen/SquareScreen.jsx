import React, { useState } from "react";
import { View } from "react-native";
import ColorCounter from "./ColorCounter";
const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const COLOR_COUNTER = 15;

  return (
    <View>
      <ColorCounter
        onIncrease={() => setRed(red + COLOR_COUNTER)}
        onDecrease={() => setRed(red - COLOR_COUNTER)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setGreen(green + COLOR_COUNTER)}
        onDecrease={() => setGreen(green - COLOR_COUNTER)}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => setBlue(blue + COLOR_COUNTER)}
        onDecrease={() => setBlue(blue - COLOR_COUNTER)}
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
