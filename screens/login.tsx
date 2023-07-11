import React from "react";
import { SuperButton } from "../components/SuperButton";
import { StyleSheet, View } from "react-native";
import LoginForm from "../components/LoginForm";
import { Logo } from "../components/Logo";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const LoginScreen = () => {
  const navigation = useNavigation();

  const navigateTorRegister = () => {
    navigation.navigate("Reggister" as never);
  };

  const navigateToHome = () => {
    navigation.navigate("Home" as never);
  };

  const onSubmit = (email: string, password: string) => {
    console.log("Logging in with", email, password);
    navigateToHome();
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(255, 61, 72, 1)", "rgba(60, 17, 67, 1)"]}
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
          myColor="#7c9"
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
    top: 0,
    bottom: 0,
  },
});

export default LoginScreen;
