import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { SuperButton } from "../components/SuperButton";

const MultilineTextInputExample = (props) => {
  const [text, settext] = useState(props.what);

  const handleSendMessage = () => {
    console.log(props.what, "=", text);
    // Dodatkowa logika wysyłania wiadomości...
  };

  return (
    <View>
      <TextInput
        style={styles.container}
        editable
        multiline
        numberOfLines={1}
        maxLength={40}
        onChangeText={(text) => settext(text)}
        value={text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 10,
    paddingVertical: 10,
    paddingRight: 100,
    paddingLeft: 10,
    backgroundColor: "rgba(0, 0, 0, 0.25)", // Black color with 25% opacity
    borderWidth: 2, // Border width
    borderColor: "black", // Border color
    elevation: 0, // Decreased elevation
  },
});

export default MultilineTextInputExample;
