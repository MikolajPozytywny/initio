import React from "react";
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
        <View style={styles.topBarContainer}>
          <IconButton
            size={40}
            icon="person-circle"
            iconButtonColor="white"
            isAntDesignActive={false}
          />
          <IconButton
            size={40}
            icon="setting"
            iconButtonColor="white"
            isAntDesignActive={true}
          />
        </View>
        <View style={styles.swaiperContainer}>
          <Swaiper />
          <View style={styles.swaiperBottomBarConteiner}>
            <SwaiperBottomBar />
          </View>
        </View>

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
    top: 10,
    marginTop: 10,
    maxHeight: "70%",
    Width: "110%",
    borderRadius: 60,
    alignSelf: "center", // Align the Swaiper to the top
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

    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});

export default HomeScreen;
