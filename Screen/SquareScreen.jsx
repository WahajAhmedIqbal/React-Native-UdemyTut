import React from "react";
import { View } from "react-native";
import ColorCounter from "./ColorCounter";
const SquareScreen = () => {
  return (
    <View>
      <ColorCounter color="Red" />
      <ColorCounter color="Green" />
      <ColorCounter color="Blue" />
    </View>
  );
};

export default SquareScreen;
