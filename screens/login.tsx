import React from "react";
import { SuperButton } from "../components/SuperButton";
import { useState } from "react";
import { Button, LogBox, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import SuperTextInput from "../components/SuperTextInput";
import LoginForm from "../components/LoginForm";
import { Logo } from "../components/Logo";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../assets/fonts/Inter-Black.ttf"),
  });
  const [myNumber, setMyNumber] = useState(0);
  const onPressLearnMore = () => {
    setMyNumber(myNumber + 2);
    console.log(myNumber);
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const mruio = () => {
    setMyNumber(myNumber - 2);
    console.log(myNumber);
  };

  const navigateToHome = () => {
    navigation.navigate("Home");
  };

  const onSubmit = (email: string, password: string) => {
    console.log("Logging in with", email, password);
    navigateToHome();
  };

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={{ marginVertical: 20 }}>
        <SuperButton
          myColor="#7c9"
          title="dupa 2"
          strona="left"
          czcionka="Inter-Black"
          size={16} // Dodaj tę właściwość, aby zmienić rozmiar napisu
        />
      </View>
      <View style={{ marginVertical: 20 }}>
        <SuperButton
          myColor="#2a9"
          strona="left"
          title="dupa 3"
          czcionka="Inter-Black"
          size={16} // Dodaj tę właściwość, aby zmienić rozmiar napisu
        />
      </View>
      <View style={styles.loginContainer}>
        <LoginForm onSubmit={onSubmit} />
      </View>
      <Logo />
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
  text: {
    color: "#bd0000",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "red",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#000",
    borderBottomWidth: 5,
    backgroundColor: "green",
  },
  loginContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    backgroundColor: "yellow",
    width: "70%",
  },
});

export default LoginScreen;
