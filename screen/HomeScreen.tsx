import React from "react";
import { SuperButton } from "../components/SuperButton";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import MultilineTextInputExample from "../components/SuperTextInput";

export const HomeScreen = () => {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../assets/fonts/Inter-Black.ttf"),
  });
  const [myNumber, setMyNumber] = useState(0);
  const onPressLearnMore = () => {
    setMyNumber(myNumber + 2);
    console.log(myNumber);
  };
  const mruio = () => {
    setMyNumber(myNumber - 2);
    console.log(myNumber);
  };
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text>My number: {myNumber}</Text>
      <View style={{ marginVertical: 20 }}>
        <SuperButton
          onPress={onPressLearnMore}
          title="E-Mail"
          strona="left"
          myColor="white"
          czcionka="Inter-Black"
          size={30} // Dodaj tę właściwość, aby zmienić rozmiar napisu
        />
      </View>

      <View style={{ marginVertical: 20 }}>
        <SuperButton
          onPress={mruio}
          title="click me"
          strona="left"
          myColor="#2a5"
          czcionka="Inter-Black"
          size={16} // Dodaj tę właściwość, aby zmienić rozmiar napisu
        />
      </View>
      <View style={{ marginVertical: 20 }}>
        <SuperButton
          myColor="#5a9"
          title="dupa 1"
          strona="left"
          czcionka="Inter-Black"
          size={16} // Dodaj tę właściwość, aby zmienić rozmiar napisu
        />
      </View>
      <View style={{ marginVertical: 20 }}>
        <SuperButton
          myColor="#7c9"
          title="dupa 2"
          strona="left"
          czcionka="Inter-Black"
          size={16} // Dodaj tę właściwość, aby zmienić rozmiar napisu
        />
      </View>
      <View style={{ marginVertical: 20 }}>
        <SuperButton
          myColor="#2a9"
          strona="left"
          title="dupa 3"
          czcionka="Inter-Black"
          size={16} // Dodaj tę właściwość, aby zmienić rozmiar napisu
        />
      </View>
      <MultilineTextInputExample what="E-Mail" />
      <MultilineTextInputExample what="password" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text: {
    color: "#bd0000",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#000",
    borderBottomWidth: 5,
  },
});
