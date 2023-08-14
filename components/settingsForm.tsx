import React, { useEffect, useState } from "react"; // Import useState
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"; // Import TouchableOpacity
import { IconButton } from "../components/IconButton";
import { Logo } from "./Logo";
import { useNavigation } from "@react-navigation/native";
import { Button, Snackbar, TextInput } from "react-native-paper";
import { makeTranslations, useLitteraMethods } from "../react-littera";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage

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

  return (
    <View style={styles.container}>
      <IconButton
        size={20}
        icon="back"
        iconButtonColor="white"
        isAntDesignActive={true}
        onPress={navigateToBack}
      />
      <View style={styles.Logo}>
        <Logo />
      </View>
      <View style={styles.settings1}>
        <Text style={styles.text}>Profile settings</Text>
        <View style={styles.settingss1}>
          <Text style={styles.text}>{translated.Languege}:</Text>
          <Button onPress={changeLanguage}>{translated.Qlanguage}</Button>
        </View>

        <View style={[styles.settingss1, { marginTop: 10 }]}>
          <IconButton
            size={20}
            icon="user"
            iconButtonColor="white"
            isAntDesignActive={true}
          />
          <Text style={styles.text}>Settings</Text>
        </View>
      </View>
      <View style={styles.settings1}>
        <Text style={styles.text}>Profile settings</Text>
        <View style={styles.settingss1}>
          <IconButton
            size={20}
            icon="user"
            iconButtonColor="white"
            isAntDesignActive={true}
          />
          <Text style={styles.text}>Settings</Text>
        </View>

        <View style={[styles.settingss1]}>
          <IconButton
            size={20}
            icon="user"
            iconButtonColor="white"
            isAntDesignActive={true}
          />
          <TextInput
            mode="flat"
            value={name} // Use the name state variable
            underlineColor="transparent"
            style={styles.text}
            maxLength={20}
            multiline={true}
            onChangeText={(text) => {
              setName(text); // Use setName to update the name state
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
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
  },
  settingss1: {
    marginTop: 5,
    marginLeft: 10,
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
  },
  Logo: {
    justifyContent: "center",
    alignItems: "center",
  },
});
