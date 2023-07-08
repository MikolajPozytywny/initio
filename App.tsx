import { SuperButton } from "./components/SuperButton";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [myNumber, setMyNumber] = useState(0);
  const onPressLearnMore = (e: any) => {
    setMyNumber(myNumber + 2);
    console.log(myNumber);
  };
  const mruio = (e: any) => {
    setMyNumber(myNumber - 2);
    console.log(myNumber);
  };

  return (
    <View style={styles.container}>
      <Text>My number: {myNumber}</Text>
      <Button onPress={onPressLearnMore} title="click me" color="#2a5" />
      <Button onPress={mruio} title="click me" color="#2a5" />
      <SuperButton myColor="#5a9" />
      <SuperButton myColor="#7c9" />
      <SuperButton myColor="#2a9" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9c6",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#bd0000",
  },
});
