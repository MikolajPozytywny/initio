import React from 'react';
import { Image, StyleSheet, View } from "react-native";
import { IconButton } from "../components/IconButton";
import { useNavigation } from '@react-navigation/native';
import { user, messages, user2 } from "../utils/Mocks/Mock_1";
import { Appbar } from 'react-native-paper';

export const SwaiperTopBar = () => {
  const navigation = useNavigation();


  
  
    const _handleSettings = () =>  navigation.navigate("Settings" as never);
  
    const _handleSearch = () =>  navigation.navigate("Profile" as never);


    return (
        <Appbar.Header style={styles.container}>
          <Appbar.Action
            icon="account-circle"
            onPress={_handleSearch}
            color="white"
            size={40}
            style={styles.actionLeft}
          />
          <Appbar.Action
            icon="cog-outline"
            onPress={_handleSettings}
            color="white"
            size={40}
            style={styles.actionRight}
          />
        </Appbar.Header>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        backgroundColor: "transparent",
        color: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 16,
      marginBottom: 20,
        width: "100%",
      },
      actionLeft: {
        marginRight: "auto",
      },
      actionRight: {
        marginLeft: "auto",
      },  });

