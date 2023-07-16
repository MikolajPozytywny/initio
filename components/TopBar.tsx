import React from 'react';
import { Image, StyleSheet, View } from "react-native";
import { IconButton } from "../components/IconButton";
import { useNavigation } from '@react-navigation/native';
import { user, messages, user2 } from "../utils/Mocks/Mock_1";

export const TopBar = () => {
  const navigation = useNavigation();

  const navigateToBack = () => {
    navigation.goBack();
  };

  return (

    
    <View style={styles.container}>
         <Image source={{ uri: user.avatarUrl }} style={styles.avatar} />
      <IconButton
        size={20}
        icon="back"
        iconButtonColor="white"
        isAntDesignActive={true}
        onPress={navigateToBack}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    maxWidth: "100%",  
      justifyContent: "space-between",
    // Add your styles here
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: "white",

  },
});
