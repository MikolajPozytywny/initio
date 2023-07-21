import React, { useState } from "react";
import { SuperButton } from "../components/SuperButton";
import { StyleSheet, View } from "react-native";
import LoginForm from "../components/LoginForm";
import { Logo } from "../components/Logo";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { setStoreItem } from "../utils/async-store";
import { Button, MD3Colors, ProgressBar, TextInput } from "react-native-paper";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../fireBaseConfig";
import { userInfo } from "../api/user.api";
import { Allert } from "../components/Allert";

const LoginScreen = () => {
  const navigation = useNavigation();

  const [mrunio, setMrunio] = useState(0);
  const [progress, setProgress] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  const navigateTorRegister = () => {
    navigation.navigate("Reggister" as never);
  };

  const navigateToHome = () => {
    navigation.navigate("Home" as never);
  };

  const onSubmit = async (email: string, password: string) => {
    try {
      setSubmitting(true); // Start form submitting
      setProgress(0.25);
      const response = await signInWithEmailAndPassword(auth, email, password);

      console.log("Successfuly logged in", response.user.uid);

      const user = await userInfo(response.user.uid);

      console.log("User info", user);

      await setStoreItem("user", user);
      navigateToHome();
      setProgress(0.5);
    } catch (err) {
      if (err.code === "auth/network-request-failed") {
        setMrunio(3); // Brak połączenia z serwerem
      } else {
        setMrunio(1); // Inny błąd
      }

      setTimeout(() => {
        setMrunio(0);
      }, 5000);
    } finally {
      setProgress(1);
      setSubmitting(false); // Reset form submitting, whether success or error
    }
  };

  return (
    <View style={styles.container}>
      <ProgressBar
        progress={progress}
        color="red"
        style={styles.progressBar}
        visible={submitting}
      />
      <View style={styles.dupa}>
        <Logo />

        <View style={styles.loginContainer}>
          <LoginForm onSubmit={onSubmit} submitting={submitting} />
          {mrunio === 1 && <Allert Allart={"nie poprawne dane logowania "} />}
          {mrunio === 3 && (
            <Allert Allart={"problem z poleczeniem z serwerem"} />
          )}
        </View>

        <View style={{ marginVertical: 20 }}>
          <Button
            onPress={navigateTorRegister}
            mode="contained"
            disabled={submitting}
          >
            Reggister
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#241E24",
  },
  loginContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    //backgroundColor: "yellow",
    maxWidth: "100%",
    width: "100%",
  },
  progressBar: {},

  dupa: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#241E24",
  },
});

export default LoginScreen;
