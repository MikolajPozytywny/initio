import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SuperButton } from "../components/SuperButton";
import { IconButton } from "../components/IconButton";
import { SettingsForm } from "../components/SettingsForm";
import { Logo } from "../components/Logo";
import { ProfileForm } from "../components/ProfileForm";
import { Appbar, Avatar } from "react-native-paper";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useUser } from "../utils/user-hook";
import { set } from "firebase/database";
import { EditProfileForm } from "../components/EditProfileForm";

interface Props {}

const EditProfileScreen = () => {
  const navigation = useNavigation();

  const navigateToBack = () => {
    navigation.navigate("Profile" as never);
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.TopBar}>
        <Appbar.Action
          icon="arrow-left"
          color="white"
          onPress={navigateToBack}
        />
        <Appbar.Content title="Title" />
      </Appbar.Header>

      <EditProfileForm />
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
    borderColor: "Dark", // Border color
    elevation: 0, // Decreased elevation
    backgroundColor: "#454444",
    maxHeight: "100%",
    width: "90%",
    flexDirection: "row",
    color: "white",
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
  settings2: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "Dark", // Border color
    elevation: 0, // Decreased elevation
    backgroundColor: "#2B2A2A",
    maxHeight: "100%",
    width: "90%",
    color: "white",
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 20,
  },
  TopBar: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    color: "white",
    backgroundColor: "transparent",
    width: "100%",
  },
});

export default EditProfileScreen;
