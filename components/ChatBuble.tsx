import { user, messages, user2 } from "../utils/Mocks/Mock_1";
import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { SuperButton } from "./SuperButton";
import SuperTextInput from "./SuperTextInput";
import { IconButton } from "./IconButton";
import { Logo } from "./Logo";

interface ChatBubleProps {
    text: string;
    message?: string;
    userId?: string;
    timestamp?: Date;
    }
    

export const ChatBuble = (props: ChatBubleProps) => {

    const [messageList, setMessageList] = useState(messages);
    const [text, settext] = useState("");

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
        settext("");
      };
  
    return (
      <View style={styles.container}>
        {messageList.map((message, index) => (
          <View
            key={index}
            style={message.userId === user.id ? styles.message : styles.message2}>
                
            <Text style={styles.messageText}>{message.message}</Text>
          </View>
        ))}
    <View style={styles.message3}>
 
        
      <SuperTextInput
        placeholderColor="white"
        label="password"
        onChange={settext}
        style={{ fontFamily: "Inter-Black" }}
            maxWidth={"80%"}
            width={"100%"}
            backgroundColor="#454444"
            borderColor="transparent"
            borderRadius={20}
        value={text}
     />  
      <IconButton 
      onPress={pushFunction} 
      icon = "send"
      isAntDesignActive = {false}
        size = {30}
        iconButtonColor = "white"
        cyrcle="#454444"
            borderRadius={20}
            



      />
     </View>
      </View>
      
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: "100%",
    height: "100%",
    width: "100%",
    marginBottom: 10,
    

  },
  message: {
    justifyContent: "flex-start",
    alignItems: "flex-end",


  },
  message2: {
 
    justifyContent: "flex-start",
    alignItems: "flex-start",

    width: "100%",
   
  },
  message3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    flexDirection: "row",
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