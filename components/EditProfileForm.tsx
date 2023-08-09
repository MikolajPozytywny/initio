import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, Touchable, Pressable } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { userUpdate } from "../api/api";
import { useUser } from "../utils/user-hook";
import * as ImagePicker from "expo-image-picker";

export const EditProfileForm = () => {
  const { user } = useUser();
  const [name, setName] = useState("");
  const [avatar_url, setAvatar_url] = useState("");
  const [description, setDescription] = useState("");
  const [editt, setEditt] = useState(true);
  const [text, setText] = useState("");
  const [textDescryption, setTextDescryption] = useState("");
  const [edittDescription, setEdittDescription] = useState(true);
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setDescription(user.description);
      setAvatar_url(user.avatar_url);
    }
  }, [user]);

  const send = async () => {
    console.log("send");
    try {
      const id = user.id;
      console.log("id: ", id);
      console.log("name: ", user.name);
      const avatar_url = image;
      const name = text;
      console.log("Before userUpdate call");
      const response = await userUpdate(id, name, description, avatar_url);
      console.log("After userUpdate call");
      console.log(response); // Log the response from the serv
      setEditt(!editt);
    } catch (error) {
      console.log("Error caught: ", error);
    }
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    setAvatar_url(image);
    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setAvatar_url(result.assets[0].uri);
    }
  };
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", justifyContent: "flex-start" }}>
        <Pressable onPress={pickImage}>
          {avatar_url && (
            <Image
              source={{ uri: avatar_url }}
              style={{
                width: 200,
                height: 200,
                borderRadius: 200,
                borderWidth: 2,
                borderColor: "#454444",
              }}
            />
          )}
        </Pressable>
      </View>
      <View style={styles.settings2}>
        <Text style={styles.text2}>name</Text>
        <View style={styles.settings}>
          <TextInput
            mode="flat"
            value={name} // Use the name state variable
            underlineColor="transparent"
            style={styles.text}
            maxLength={20}
            multiline={true}
            textColor="white"
            onChangeText={(text) => {
              setName(text), setText(text);
            }} // Corrected: Use setName instead of setText
          />
        </View>
      </View>
      <View style={styles.settings2}>
        <Text style={styles.text2}>description</Text>
        <View style={styles.settings}>
          <TextInput
            placeholderTextColor={"white"}
            value={description}
            underlineColor="transparent"
            style={styles.text}
            textColor="white"
            multiline={true}
            onChangeText={(textDescryption) => {
              setTextDescryption(textDescryption),
                setDescription(textDescryption);
            }}
          />
        </View>
      </View>
      <Button mode="contained" onPress={send}>
        Save
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#241E24",
  },
  settings: {
    borderColor: "Dark",
    elevation: 0,
    backgroundColor: "#454444",
    width: "100%",
    flexDirection: "row",
    color: "white",
    borderRadius: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: "auto",
  },
  text: {
    color: "white",
    width: "70%",
    backgroundColor: "transparent",
    fontSize: 16,
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 200,
    borderWidth: 2,
    margin: 10,
    backgroundColor: "white",
  },
  settings2: {
    marginTop: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#2B2A2A",
    paddingHorizontal: 7,
    paddingBottom: 7,
    borderRadius: 10,
  },
  text2: {
    color: "white",
    fontSize: 20,
  },
});
