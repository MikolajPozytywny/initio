import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";
import { IconButton } from "react-native-paper";
import { useUser } from "../utils/user-hook";
import { User } from "../types";

interface SlideUpComponentProps {
  onSlideUp: () => void; // Funkcja wywoływana po wysunięciu komponentu
}

export const Slider1: React.FC<SlideUpComponentProps> = ({ onSlideUp }) => {
  const [slideAnim] = useState(new Animated.Value(0)); // Początkowa wartość animacji
  const { user, loading } = useUser();

  const [mrunio, setMrunio] = useState(1);
  const handleSlideUp = () => {
    if (mrunio == 1) {
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

  return (
    <TouchableOpacity style={styles.container}>
      <Animated.View
        style={[
          styles.slideUpContainer,
          {
            transform: [
              {
                translateY: slideAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [400, 0],
                }),
              },
            ],
          },
        ]}
      >
        <TouchableOpacity
          style={styles.TouchableConteiner}
          onPress={mrunio === 1 ? handleSlideUp : undefined}
        >
          <View style={[styles.blueBackground]}>
            {mrunio == 0 && (
              <IconButton
                icon="down"
                iconColor="white"
                size={30}
                onPress={handleSlideUp}
              />
            )}
          </View>
          <Text style={styles.slideUpText}>{user?.description} aaaalele</Text>
        </TouchableOpacity>
      </Animated.View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: -40,
    width: "90%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  slideUpContainer: {
    borderRadius: 20,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 600,
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
    textAlign: "right",
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
