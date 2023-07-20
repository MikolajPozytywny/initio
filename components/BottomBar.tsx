import React, { useState } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { removeStoreItem } from "../utils/async-store";
import { LinearGradient } from "expo-linear-gradient";

interface Props {}

export const BottomBar = (props: Props) => {
  const navigation = useNavigation();


  const navigateToLogin = () => {
    navigation.navigate("Login" as never);
  };

  const LogOut = async () => {
    await removeStoreItem("user");
    navigateToLogin();
  };

  const navigateToProfileChatLobby = async () => {
    navigation.navigate("ChatLobby" as never);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
         colors={["#7536db", "#DB36A4"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradientContainer}
      >
        <View style={styles.iconContainer}>
          <IconButton
            size={40}
            onPress={LogOut}
            icon="logout"
            iconColor="white"
          />
          <IconButton
            size={40}
            onPress={LogOut}
            icon="magnify"
            iconColor="white"
     
          />
          <IconButton
            size={40}
            onPress={navigateToProfileChatLobby}
            icon="comment"
            iconColor="white"
           
          />
        </View>
      </LinearGradient>
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
    maxWidth: "80%",
    top: 0,
    borderRadius: 100,
    width: "100%",
  },
  gradientContainer: {
    borderRadius: 100,
    overflow: "hidden",
    maxWidth: "100%",
  },
  iconContainer: {
    flexDirection: "row", // Przyciski zostaną ułożone w jednym rzędzie
    justifyContent: "space-between", // Odległość między przyciskami będzie równa
    alignItems: "center", // Przyciski będą wyśrodkowane w pionie
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255,255,255, 0.25)",
    paddingHorizontal: 40,
  },
});
