import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Animated,
  ScrollView,
} from "react-native";
import { IconButton } from "react-native-paper";

interface SlideUpComponentProps {
  onSlideUp: () => void; // Funkcja wywoływana po wysunięciu komponentu
  name?: string;
  mrunio2?: number;
}

export const Slider1: React.FC<SlideUpComponentProps> = ({
  onSlideUp,
  mrunio2,
  name,
}) => {
  const slideAnim = useRef(new Animated.Value(0)).current;
  const [mrunio, setMrunio] = useState(1);

  const handleSlideUp = () => {
    if (mrunio == 1) {
      console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", name);
      Animated.timing(slideAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setMrunio(0);
      });
      return;
    }
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setMrunio(1);
    });
  };
  console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", name);

  useEffect(() => {
    if (mrunio2 === 1) {
      handleSlideUp();
      // Reset mrunio2 to a different value to avoid triggering this effect again
      // until mrunio2 becomes 2 again.
    }
  }, [mrunio2]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.slideUpContainer,
          {
            transform: [
              {
                translateY: slideAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [800, 0],
                }),
              },
            ],
          },
        ]}
      >
        <ScrollView style={styles.TouchableConteiner}>
          <View style={[styles.blueBackground]}>
            {mrunio === 0 && (
              <IconButton
                icon="arrow-down"
                iconColor="white"
                size={30}
                onPress={handleSlideUp}
              />
            )}
          </View>
          <Text style={styles.slideUpText}>{name}</Text>
        </ScrollView>
      </Animated.View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: "absolute",

    width: "95%",
    justifyContent: "center",
    alignItems: "center",
  },
  slideUpContainer: {
    borderRadius: 20,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 800,
    backgroundColor: "#424242",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    maxHeight: "100%",
  },
  slideUpText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    color: "#B8B8B8",
  },
  blueBackground: {
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  TouchableConteiner: {
    width: "100%",
    marginVertical: 10,
    paddingHorizontal: 20,
  },
});
