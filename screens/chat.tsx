import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { user, messages } from "../utils/Mocks/Mock_1";
import { ChatBuble } from "../components/ChatBuble";
import { SuperButton } from "../components/SuperButton";

import { TopBar } from "../components/TopBar";
import { ProgressBar } from "react-native-paper";
import { userInfo } from "../api/api";

interface ChatScreenProps {
  route: any; // Route prop from react-navigation
}

const ChatScreen = ({ route }: ChatScreenProps) => {
  const navigation = useNavigation();
  const Route = useRoute();
  const ConverationId = route.params?.ConversationId;
  const targetUser = route.params?.targetUser;
  const targetUserAvatar = route.params?.targetUserAvatar;

  console.log("The user you are chatting with.", ConverationId, targetUser);

  console.log(route.params);
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TopBar />
      </View>

      <ChatBuble
        text={text}
        conversationId={ConverationId}
        avatar={targetUser}
        avatarr={targetUserAvatar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#241E24",
  },
  topBar: {
    paddingTop: 20,
    paddingHorizontal: 20,
    maxWidth: "100%",
  },
});

export default ChatScreen;
