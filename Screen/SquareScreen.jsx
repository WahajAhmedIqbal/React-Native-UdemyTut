import React, { useReducer } from "react";
import { View } from "react-native";
import ColorCounter from "./ColorCounter";

const COLOR_COUNTER = 15;

const reducer = (state, action) => {
  switch (action.colorToChange) {
    case "red":
      return action.amount + action.red > 255 || action.red + action.amount < 0
        ? state
        : {
            ...state,
            red: state.red + action.amount,
          };
      break;
    case "green":
      return action.amount + action.green > 255 ||
        action.green + action.amount < 0
        ? state
        : {
            ...state,
            green: state.green + action.amount,
          };
      break;
    case "blue":
      return action.amount + action.blue > 255 ||
        action.blue + action.amount < 0
        ? state
        : {
            ...state,
            blue: state.blue + action.amount,
          };
      break;

    default:
      break;
  }
};

const SquareScreen = () => {
  const initialState = {
    red: 0,
    green: 0,
    blue: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "red", amount: COLOR_COUNTER })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "red", amount: -1 * COLOR_COUNTER })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "green", amount: COLOR_COUNTER })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "green", amount: -1 * COLOR_COUNTER })
        }
        color="Green"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "blue", amount: COLOR_COUNTER })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "blue", amount: -1 * COLOR_COUNTER })
        }
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
