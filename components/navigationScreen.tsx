import React from "react";
import { View, Text, Image } from "react-native";
import { SuperButton } from "./SuperButton";
import { StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export const NavigationScreen = () => {
  return (
    <View>
      <SuperButton>
        <Ionicons name="home" size={24} color="black" />
      </SuperButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    width: "100%",
    height: "100%",
  },
});
