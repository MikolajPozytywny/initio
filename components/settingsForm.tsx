import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { IconButton } from "../components/IconButton";
import { Logo } from "./Logo";
import { useNavigation } from "@react-navigation/native";

export const SettingsForm = () => {
  const navigation = useNavigation();

  const navigateToBack = () => {
    navigation.goBack();
  };

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
          <IconButton
            size={20}
            icon="user"
            iconButtonColor="white"
            isAntDesignActive={true}
          />
          <Text style={styles.text}>Settings</Text>
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
          <Text style={styles.text}>Settings</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  settings1: {
    marginTop: 10,
    backgroundColor: "#2B2A2A",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  settingss1: {
    marginTop: 5,
    backgroundColor: "#454444",
    alignItems: "center",
    borderColor: "dark",
    elevation: 0,
    flexDirection: "row",
    color: "white",
    width: "100%",
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
