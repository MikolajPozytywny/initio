import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SuperButton } from "../components/SuperButton";
import { IconButtonProps } from "react-native-paper";

import { Appbar } from "react-native-paper";
import Icon from "react-native-paper/lib/typescript/src/components/Icon";
import { FiltersComponent } from "../components/Filterscomponent";

interface Props {}

const FiltersSccreen = () => {
  const navigation = useNavigation();

  const navigateToBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <FiltersComponent />
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
});

export default FiltersSccreen;
