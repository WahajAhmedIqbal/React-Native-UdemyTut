import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Button
        title="increse"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title="decrease"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Text>this is Counter Screen ,{counter}</Text>
    </View>
  );
};

export default CounterScreen;
