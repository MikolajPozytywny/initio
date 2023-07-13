import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationScreen } from "../components/navigationScreen";
import { IconButton } from "../components/IconButton";
import { removeStoreItem } from "../utils/async-store";
import { Swaiper } from "../components/Swaiper";
import { SuperButton } from "../components/SuperButton";
import { BottomBar } from "../components/BottomBar";

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
    <>
      <View style={styles.container}>
        <View style={styles.swaiperContainer}>
          <Swaiper />
        </View>
        <View style={styles.superButtonContainer}>
          <BottomBar />
        </View>
        <View style={styles.iconButtonContainer}>{/* ...existing code */}</View>

        <View style={styles.navigationContainer}>
          <IconButton
            onPress={LogOut}
            icon="logout"
            iconButtonColor="black"
            isAntDesignActive={true}
          />
          <Text>Home Screen</Text>
          <NavigationScreen />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 0,
    elevation: 0,
  },
  swaiperContainer: {
    position: "relative",
    flex: 1,
    // right: 210,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },
  iconButtonContainer: {
    position: "relative",
    right: 20,
    top: -20,
  },
  navigationContainer: {
    position: "relative",
    marginVertical: 5,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  superButtonContainer: {
    position: "relative",
    top: 100,
    zIndex: 2,
    width: 300,
  },
});

export default HomeScreen;
