import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { SuperButton } from "../components/SuperButton";

const HomeScreen = () => {
  const navigation = useNavigation();

  const navigateToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <SuperButton onPress={navigateToLogin}>Go To Login</SuperButton>
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
  },
});

export default HomeScreen;
