import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Avatar, TextInput } from "react-native-paper";
import { IconButton } from "react-native-paper";
import { useRoute } from "@react-navigation/native";
import { getDatabase, onChildAdded, push, ref } from "firebase/database";
import { database } from "../fireBaseConfig";
import { useUser } from "../utils/user-hook";

interface ChatBubleProps {
  text: string;
  message?: string;
  userId?: string;
  timestamp?: Date;
  conversationId?: string;
  avatar?: string;
  avatarr?: string;
}

const chatRef = ref(database, "chat");

export const ChatBuble = (props: ChatBubleProps) => {
  const navigation = useRoute();

  const listenForChatMessages = () => {
    onChildAdded(chatRef, (snapshot) => {
      const message = snapshot.val();

      console.log("message", message);
      // Add the message to the message list.
      setMessageList((prevMessageList) => [...prevMessageList, message]);
      console.log("Received message:", message);
    });
  };

  useEffect(() => {
    listenForChatMessages();

    return () => {};
  }, [chatRef]);

  const [text, setText] = useState("");
  const [messageList, setMessageList] = useState([]);
  const { user, loading } = useUser();
  const conversation = `${user?.id}|${props.avatar}`;
  const conversation2 = `${props.avatar}|${user?.id}`;

  const pushFunction = async () => {
    if (text === "") {
      return;
    }
    const message = {
      userId: user?.id,
      timestamp: new Date(),
      message: text,
      conversationId: conversation,
    };

    await push(chatRef, message);
    console.log("Sent message:", message);
    setText(""); // Clear the input field
  };
  console.log("conversation1212122", conversation);
  return (
    <View style={styles.container}>
      <ScrollView style={styles.ScrollView}>
        {messageList.map((message, index) => {
          // Check if the message belongs to the current conversation
          if (
            message.conversationId === conversation ||
            message.conversationId === conversation2
          ) {
            return (
              <View
                key={index}
                style={
                  message.userId === user?.id ? styles.message : styles.message2
                }
              >
                {message.userId !== user?.id ? (
                  <Avatar.Image
                    size={50}
                    source={{
                      uri: props.avatarr,
                    }}
                  />
                ) : null}
                <Text style={styles.messageText}>{message.message}</Text>
              </View>
            );
          } else {
            return null; // Skip rendering messages not belonging to the current conversation
          }
        })}
      </ScrollView>
      <View style={styles.message3}>
        <TextInput
          onChangeText={(text) => setText(text)}
          placeholder="Aa"
          placeholderTextColor="white"
          style={{
            flex: 1,
            backgroundColor: "#454444",
            marginLeft: 10,
            borderRadius: 10,
          }}
          textColor="white"
          value={text}
        />
        <IconButton
          onPress={pushFunction}
          icon="send"
          iconColor="white"
          size={35}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  message: {
    justifyContent: "flex-start",
    alignItems: "flex-end",
    width: "100%",
  },
  message2: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 10,
    width: "100%",
    flexDirection: "row",
  },
  message3: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginBottom: 10,
    backgroundColor: "#241E24",
  },
  messageText: {
    color: "white",
    fontSize: 20,
    padding: 10,
    backgroundColor: "#454444",
    borderRadius: 20,
    margin: 3,
    marginHorizontal: 10,
  },
  ScrollView: {
    width: "100%",
    height: "100%",
  },
});
