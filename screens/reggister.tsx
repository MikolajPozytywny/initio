import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { SuperButton } from "../components/SuperButton";

const ReggisterScreen = () => {
  const navigation = useNavigation();

  const navigateTorLogin = () => {
    navigation.navigate("Login" as never);
  };

  return (
    <View style={styles.container}>
      <Text>register</Text>
      <SuperButton onPress={navigateTorLogin}>Go To Login</SuperButton>
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

export default ReggisterScreen;
