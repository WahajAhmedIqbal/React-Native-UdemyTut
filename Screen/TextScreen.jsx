import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  return (
    <View>
      <Text>this is text screen</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(val) => setName(val)}
      />
      <Text>my name is khan : {name}</Text>
      {name.length < 5 ? <Text>or likh lore</Text> : null}
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    margin: 25,
    padding: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
