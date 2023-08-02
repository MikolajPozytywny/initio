import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NewChat } from "../components/newChat";
import { TopBar } from "../components/TopBar";

import { User } from "../types";
import { userList, userInfo } from "../api/api";
import { Text } from "react-native-paper";
import { useUser } from "../utils/user-hook";

interface ChatLobbyProps {
  onPress: () => void;
  contacts: string[];
}

const ChatLobbyScreen = () => {
  const navigation = useNavigation();
  const { user, loading } = useUser();
  const [contactUsers, setContactUsers] = useState<User[]>([]);

  const fetchData = async () => {
    try {
      // Pobierz informacje dla każdego kontaktu i zaktualizuj stan
      const contactUsersData = await Promise.all(
        user?.contacts.map(async (userId) => {
          console.log("userId", userInfo);
          const userInfoResponse = await userInfo(userId);
          return userInfoResponse;
        })
      );
      console.log("contactUsersData", contactUsersData);

      setContactUsers(contactUsersData); // Zakładając, że userInfo() zwraca obiekt typu User
      // Zrób coś z contactUsers, jeśli potrzebujesz
    } catch (error) {
      console.error("Błąd podczas pobierania użytkowników:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [user?.id]);
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TopBar />
      </View>
      <View style={styles.chat}>
        {contactUsers.map((contact) => (
          <NewChat
            key={contact.id}
            id={contact.id}
            name={contact.name}
            avatarUrl={contact.avatar_url}
            conversationId={user?.contacts}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#241E24",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    maxWidth: "100%",
  },
  topBar: {
    paddingTop: 20,
    paddingHorizontal: 20,
    maxWidth: "100%",
    width: "100%",
  },
  chat: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    maxWidth: "100%",
    width: "100%",
  },
});

export default ChatLobbyScreen;
