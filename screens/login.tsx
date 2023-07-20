import React from "react";
import { SuperButton } from "../components/SuperButton";
import { StyleSheet, View } from "react-native";
import LoginForm from "../components/LoginForm";
import { Logo } from "../components/Logo";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { setStoreItem } from "../utils/async-store";
import { Button, TextInput } from "react-native-paper";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../fireBaseConfig";
import { userInfo } from "../api/user.api";

const LoginScreen = () => {
  const navigation = useNavigation();

  const navigateTorRegister = () => {
    navigation.navigate("Reggister" as never);
  };

  const navigateToHome = () => {
    navigation.navigate("Home" as never);
  };

  const onSubmit = async (email: string, password: string) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);

      console.log("Successfuly logged in", response.user.uid);

      const user = await userInfo(response.user.uid);

      console.log("User info", user);

      await setStoreItem("user", user);
      navigateToHome();
    } catch (err) {
      console.error("Error logging in", err);
    }
  };

  return (
    <View style={styles.container}>
      <Logo />

      <View style={styles.loginContainer}>
        <LoginForm onSubmit={onSubmit} />
      </View>

      <View style={{ marginVertical: 20 }}>
        <Button onPress={navigateTorRegister} mode="contained">
          reggister
        </Button>
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
    backgroundColor: "#241E24",
    height: "200%",
  },
  loginContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    //backgroundColor: "yellow",
    maxWidth: "100%",
    width: "100%",
  },
});

export default LoginScreen;
