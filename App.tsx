import { PaperProvider } from "react-native-paper";
import React, { useEffect } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/login";
import HomeScreen from "./screens/home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";
import ReggisterScreen from "./screens/reggister";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useUser } from "./utils/user-hook";
import SettingsScreen from "./screens/settings";
import ProfileScreen from "./screens/profile";
import ChatScreen from "./screens/chat";
import ChatLobby from "./screens/chatLobby";
import ChatLobbyScreen from "./screens/chatLobby";
import { theme } from "./theme";
import EditProfileScreen from "./screens/editProfile";

const Stack = createNativeStackNavigator();

export default function App() {
  const { user, loading } = useUser();
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("./assets/fonts/Inter-Black.ttf"),
  });

  if (!fontsLoaded || loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={42} />
      </View>
    );
  }

  // If the user is null (not logged in), we show the LoginScreen, otherwise we show the HomeScreen
  const initialRoute = user !== null ? "Home" : "Login";

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={initialRoute}
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Reggister" component={ReggisterScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Chat" component={ChatScreen} />
          <Stack.Screen name="ChatLobby" component={ChatLobbyScreen} />
          <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
