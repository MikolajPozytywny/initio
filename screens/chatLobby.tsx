import React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NewChat } from "../components/newChat";
import { TopBar } from "../components/TopBar";
import { user2, user, user3 } from "../utils/Mocks/Mock_1";

interface ChatLobbyProps {
onPress: () => void;

}

const ChatLobbyScreen = () => {
  const navigation = useNavigation();

  // Handle chat item press
 
 
  return (
    <View style={Styles.container}>
      <View style={Styles.topBar}>
        <TopBar />
      </View>
      <View style={Styles.chat}>
        <NewChat user={user}   conversationId="abc" />
        <NewChat user={user2}   conversationId="abc2" />
        <NewChat user={user3}  conversationId="abc" />
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
  chat: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    maxWidth: "100%",
    width: "100%",
  },
});

export default ChatLobbyScreen;
