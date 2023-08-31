import React, { useEffect, useState } from "react"; // Import useState
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"; // Import TouchableOpacity
import { IconButton } from "./IconButton";
import { Logo } from "./Logo";
import { useNavigation } from "@react-navigation/native";
import { Button, Snackbar, TextInput } from "react-native-paper";
import { makeTranslations, useLitteraMethods } from "../react-littera";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage
import { removeStoreItem } from "../utils/async-store";

export const SettingsForm = () => {
  const useTrans = makeTranslations({});
  const navigation = useNavigation();
  const [name, setName] = useState(""); // Define the name state variable
  const { setLocale } = useLitteraMethods();
  const [languageIndex, setLanguageIndex] = useState(0);
  const languages = ["en_US", "pl_PL"];
  const [visible, setVisible] = React.useState(false);
  const translated = useTrans();

  const navigateToBack = () => {
    navigation.goBack();
  };
  const navigateToProfileChat = () => {};

  const changeLanguage = async () => {
    const newIndex = (languageIndex + 1) % languages.length;
    setLanguageIndex(newIndex);

    try {
      await AsyncStorage.setItem("selectedLanguageIndex", newIndex.toString());
      console.log("Selected language:", languages[newIndex]);
    } catch (error) {
      console.error("Error saving language index:", error);
    }
    setLocale(languages[newIndex]);
  };
  useEffect(() => {
    const loadSelectedLanguageIndex = async () => {
      try {
        const storedIndex = await AsyncStorage.getItem("selectedLanguageIndex");
        if (storedIndex !== null) {
          setLanguageIndex(Number(storedIndex));
        }
      } catch (error) {
        console.error("Error loading language index:", error);
      }
    };

    loadSelectedLanguageIndex();
  }, []);
  const LogOut = async () => {
    await removeStoreItem("user");
    navigateToLogin();
  };

  const navigateToLogin = () => {
    navigation.navigate("Login" as never);
  };

  return (
    <View style={styles.container}>
      <View style={styles.settings1}>
        <Text style={styles.text}>{translated.ProfileSettings}</Text>
        <View style={styles.settingss1}>
          <Text style={styles.text2}>{translated.Languege}:</Text>
          <Button onPress={changeLanguage}>{translated.Qlanguage}</Button>
        </View>
        <Button style={{ backgroundColor: "#454444" }} onPress={LogOut}>
          LogOut
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  settings1: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "#2B2A2A",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
    width: "100%",
    maxWidth: "60%",
    middle: 0,
  },

  settingss1: {
    backgroundColor: "#454444",
    alignItems: "center",

    borderColor: "dark",
    elevation: 0,
    flexDirection: "row",
    color: "white",
    borderRadius: 50,
  },
  text: {
    color: "white",
    alignItems: "center",
  },
  text2: {
    color: "white",
    alignItems: "center",
  },
  Logo: {
    justifyContent: "center",
    alignItems: "center",
  },
});
