import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Logo } from "./Logo";
import { IconButton, TextInput, Text } from "react-native-paper";
import { userUpdate } from "../api/api";
import { useUser } from "../utils/user-hook";

interface Props {}
export const ProfileForm = (props: Props) => {
  const navigation = useNavigation();
  const [editt, setEditt] = useState(true);
  const [text, setText] = useState("");
  const { user, loading } = useUser();
  const [name, setName] = useState(""); // Add a new state variable to hold the user's name
  const [avatar_url, setAvatar_url] = useState(""); // Add a new state variable to hold the user's name
  const [textDescryption, setTextDescryption] = useState("");
  const [description, setDescription] = useState(""); // Add a new state variable to hold the user's name
  const [edittDescription, setEdittDescription] = useState(true);

  useEffect(() => {
    if (user) {
      // Set the initial name in the state when 'user' is available
      setName(user.name);
      setDescription(user.description);
      setAvatar_url(user.avatar_url);
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
      console.log("name: ", user.name);
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
      console.log("iddddddddd: ", id);
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
      <Image source={{ uri: avatar_url }} style={styles.avatar} />
      <View style={styles.settings2}>
        <Text style={styles.miniText} variant="bodySmall">
          {" "}
          Description{" "}
        </Text>
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
      </View>
      <View style={styles.settings2}>
        <Text style={styles.miniText}>Description </Text>
        <View style={styles.settings4}>
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
  settings4: {
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
    paddingBottom: 10,
  },
  text: {
    color: "white",
    maxWidth: "75%",
    width: "100%",
    backgroundColor: "transparent",
    fontSize: 16,
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
    borderRadius: 20,
    marginTop: 20,
    paddingHorizontal: 5,
    paddingBottom: 5,
    paddingTop: 2,
  },
  TopBar: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: 20,
    width: "100%",
    marginLeft: 20,
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 200,
    borderColor: "white",
    borderWidth: 2,
    margin: 10,
    backgroundColor: "white",
  },
  miniText: {
    color: "white",
    fontSize: 16,
    width: "100%",
    backgroundColor: "transparent",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});
