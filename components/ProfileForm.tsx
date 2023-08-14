import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Button, Text } from "react-native-paper";
import { userInfo } from "../api/api"; // Usuwamy userUpdate i useUser
import { useUser } from "../utils/user-hook";
import { makeTranslations } from "../react-littera";
import { useFocusEffect } from "@react-navigation/native";

export const ProfileForm = () => {
  const [name, setName] = useState("");
  const [avatar_url, setAvatar_url] = useState("");
  const [description, setDescription] = useState("");
  const [userId, setUserId] = useState("");
  const { user, loading } = useUser();
  const useTrans = makeTranslations({});
  const translated = useTrans();

  const handleUpdate = async () => {
    try {
      const updatedUserData = await userInfo(user.id);

      setName(updatedUserData.name);
      setDescription(updatedUserData.description);
      setAvatar_url(updatedUserData.avatar_url);
    } catch (error) {
      console.error("Error updating user info:", error);
    }
  };

  useEffect(() => {
    handleUpdate();
  }, [handleUpdate, user]);

  useFocusEffect(
    React.useCallback(() => {
      handleUpdate();
    }, [])
  );

  return (
    <View style={styles.container}>
      <Image source={{ uri: avatar_url }} style={styles.avatar} />
      <View style={styles.settings2}>
        <Text style={styles.text2}>{translated.login}</Text>
        <View style={styles.settings}>
          <Text style={styles.text}>{name}</Text>
        </View>
      </View>
      <View style={styles.settings2}>
        <Text style={styles.text2}>{translated.description}</Text>
        <View style={styles.settings}>
          <Text style={styles.text}>{description}</Text>
        </View>
        {/* Dodaj przycisk Update tutaj, jeśli chcesz zachować istniejącą funkcjonalność */}
      </View>
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
    width: "90%",
    flexDirection: "row",
    color: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    maxWidth: "75%",
    width: "100%",
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
    borderColor: "#454444",
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
