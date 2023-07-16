import React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { user, messages, user2 } from "../utils/Mocks/Mock_1";
import { useNavigation } from "@react-navigation/native";

interface ChatLobbyProps {}


export const NewChat = () => {
 
 
const navigation = useNavigation();

const navigateToProfileChat = () => {
  navigation.navigate("Chat" as never);
  console.log("navigateToProfileChat");
};
 
 
  return ( 
  <Pressable onPress={navigateToProfileChat} style={Styles.container}>

   
       <Image source={{ uri: user.avatarUrl }} style={Styles.avatar} />
        <Text style={Styles.Text}
        >{user.name}</Text>
        

    </Pressable>
  );

}

const Styles = StyleSheet.create({
    container: {
   marginTop: 10,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",

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
        justifyContent: "center",
        fontSize: 40,
        padding: 10,
        backgroundColor: "#454444",
        borderRadius: 20,
        margin: 3,
        marginRight: 10,
        height: 70,
    },
});


