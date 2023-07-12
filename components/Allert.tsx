import Reakt from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

interface Props {
  Allart: string;
}

export const Allert = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.alertBox}>
        <Text style={styles.alertText}>Error : {props.Allart}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  alertBox: {
    backgroundColor: "red",
    padding: 20,
    borderRadius: 10,
  },
  alertText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
