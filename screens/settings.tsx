import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SuperButton } from "../components/SuperButton";
import { IconButton } from "../components/IconButton";
import { SettingsForm } from "../components/settingsForm";

interface Props {}

const SettingsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.settings1}>
        <SettingsForm />
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
});

export default SettingsScreen;
