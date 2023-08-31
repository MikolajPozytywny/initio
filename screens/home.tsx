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
import { userList } from "../api/api";
import { User } from "../types";

interface ChatHomeProps {
  route: any; // Route prop from react-navigation
}

const HomeScreen = ({ route }: ChatHomeProps) => {
  const navigation = useNavigation();
  const description = route.params?.description;
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

  const [users, setUsers] = useState<User[] | null>(null);

  const fetchUserList = async () => {
    const response = await userList();
    setUsers(response);
  };

  useEffect(() => {
    fetchUserList();
  }, []);

  const LogOut = async () => {
    await removeStoreItem("user");
    navigateToLogin();
  };
  console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", description);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.topBarContainer}>
          <SwaiperTopBar />
        </View>
        <View style={styles.swaiperContainer}>
          <Swaiper />
        </View>
        <View style={styles.bottomBar2}>
          <BottomBar />
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#241E24",
  },
  swaiperContainer: {
    width: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    height: "100%",
  },
  superButtonContainer: {
    maxHeight: "100%", // Adjust the height as needed
    maxWidth: "100%",
    alignItems: "center",
    height: "100%",
    justifyContent: "flex-end",
    alignSelf: "center", // Align the BottomBar to the bottom
    marginBottom: 10,
  },
  topBarContainer: {
    justifyContent: "center", // Odległość między przyciskami będzie równa
    alignItems: "center", // Przyciski będą wyśrodkowane w pionie
    width: "100%",
    maxWidth: "100%",
  },
  bottomBar2: {
    alignItems: "center",
    justifyContent: "flex-end",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  Text: {
    position: "absolute",
    width: "100%",
    textAlign: "center",
    marginTop: "20%",
    color: "white",
    fontSize: 20,
    transform: [{ rotate: "45deg" }],
  },
});

export default HomeScreen;
