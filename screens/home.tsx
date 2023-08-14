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
    maxHeight: "70%", // Adjust the height as needed
    maxWidth: "90%",
    paddingHorizontal: 5,
    top: -50,
    marginTop: 10,
    borderRadius: 60,
    alignSelf: "center", // Align the Swaiper to the top
    paddingBottom: 60,
  },
  superButtonContainer: {
    maxHeight: "100%", // Adjust the height as needed
    alignItems: "center",
    alignSelf: "center", // Align the BottomBar to the bottom
    marginBottom: 10,
  },
  topBarContainer: {
    justifyContent: "center", // Odległość między przyciskami będzie równa
    alignItems: "center", // Przyciski będą wyśrodkowane w pionie
    width: "100%",
    maxWidth: "100%",
  },
});

export default HomeScreen;
