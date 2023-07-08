import React from "react";
import { Text } from "react-native";

export const SuperButton = (props: { myColor: string }) => {
  return <Text style={{ color: props.myColor }}>My number:</Text>;
};
