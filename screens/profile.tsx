import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SuperButton } from "../components/SuperButton";
import { IconButton } from "../components/IconButton";
import { SettingsForm } from "../components/settingsForm";
import { Logo } from "../components/Logo";
import { ProfileForm } from "../components/ProfileForm";

interface Props {}

const ProfileScreen = () => {
  const navigation = useNavigation();

  const navigateToBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.TopBar}>
        <IconButton
          size={20}
          icon="back"
          iconButtonColor="white"
          isAntDesignActive={true}
          onPress={navigateToBack}
        />
      </View>
      <Logo />
      <ProfileForm />
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
    marginTop: 20,
    width: "100%",
    marginLeft: 20,
  },
});

export default ProfileScreen;
