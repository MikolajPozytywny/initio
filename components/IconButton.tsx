import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import { View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { isPropertySignature } from "typescript";
import { AntDesign } from "@expo/vector-icons";

interface Props {
  onPress: () => void;
  icon: string;
  isAntDesignActive: boolean;
  iconButtonColor: string;
}
export const IconButton = (props: Props) => {
  const onPressFunction = () => {
    props.onPress();
  };
  return (
    <Pressable style={[styles.container]} onPress={onPressFunction}>
      {props.isAntDesignActive ? (
        <AntDesign
          name={props.icon as any}
          size={32}
          color={props.iconButtonColor}
        />
      ) : (
        <Ionicons name={props.icon as any} size={32} color="green" />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {},
});
