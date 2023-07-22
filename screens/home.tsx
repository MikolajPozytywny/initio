import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

import { IconButton } from "../components/IconButton";
import { removeStoreItem } from "../utils/async-store";
// Add this import statement
import { Swaiper } from "../components/Swaiper";
import { SuperButton } from "../components/SuperButton";
import { BottomBar } from "../components/BottomBar";
import { SwaiperBottomBar } from "../components/SwaiperBottomBar";
import { Slider1 } from "../components/Slider";
import { SwaiperTopBar } from "../components/SwaiperTopBar";
import { userList } from "../api/user.api";
import { User } from "../types";
import { createUserWithEmailAndPassword } from "firebase/auth";

const HomeScreen = () => {
  const navigation = useNavigation();

  const navigateToLogin = () => {
    navigation.navigate("Login" as never);
  };

  const navigateToSettingsScreen = () => {
    navigation.navigate("Settings" as never);
  };

  const navigateToProfileScreen = () => {
    navigation.navigate("Profile" as never);
  };
  const navigateToProfileChat = () => {
    navigation.navigate("Chat" as never);
  };

  const LogOut = async () => {
    await removeStoreItem("user");
    navigateToLogin();
  };

  return (
    <>
      <View style={styles.container}>
        <SwaiperTopBar />
        <View style={styles.swaiperContainer}>
          <Swaiper />
          <View style={styles.swaiperBottomBarConteiner}>
            <SwaiperBottomBar />
          </View>
        </View>
        <Slider1 onSlideUp={console.log} />
        <View style={styles.superButtonContainer}>
          <BottomBar />
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between", // Add this to distribute content vertically
    backgroundColor: "#241E24",
  },
  swaiperContainer: {
    backgroundColor: "#424242",
    alignItems: "center",
    paddingHorizontal: 5,
    top: -50,
    marginTop: 10,
    maxHeight: "70%",
    Width: "110%",
    borderRadius: 60,
    alignSelf: "center", // Align the Swaiper to the top
    marginBottom: 20,
  },
  superButtonContainer: {
    maxHeight: "100%", // Adjust the height as needed
    alignItems: "center",
    alignSelf: "center", // Align the BottomBar to the bottom
    marginBottom: 10,
  },
  swaiperBottomBarConteiner: {
    alignItems: "center",
    maxHeight: "100%",
    marginBottom: 10,
  },
  topBarContainer: {
    flexDirection: "row", // Przyciski zostaną ułożone w jednym rzędzie
    justifyContent: "space-between", // Odległość między przyciskami będzie równa
    alignItems: "center", // Przyciski będą wyśrodkowane w pionie
    width: "100%",

    paddingHorizontal: 5,
    paddingVertical: 5,
  },
});

export default HomeScreen;
