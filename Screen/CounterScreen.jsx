import React, { useReducer } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
      break;
    case "decreament":
      return { ...state, count: state.count - action.payload };
      break;
    default:
      break;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 1 });
  return (
    <View>
      <Button
        title="increse"
        onPress={() => dispatch({ type: "increment", payload: 1 })}
      />
      <Button
        title="decrease"
        onPress={() => dispatch({ type: "decreament", payload: 1 })}
      />
      <Text>this is Counter Screen ,{state.count}</Text>
    </View>
  );
};

export default CounterScreen;
