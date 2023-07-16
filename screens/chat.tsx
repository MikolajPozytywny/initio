import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { user, messages } from "../utils/Mocks/Mock_1";
import { ChatBuble } from "../components/ChatBuble";
import { SuperButton } from "../components/SuperButton";
import SuperTextInput from "../components/SuperTextInput";
import { TopBar } from "../components/TopBar";

interface ChatScreenProps {}

const ChatScreen = (props: ChatScreenProps) => {
    const navigation = useNavigation();

    
  const [text, settext] = useState("");

  

  return (
    <View style={styles.container}>
        <View style={styles.topBar}>
        <TopBar />

        </View>

      <ChatBuble text={text}
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
