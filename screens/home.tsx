import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { SuperButton } from "../components/SuperButton";

const HomeScreen = () => {
  const navigation = useNavigation();

  const navigateToLogin = () => {
    navigation.navigate("Login" as never);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient

        colors={["#4c669f", "#3b5998", "#192f6a"]}
        style={styles.background}
      />
      <Text>Home Screen</Text>
      <SuperButton onPress={navigateToLogin}>Go To Login</SuperButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 1000,
  },
});

export default HomeScreen;
