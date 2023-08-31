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
import { userInfo } from "../api/api";
import { Allert } from "../components/Allert";
import { makeTranslations, useLitteraMethods } from "../react-littera";

enum LoginError {
  "UNKNOWN_ERROR" = 1,
  "NETWORK_ERROR" = 3,
}

const LoginErrorMessages = Object.freeze<Record<LoginError, string>>({
  1: "Unknown error occurred",
  3: "Check your internet connection",
});

const LoginScreen = () => {
  const navigation = useNavigation();

  const [errorMsg, setErrorMsg] = useState<LoginError | null>(null);
  const [progress, setProgress] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const useTrans = makeTranslations({});
  const translated = useTrans();

  const navigateTorRegister = () => {
    navigation.navigate("Reggister" as never);
  };

  const navigateToHome = () => {
    navigation.navigate("Home" as never);
  };

  const onSubmit = async (email: string, password: string) => {
    setProgress(0);

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
      console.error(err);

      if (err.code === "auth/network-request-failed") {
        setErrorMsg(LoginError.NETWORK_ERROR); // Brak połączenia z serwerem
      } else {
        setErrorMsg(LoginError.UNKNOWN_ERROR); // Inny błąd
      }

      setTimeout(() => {
        setErrorMsg(null);
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

          {errorMsg ? <Allert Allart={LoginErrorMessages[errorMsg]} /> : null}
        </View>

        <View style={{ marginVertical: 20 }}>
          <Button
            onPress={navigateTorRegister}
            mode="contained"
            disabled={submitting}
            style={{ backgroundColor: "#454444" }}
          >
            {translated.register}
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
