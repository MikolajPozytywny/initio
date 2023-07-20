import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface Props {
  height: number;
  width: any;
  maxWidht: any;
  
}

export const SuperButton = (props) => {
  const onPressFunction = () => {
    props.onPress && props.onPress(); // call onPress only if it was passed to props of the component.
  };

  return (
    <View style={[ { height: props.height, width: props.width, maxWidth: props.maxWidth }]}>
    <Pressable
      style={[styles.container]}
      onPress={onPressFunction}
    >
      <Text
        style={[
          {
            color: props.myColor,
            textAlign: props.strona,
            fontSize: props.size,
            // fontFamily: props.czcionka,
            fontWeight: props.weight,
            fontStyle: props.style,
            backgroundColor: props.bgColor,
          },
        ]}
      >
        {props.title}
      </Text>
    </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingRight: 100,
    paddingLeft: 10,
    elevation: 0, // Decreased elevation
    backgroundColor:"#454444"

  },
  buttonText: {
    fontSize: 16, // Default font size
  },
});