import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";
import { SuperButton } from "../components/SuperButton";
import { processFontFamily } from "expo-font";

interface SperTextInputProps {
  value: string;
  onChange: (text: string) => void;
  label: string;
  placeholderColor: string;
  placeholder?: string;
  style: TextStyle;
  width?: any;
  secureTextEntry?: boolean;
  maxWidth?: any;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;
  MarginTop?: number;
} 

const SuperTextInput = (props: SperTextInputProps) => {
  const handleSendMessage = (text: string) => {
    props.onChange(text);
    // Dodatkowa logika wysyłania wiadomości...
  };

  return (
    <View 
    style={{ width: 
      props.width,
       maxWidth: props.maxWidth, 

}}
    >

      <TextInput
        secureTextEntry={props.secureTextEntry}
        style={[styles.container
        
        , { backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderRadius: props.borderRadius, marginTop: props.MarginTop}]}
        editable
        multiline
        numberOfLines={1}
        maxLength={40}
        onChangeText={handleSendMessage}
        value={props.value}
        placeholderTextColor={props.placeholderColor}
        placeholder={props.placeholder}

  
        
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 0,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 10,
    paddingRight: 10,
    paddingLeft: 10,
    backgroundColor: "rgba(0, 0, 0, 0.25)", // Black color with 25% opacity
    borderWidth: 2, // Border width
    borderColor: "black", // Border color
    elevation: 0, // Decreased elevation
    color: "white",
  },
  placeholder: {
    position: "relative",
    marginLeft: 10,
    marginBottom: 3,
    fontSize: 16,
  },
});

export default SuperTextInput;
