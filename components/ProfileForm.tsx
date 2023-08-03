import React, { useEffect, useState } from "react";
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
  const [text, setText] = useState("");
  const { user, loading } = useUser();
  const [name, setName] = useState(""); // Add a new state variable to hold the user's name
  const [textDescryption, setTextDescryption] = useState("");
  const [description, setDescription] = useState(""); // Add a new state variable to hold the user's name
  const [edittDescription, setEdittDescription] = useState(true);
  useEffect(() => {
    if (user) {
      // Set the initial name in the state when 'user' is available
      setName(user.name);
      setDescription(user.description);
    }
  }, [user]);

  const edit = () => {
    setEditt(!editt);
  };

  useEffect(() => {
    if (editt) {
      // Update the 'name' state when 'text' changes and we are in edit mode
      setName(text);
    }
  }, [text, editt]);

  useEffect(() => {
    if (edittDescription) {
      // Update the 'name' state when 'text' changes and we are in edit mode
      setDescription(textDescryption);
    }
  }, [textDescryption, edittDescription]);

  const send = async () => {
    console.log("send");
    try {
      const id = user.id;
      console.log("id: ", id);
      const name = text;
      console.log("Before userUpdate call");
      const response = await userUpdate(id, name, description);
      console.log("After userUpdate call");
      console.log(response); // Log the response from the serv
      setEditt(!editt);
    } catch (error) {
      console.log("Error caught: ", error);
    }
  };
  ////////////////////////////////////////////////////////////////////
  const editDescryption = () => {
    setEdittDescription(!edittDescription);
  };
  const sendDescryption = async () => {
    console.log("send");
    try {
      const id = user.id;
      console.log("id: ", id);
      const description = textDescryption;
      console.log("Before userUpdate call");
      const response = await userUpdate(id, text, description);
      console.log("After userUpdate call");
      console.log(response); // Log the response from the serv
      setEditt(!edittDescription);
    } catch (error) {
      console.log("Error caught: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.settings2}>
        <View style={styles.settings1}>
          {editt ? (
            <Text style={styles.text}>{name}</Text>
          ) : (
            <TextInput
              placeholder={name}
              placeholderTextColor={"white"}
              mode="flat"
              value={text}
              underlineColor="transparent"
              style={styles.text}
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
        <View style={styles.settings1}>
          {edittDescription ? ( //////////////////////////////////////////////
            <Text style={styles.text}>{description}</Text>
          ) : (
            <TextInput
              mode="flat"
              placeholder={description}
              placeholderTextColor={"white"}
              value={textDescryption}
              underlineColor="transparent"
              style={styles.text}
              textColor="white"
              onChangeText={(textDescryption) =>
                setTextDescryption(textDescryption)
              }
              right={
                <TextInput.Icon
                  icon="send"
                  color="white"
                  onPress={sendDescryption}
                />
              }
            />
          )}

          <IconButton
            size={20}
            icon={edittDescription ? "pencil" : "check"} // Użyj "check" kiedy nie jesteśmy w trybie edycji
            iconColor="white"
            onPress={editDescryption}
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
