import React, { useState } from "react";
import { SuperButton } from "../components/SuperButton";
import { StyleSheet, View } from "react-native";
import { Logo } from "../components/Logo";
import { useNavigation } from "@react-navigation/native";
import ReggisterForm from "../components/ReggisterForm";
import { auth } from "../fireBaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setStoreItem, getStoreItem } from "../utils/async-store";
import { Button } from "react-native-paper";
import { Allert } from "../components/Allert";

const ReggisterScreen = () => {
  const navigation = useNavigation();
  const [allart, setAllart] = useState<string>("");
  const [mrunio, setMrunio] = useState(0);

  // const handleGoogleSignIn = async (user: any) => {
  //   console.log("Google sign in", user);

  // try {
  //   GoogleSignin.configure({
  //     scopes: ["profile", "email"],
  //   });

  //   await GoogleSignin.hasPlayServices();
  //   const response = await GoogleSignin.signIn();

  //   console.log("User logged in with Google:", response);

  //   const user = {
  //     email: response.user.email,
  //     id: response.user.id,
  //     avatar_url: response.user.photo,
  //     name: response.user.givenName + " " + response.user.familyName,
  //   };

  //   // await userCreate(user);
  //   console.log("User created");

  //   console.log("User info", user);

  //   await setStoreItem("user", user);
  // } catch (error) {
  //   if (error.code === statusCodes?.SIGN_IN_CANCELLED) {
  //     // user cancelled the login flow
  //     console.error("User cancelled the login flow");
  //   } else if (error.code === statusCodes?.IN_PROGRESS) {
  //     // operation (e.g. sign in) is in progress already
  //     console.error("Operation (e.g. sign in) is in progress already");
  //   } else if (error.code === statusCodes?.PLAY_SERVICES_NOT_AVAILABLE) {
  //     // play services not available or outdated
  //     console.error("Play services not available or outdated");
  //   } else {
  //     console.error("Some other error happened", error);
  //   }
  // }
  // };

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
        id: response.user.uid,
        avatar_url: response.user.photoURL,
        name: response.user.displayName,
      };

      console.log("User info", user);

      await setStoreItem("user", user);

      navigateToHome();
    } catch (err) {
      setMrunio(1);
      if (err.code === "auth/network-request-failed") {
        setAllart("Brak połączenia z serwerem");
      } else if (err.code === "auth/email-already-in-use") {
        setAllart("Email jest już zajęty");
      } else {
        err?.message || "an unexpected error occurred";
      }

      setTimeout(() => {
        setMrunio(0);
      }, 5000);
    }
  };

  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.loginContainer}>
        <ReggisterForm onSubmit={onSubmit} />
        {mrunio === 1 && <Allert Allart={allart} />}
      </View>
      <View style={{ marginVertical: 20 }}>
        <Button onPress={navigateTorLogin} mode="contained">
          Login
        </Button>
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
