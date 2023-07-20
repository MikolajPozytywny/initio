import { user, messages, user2, conversations } from "../utils/Mocks/Mock_1";
import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { SuperButton } from "./SuperButton";

import { Logo } from "./Logo";
import { useNavigation, useNavigationState, useRoute } from "@react-navigation/native";
import { TextInput } from "react-native-paper";
import { IconButton, MD3Colors } from 'react-native-paper';

interface ChatBubleProps {
    text: string;
    message?: string;
    userId?: string;
    timestamp?: Date;
    conversationId?: string;
    }
    

    export const ChatBuble = (props: ChatBubleProps) => {
      const navigation = useRoute();
      const [messageList, setMessageList] = useState(messages);
      const [text, settext] = useState("");
    
      const conversation = conversations[props.conversationId];
    
      const pushFunction = () => {
        if (text === "") {
          return;
        }
        const newMessage = {
          userId: "123",
          timestamp: new Date(),
          message: text, // Assigning the text directly without using props
        };
        setMessageList((prevMessageList) => [...prevMessageList, newMessage]);
        console.log(text);
        settext("");
      };
    
      return (
        <View style={styles.container}>
          {messageList.map((message, index) => (
            <View
              key={index}
              style={message.userId === user.id ? styles.message : styles.message2}
            >
              <Text style={styles.messageText}>{message.message}</Text>
            </View>
          ))}
    
          <View style={styles.message3}>
            <TextInput
              onChangeText={(text) => settext(text)}
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
        justifyContent: 'flex-start',
        alignItems: 'center',
        

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

      },
      message3: { 
       flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginBottom: 10,
        marginTop: 10, // Add margin to separate the message list and input area
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
    });