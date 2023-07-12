import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { SuperButton } from "../components/SuperButton";
import { NavigationScreen } from "../components/navigationScreen";
import { IconButton } from "../components/IconButton";
import { removeStoreItem } from "../utils/async-store";

const HomeScreen = () => {
  const navigation = useNavigation();

  const navigateToLogin = () => {
    navigation.navigate("Login" as never);
  };

  const LogOut = async () => {
    await removeStoreItem("user");
    navigateToLogin();
  };
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(255, 61, 72, 1)", "rgba(60, 17, 67, 1)"]}
        start={{ x: 0.75, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.background}
      />
      <IconButton
        onPress={LogOut}
        icon="logout"
        iconButtonColor="black"
        isAntDesignActive={true}
      />
      <Text>Home Screen</Text>
      <NavigationScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    width: "100%",
    height: "100%",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 1000,
  },
});

export default HomeScreen;
