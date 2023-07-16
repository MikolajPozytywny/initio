import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import { View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { isPropertySignature } from "typescript";
import { AntDesign } from "@expo/vector-icons";

interface Props {
  onPress?: () => void;
  icon: string;
  isAntDesignActive: boolean;
  iconButtonColor: string;
  backgroundColor?: string;
  padding?: number;
  borderRadius?: number;
  size: number;
  cyrcle?: string;
}
export const IconButton = (props: Props) => {
  const onPressFunction = () => {
    props.onPress();
  };
  return (
    <Pressable
      style={[styles.container, { backgroundColor: props.cyrcle, borderRadius: props.borderRadius}]}
      onPress={onPressFunction}
    >
      {props.isAntDesignActive ? (
        <AntDesign
          name={props.icon as any}
          size={props.size}
          color={props.iconButtonColor}
        />
      ) : (
        <Ionicons
          name={props.icon as any}
          size={props.size}
          color={props.iconButtonColor}
        />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
