import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { SuperButton } from "../components/SuperButton";

interface SperTextInputProps {
  value: string;
  onChange: (text: string) => void;
  label: string;
}

const SuperTextInput = (props: SperTextInputProps) => {
  const handleSendMessage = (text: string) => {
    props.onChange(text);
    // Dodatkowa logika wysyłania wiadomości...
  };

  return (
    <TextInput
      style={styles.container}
      editable
      multiline
      numberOfLines={1}
      maxLength={40}
      onChangeText={handleSendMessage}
      value={props.value}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 10,
    paddingVertical: 10,
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: "rgba(0, 0, 0, 0.25)", // Black color with 25% opacity
    borderWidth: 2, // Border width
    borderColor: "black", // Border color
    elevation: 0, // Decreased elevation
    width: 100,
  },
});

export default SuperTextInput;
