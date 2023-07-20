import React from 'react';
import { Image, StyleSheet, View } from "react-native";
import { IconButton } from "../components/IconButton";
import { useNavigation, useRoute } from '@react-navigation/native';
import { user, messages, user2 } from "../utils/Mocks/Mock_1";
import { Appbar } from 'react-native-paper';

export const TopBar = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const _goBack = () => navigation.goBack();
  const _handleSettings = () => navigation.navigate("Settings" as never);;
  const _handleSearch = () => console.log('Shown more');

  return ( 
    <Appbar.Header style={styles.container} >
      <Appbar.BackAction onPress={_goBack} color='white'  />
      <Appbar.Content title={route.name} color='white'/>
      <Appbar.Action icon="magnify" onPress={_handleSearch} color='white'/>
      <Appbar.Action icon="cog-outline" onPress={_handleSettings} color='white'  />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    color: "white",
    // Add your styles here
  },
});
