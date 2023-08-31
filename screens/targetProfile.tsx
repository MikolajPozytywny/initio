import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SuperButton } from "../components/SuperButton";
import { IconButton } from "../components/IconButton";
import { Logo } from "../components/Logo";
import { ProfileForm } from "../components/ProfileForm";
import { Appbar, Avatar } from "react-native-paper";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useUser } from "../utils/user-hook";
import { set } from "firebase/database";
import { BottomBar } from "../components/BottomBar";
import { TargetProfileForm } from "../components/TargetProfileForm";

interface Props {
  route: any;
}

const TargetProfileScreen = ({ route }: Props) => {
  const navigation = useNavigation();
  const ConverationId = route.params?.ConversationId;
  const targetUser = route.params?.targetUser;
  const targetUserAvatar = route.params?.targetUserAvatar;
  const targetUserName = route.params?.targetUserName;
  const targetUserDescription = route.params?.targetUserDescription;
  console.log("TargetProfileScreen", targetUser);
  const navigateToBack = () => {
    navigation.goBack();
  };

  const navigateToProfileChat = () => {
    navigation.navigate("EditProfile" as never);
  };
  console.log(
    "TargetProfileScreen",
    targetUser,
    targetUserName,
    targetUserAvatar
  );
  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.TopBar}>
        <Appbar.Content title="Title" />
      </Appbar.Header>

      <TargetProfileForm
        id={targetUser}
        name={targetUserName}
        avatarUrl={targetUserAvatar}
        description={targetUserDescription}
      />
      <BottomBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    borderColor: "Dark", // Border colorset
    elevation: 0, // Decreased elevation
    backgroundColor: "#241E24",
  },
  settings1: {
    borderColor: "Dark", // Border color
    elevation: 0, // Decreased elevation
    backgroundColor: "#454444",
    maxHeight: "100%",
    width: "90%",
    flexDirection: "row",
    color: "white",
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
  settings2: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "Dark", // Border color
    elevation: 0, // Decreased elevation
    backgroundColor: "#2B2A2A",
    maxHeight: "100%",
    width: "90%",
    color: "white",
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 20,
  },
  TopBar: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    color: "white",
    backgroundColor: "transparent",
    width: "100%",
  },
});

export default TargetProfileScreen;
