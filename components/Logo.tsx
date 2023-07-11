import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { Image } from "react-native";

interface LogoProps {
  size?: number;
}

export const Logo = (props: LogoProps) => {
  const size = props.size || 100;

  // Add custom styles, originated from props (passed from parent to this component)
  const containerStyle = Object.freeze({
    width: size,
    height: size,
    // To make the image round.
    borderRadius: size / 2, // Poprawiony fragment
  });

  return (
    <View style={[styles.container, containerStyle]}>
      <Image
        style={styles.image}
        source={require("../assets/imagines/download.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Żeby obraz nie wychodził poza ekran / chował się w granicach kontenera.
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 2,
    borderWidth: 2,
    borderColor: "black",
    overflow: "hidden",
  },
});
