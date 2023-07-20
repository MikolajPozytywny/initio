import React, { useState } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { removeStoreItem } from "../utils/async-store";
import { LinearGradient } from "expo-linear-gradient";

interface Props {}

export const SwaiperBottomBar = (props: Props) => {
  const navigation = useNavigation();

  const [mrunio, setMrunio] = useState("heart-outline");

  const clicked = async () => {
    if (mrunio === "heart") {
      setMrunio("heart-outline");
      console.log("unlicket");
      return;
    }
    setMrunio("heart");
    console.log("Like");
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <IconButton
          size={40}
          icon="head-outline"
          onPress={clicked}
          background={"#6B6B6B"}
          iconColor="white"
        />
        <IconButton
          size={50}
          icon="star"
          onPress={clicked}
          background={"#6B6B6B"}
          iconColor="white"

        />
        <IconButton
          size={40}
          onPress={clicked}
          icon={mrunio}
          background={"#6B6B6B"}
          animated={true}
          iconColor="white"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "Dark", // Border color
    elevation: 0, // Decreased elevation
    height: 80,
    width: 360,
    top: 0,
    borderRadius: 100,
    marginTop: 5,
  },
  gradientContainer: {
    borderRadius: 100,
    overflow: "hidden",
    height: 80,
    width: 300,
  },
  iconContainer: {
    flexDirection: "row", // Przyciski zostaną ułożone w jednym rzędzie
    justifyContent: "space-between", // Odległość między przyciskami będzie równa
    alignItems: "center", // Przyciski będą wyśrodkowane w pionie
    width: "80%",
    height: "100%",
    paddingHorizontal: 20,
    borderRadius: 100,
    backgroundColor: "rgba(255,255,255, 0)",
  },
});
