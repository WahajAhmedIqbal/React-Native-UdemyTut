import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BoxScreen from "./Screen/BoxScreen";
import ColorScreen from "./Screen/ColorScreen";
import CounterScreen from "./Screen/CounterScreen";
import TextScreen from "./Screen/TextScreen";

export default function App() {
  return (
    <View>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      {/* <CounterScreen /> */}
      {/* <ColorScreen /> */}
      {/* <TextScreen /> */}
      <BoxScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
