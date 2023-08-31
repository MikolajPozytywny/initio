import React, { useState } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { removeStoreItem } from "../utils/async-store";
import { LinearGradient } from "expo-linear-gradient";

interface Props {
  onLeftButtonPress: () => void;
  onRightButtonPress: () => void;
  onMiddleButtonPress: () => void;
  onRight2ButtonPress: () => void;
  onLeft2ButtonPress: () => void;
}

export const SwaiperBottomBar = (props: Props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <IconButton
          size={30}
          onPress={props.onLeft2ButtonPress}
          icon="arrow-u-left-top"
          animated={true}
          iconColor="#ff8000"
          mode="outlined"
          containerColor="rgba(255, 128, 0, 0.1)"
          rippleColor={"#ff8000"}
          style={{ borderColor: "#ff8000", justifyContent: "flex-end" }}
        />
        <IconButton
          size={40}
          onPress={props.onLeftButtonPress} // Call the function from the prop
          icon="close"
          animated={true}
          iconColor="red"
          mode="outlined"
          containerColor="rgba(255, 0 ,0 , 0.1)"
          rippleColor={"red"}
          style={{ borderColor: "red" }}
        />
        {/* <IconButton
          size={50}
          icon="star"
          background={"#6B6B6B"}
          iconColor="white"
          onPress={props.onMiddleButtonPress}
        /> */}
        <IconButton
          size={40}
          onPress={props.onRightButtonPress}
          icon="check"
          animated={true}
          iconColor="#22FC0D"
          mode="outlined"
          containerColor="rgba(13, 252, 111, 0.1)"
          rippleColor={"#22FC0D"}
          style={{ borderColor: "#22FC0D" }}
        />
        <IconButton
          size={30}
          onPress={props.onRight2ButtonPress}
          icon="text-box-outline"
          animated={true}
          iconColor="#ffff00"
          mode="outlined"
          containerColor="rgba(255, 255, 0, 0.1)"
          rippleColor={"#ffff00"}
          style={{ borderColor: "#ffff00" }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: "100%",
    borderColor: "Dark", // Border color
    elevation: 0, // Decreased elevation
    height: "20%",
    top: 0,
    borderRadius: 100,
    marginTop: 5,
  },
  gradientContainer: {
    borderRadius: 100,
    overflow: "hidden",
    height: 80,
  },
  iconContainer: {
    flexDirection: "row", // Przyciski zostaną ułożone w jednym rzędzie
    justifyContent: "space-between", // Odległość między przyciskami będzie równa
    alignItems: "center", // Przyciski będą wyśrodkowane w pionie
    width: "100%",
    maxWidth: "100%",
    height: "100%",
    paddingHorizontal: "13%",
    borderRadius: 100,
    backgroundColor: "rgba(255,255,255, 0)",
  },
});
