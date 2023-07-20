import React from "react";
import { SuperButton } from "../components/SuperButton";
import { StyleSheet, View } from "react-native";
import { Logo } from "../components/Logo";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import ReggisterForm from "../components/ReggisterForm";
import { auth } from "../fireBaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setStoreItem, getStoreItem } from "../utils/async-store";
import { userInfo } from "../api/user.api";

const ReggisterScreen = () => {
  const navigation = useNavigation();

  const navigateTorLogin = () => {
    navigation.navigate("Login" as never);
  };

  const navigateToHome = () => {
    navigation.navigate("Home" as never);
  };

  const onSubmit = async (email: string, password: string) => {
    console.log("Reggister in with", email, password);

    const loggedInUser = await getStoreItem("user");

    if (loggedInUser) {
      console.error("User already logged in");
      return;
    }

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log("User registered:", response);

      const user = {
        email: response.user.email,
        uid: response.user.uid,
        avatar_url: response.user.photoURL,
        name: response.user.displayName,
      };

      console.log("User info", user);

      await setStoreItem("user", user);

      navigateToHome();
    } catch (err) {
      console.error("Error registering user:", err);
    }
  };

  return (
    <View style={styles.container}>
      <Logo />

      <View style={styles.loginContainer}>
        <ReggisterForm onSubmit={onSubmit} />
      </View>

      <View style={{ marginVertical: 20 }}>
        <SuperButton
          onPress={navigateTorLogin}
          myColor="white"
          title="back"
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
    backgroundColor: "#241E24",
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

export default ReggisterScreen;
