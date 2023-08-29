import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useUser } from "../utils/user-hook";
import { userInfo, userUpdate } from "../api/api";
import { IconButton } from "react-native-paper";

interface Props {
  filter: string;
  icon: string;
  background: string;
}

export const FiltersCard: React.FC<Props> = ({ filter, icon, background }) => {
  const { user } = useUser();
  const [isFilterActive, setIsFilterActive] = useState<boolean>(false);

  useEffect(() => {
    async function fetchUserData() {
      if (user && user.id) {
        const response = await userInfo(user.id);
        setIsFilterActive(response.filters.includes(filter));
      }
    }

    fetchUserData();
  }, [filter, user]);

  const toggleFilter = async () => {
    if (user && user.id) {
      const response = await userInfo(user.id);
      const updatedFilters = response.filters.includes(filter)
        ? response.filters.filter((f) => f !== filter)
        : [...response.filters, filter];

      await updateUserFilters(updatedFilters);
      setIsFilterActive(!isFilterActive);

      // Wyemituj sygnał po zmianie filtru
    }
  };

  const updateUserFilters = async (updatedFilters: string[]) => {
    if (user && user.id) {
      const { id, avatar_url, name, description } = user;

      try {
        const response = await userUpdate(
          id,
          name,
          description,
          avatar_url,
          updatedFilters
        );
        console.log(response);
      } catch (error) {
        console.log("Error caught: ", error);
      }
    }
  };

  return (
    <View
      style={[
        styles.card,
        { backgroundColor: isFilterActive ? background : "gray" },
      ]}
    >
      <IconButton
        icon={icon}
        iconColor="white"
        size={150}
        style={styles.icon}
        onPress={toggleFilter}
      />
      <Text style={styles.all} onPress={toggleFilter}>
        {filter}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "red",
    borderRadius: 20,
    width: 175,
    margin: 15,
    height: 175,
  },
  all: {
    color: "white",
    position: "absolute",
    fontSize: 30,
    fontFamily: "inter-bold",
    fontWeight: "bold",
  },
  icon: { marginBottom: 20 },
});
