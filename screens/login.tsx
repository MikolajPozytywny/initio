import React from "react";
import { SuperButton } from "../components/SuperButton";
import { StyleSheet, View } from "react-native";
import LoginForm from "../components/LoginForm";
import { Logo } from "../components/Logo";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { setStoreItem } from "../utils/async-store";

const LoginScreen = () => {
  const navigation = useNavigation();

  const navigateTorRegister = () => {
    navigation.navigate("Reggister" as never);
  };

  const navigateToHome = () => {
    navigation.navigate("Home" as never);
  };

  const onSubmit = async (email: string, password: string) => {
    console.log("Logging in with", email, password);
    await setStoreItem("user", { email, password });
    navigateToHome();
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#7536db", "#DB36A4"]}
        start={{ x: 0.75, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.background}
      />

      <Logo />

      <View style={styles.loginContainer}>
        <LoginForm onSubmit={onSubmit} />
      </View>

      <View style={{ marginVertical: 20 }}>
        <SuperButton
          onPress={navigateTorRegister}
          myColor="white"
          title="Register"
          strona="left"
          czcionka="Inter-Black"
          size={16} // Dodaj tę właściwość, aby zmienić rozmiar napisu
        >
          Go To Login
        </SuperButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    width: "100%",
  },
  loginContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    //backgroundColor: "yellow",
    width: "70%",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: -50,
    bottom: -50,
    width: "100%",
  },
});

export default LoginScreen;
