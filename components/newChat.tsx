import React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { messages } from "../utils/Mocks/Mock_1";
import { User } from "firebase/auth";

interface ChatLobbyProps {
  id: string;
  name: string;
  avatarUrl: any;
  conversationId: any;
  descryption: string;
}

export const NewChat = ({
  id,
  name,
  avatarUrl,
  descryption,
  conversationId,
}: ChatLobbyProps) => {
  const navigation = useNavigation();
  const navigateToProfileChat = () => {
    //@ts-ignore
    navigation.navigate("Chat" as never, {
      ConversationId: conversationId,
      targetUser: id,
      targetUserAvatar: avatarUrl,
    });
    console.log("navigateToProfileChat");
  };

  const navigateToTargetProfile = () => {
    //@ts-ignore
    navigation.navigate("TargetProfile" as never, {
      ConversationId: conversationId,
      targetUser: id,
      targetUserAvatar: avatarUrl,
      targetUserName: name,
      targetUserDescription: descryption,
    });
    console.log("navigateToTargetProfile", id, name, avatarUrl);
  };
  return (
    <Pressable style={Styles.container}>
      <Pressable onPress={navigateToTargetProfile}>
        <Image source={{ uri: avatarUrl }} style={Styles.avatar} />
      </Pressable>
      <Text onPress={navigateToProfileChat} style={Styles.Text}>
        {name}{" "}
      </Text>
    </Pressable>
  );
};

const Styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    // backgroundColor: "#454444",
    backgroundColor: "#2B2A2A",
    paddingVertical: 5,
    marginHorizontal: 25,
    borderRadius: 20,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 100,
    marginLeft: 10,
    backgroundColor: "blue",
  },
  Text: {
    width: "70%",
    color: "white",
    alignItems: "center",
    justifyContent: "flex-end",
    fontSize: 37,
    marginLeft: 20,
    top: 23,
    marginRight: 10,
    height: "100%",
  },
});
