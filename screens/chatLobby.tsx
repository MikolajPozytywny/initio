import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NewChat } from "../components/newChat";
import { TopBar } from "../components/TopBar";

import { User } from "../types";
import { userList, userInfo } from "../api/api";
import { ActivityIndicator, MD2Colors, Text } from "react-native-paper";
import { useUser } from "../utils/user-hook";

interface ChatLobbyProps {
  onPress: () => void;
  contacts: string[];
}
const ChatLobbyScreen = () => {
  const navigation = useNavigation();
  const { user, loading: userLoading } = useUser();
  const [contactUsers, setContactUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false); // Set initial loading state to false

  const fetchData = async () => {
    try {
      setLoading(true); // Set loading to true before fetching data

      const contactUsersData = await Promise.all(
        user?.contacts.map(async (userId) => {
          const userInfoResponse = await userInfo(userId);
          return userInfoResponse;
        })
      );

      setContactUsers(contactUsersData);
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error("Error fetching users:", error);
      setLoading(false); // Set loading to false if an error occurs
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
      <ScrollView>
        <View style={styles.chat}>
          {loading ? (
            <ActivityIndicator
              animating={true}
              color={MD2Colors.red800}
              size={"large"}
            />
          ) : contactUsers.length === 0 ? (
            <Text style={styles.Text}>
              {user && user.contacts.length === 0
                ? "Match with users to start a conversation"
                : ""}
            </Text>
          ) : (
            contactUsers.map((contact) => (
              <NewChat
                key={contact.id}
                id={contact.id}
                name={contact.name}
                avatarUrl={contact.avatar_url}
                conversationId={user?.contacts}
              />
            ))
          )}
        </View>
      </ScrollView>
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
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "100%",
    width: "100%",
  },
  Text: {
    flex: 1,
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
  },
});

export default ChatLobbyScreen;
