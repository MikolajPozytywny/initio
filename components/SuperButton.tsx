import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

export const SuperButton = (props) => {
  const onPressFunction = () => {
    console.log("dupa");
    props.onPress && props.onPress(); // call onPress only if it was passed to props of the component.
  };
  return (
    <Pressable style={[styles.container]} onPress={onPressFunction}>
      <Text
        style={[
          styles.buttonText,
          {
            color: props.myColor,
            textAlign: props.strona,
            fontSize: props.size,
            fontFamily: props.czcionka,
            fontWeight: props.weight,
            fontStyle: props.style,
          },
        ]}
      >
        {props.title}
      </Text>
    </Pressable>
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
  buttonText: {
    fontSize: 16, // Default font size
  },
});
