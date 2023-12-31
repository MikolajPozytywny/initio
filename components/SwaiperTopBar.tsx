import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { IconButton } from "../components/IconButton";
import { useNavigation } from "@react-navigation/native";
import { Appbar } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const SwaiperTopBar = () => {
  const navigation = useNavigation();

  const _handleSettings = () => navigation.navigate("Settings" as never);

  const clearSwipedUsersFromStorage = async () => {
    navigation.navigate("Filters" as never);
  };

  const _handleSearch = () => navigation.navigate("Profile" as never);

  return (
    <Appbar.Header style={styles.container}>
      <Appbar.Content title="" color="white" />
      <Appbar.Action
        icon="menu"
        onPress={clearSwipedUsersFromStorage}
        color="white"
      />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    color: "white",
    maxWidth: "100%",
    width: "100%",
    // Add your styles here
  },
});
