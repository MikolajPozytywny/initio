import { HomeScreen } from "./screen/HomeScreen";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "EC434D",
    alignItems: "center",
    justifyContent: "center",
  },
});
