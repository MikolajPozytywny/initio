import React from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";

interface Props {}

export const BottomBar = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>Pressable</Text>
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
