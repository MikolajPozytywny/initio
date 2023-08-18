import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SuperButton } from "../components/SuperButton";
import { IconButton } from "../components/IconButton";

import { Appbar } from "react-native-paper";
import { SettingsForm } from "../components/SettingsForm";
import { BottomBar } from "../components/BottomBar";

interface Props {}

const SettingsScreen = () => {
  const navigation = useNavigation();

  const navigateToBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.settings1}>
        <SettingsForm />
      </View>
      <View style={styles.BottomBar}>
        <BottomBar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    borderColor: "Dark", // Border colorset
    elevation: 0, // Decreased elevation
    backgroundColor: "#241E24",
  },
  settings1: {
    marginTop: "10%",
    justifyContent: "flex-start",
    alignItems: "center",
    borderColor: "Dark", // Border color
    elevation: 0, // Decreased elevation

    maxHeight: "100%",
    width: "90%",
    flexDirection: "row",
    color: "white",
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 10,
  },
  TopBar: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    color: "white",
    backgroundColor: "transparent",
    width: "100%",
  },
  BottomBar: {
    flex: 1,
    maxHeight: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});

export default SettingsScreen;
