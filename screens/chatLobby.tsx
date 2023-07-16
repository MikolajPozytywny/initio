import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { SuperButton } from "../components/SuperButton";
import { useNavigation } from "@react-navigation/native";
import { NewChat } from "../components/newChat";
import { TopBar } from "../components/TopBar";

interface ChatLobbyProps {}

const ChatLobbyScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={Styles.container}> 
      <View style={Styles.topBar}>
      <TopBar />
      </View>
      <View style={Styles.Chat}>
      <NewChat />
      <NewChat />
      <NewChat />
      <NewChat />
      </View>
    </View>
  );
};
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#241E24",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    maxWidth: "100%",   
  },
  topBar: {
    paddingTop: 20,
    paddingHorizontal: 20,
maxWidth: "100%",   
width: "100%",

  },
  Chat: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",

    maxWidth: "100%",
    width: "100%",
  },
});


export default ChatLobbyScreen;
