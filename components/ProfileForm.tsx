import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Logo } from "./Logo";
import { IconButton, TextInput } from "react-native-paper";
import { userUpdate } from "../api/api";
import { useUser } from "../utils/user-hook";

interface Props {}
export const ProfileForm = (props: Props) => {
  const navigation = useNavigation();
  const [editt, setEditt] = useState(true);
  const [text, setText] = useState("Profile Name");
  const { user, loading } = useUser();

  const edit = () => {
    setEditt(!editt);
  };

  const send = async () => {
    console.log("send");
    try {
      const id = user.id;
      const name = text;
      console.log("Before userUpdate call");
      const response = await userUpdate(id, name);
      console.log("After userUpdate call");
      console.log(response); // Log the response from the serv
    } catch (error) {
      console.log("Error caught: ", error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.settings2}>
        <View style={styles.settings1}>
          {editt ? (
            <Text style={styles.text}>{text}</Text>
          ) : (
            <TextInput
              placeholder="Profile Name"
              mode="flat"
              underlineColor="transparent"
              style={styles.text}
              value={text}
              textColor="white"
              onChangeText={(text) => setText(text)}
              right={
                <TextInput.Icon icon="send" color="white" onPress={send} />
              }
            />
          )}

          <IconButton
            size={20}
            icon={editt ? "pencil" : "check"} // Użyj "check" kiedy nie jesteśmy w trybie edycji
            iconColor="white"
            onPress={edit}
          />
        </View>
      </View>
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
    maxWidth: "90%",
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
    backgroundColor: "transparent",
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
    marginTop: 20,
    width: "100%",
    marginLeft: 20,
  },
});
