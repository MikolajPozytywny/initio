import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { Image } from "react-native";
import { Avatar } from "react-native-paper";

interface LogoProps {
}

export const Logo = (props: LogoProps) => {



  return (

  
 
  <Avatar.Image size={300} source={require("../assets/imagines/download.png")} />
    
  );
};

const styles = StyleSheet.create({
  container: {
    // Żeby obraz nie wychodził poza ekran / chował się w granicach kontenera.
    overflow: "hidden",
  },



});
