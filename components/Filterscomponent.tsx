import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { userInfo, userUpdate } from "../api/api";
import { useUser } from "../utils/user-hook";
import { FiltersCard } from "./FiltersCard";

interface FiltersComponentProps {}

export const FiltersComponent: React.FC<FiltersComponentProps> = ({}) => {
  const [filters, setFilters] = useState<string[]>([]);
  const { user, loading } = useUser();
  const [dupa, setDupa] = useState<number>(1);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <View style={styles.cards}>
          <FiltersCard filter="ALL" icon="star" background="purple" />
          <FiltersCard filter="HEJKA" icon="menu" background="green" />
          <FiltersCard filter="3" icon="star" background="blue" />
          <FiltersCard filter="4" icon="star" background="pink" />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#241E24",
    justifyContent: "center",
    alignItems: "center",
  },
  cards: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
});
