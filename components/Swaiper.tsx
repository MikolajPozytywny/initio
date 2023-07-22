import React, { useEffect, useRef, useState } from "react";
import { View, ViewStyle, Image, ImageStyle, TextStyle } from "react-native";
import DeckSwiper from "react-native-deck-swiper";
import { IconButton } from "./IconButton";
import { SuperButton } from "./SuperButton";
import { userList } from "../api/user.api";
import { User } from "../types";
import { useUser } from "../utils/user-hook";
import { Text } from "react-native-paper";

interface Props {
  esa?: string;
}

export const Swaiper = (props: Props) => {
  const swiperRef = useRef<DeckSwiper<any>>(null);
  const curentUser = useUser();
  const [users, setUsers] = useState<User[] | null>(null);

  const fetchUserList = async () => {
    const response = await userList();
    setUsers(
      response
      // .filter((user) => curentUser.user.id !== user.id)
    );
  };

  useEffect(() => {
    fetchUserList();
  }, []);

  const onSwipedRight = () => {
    console.log("Match");
  };
  const onSwipedLeft = () => {
    console.log("Discard");
  };

  if (users === null) {
    return <Text>loading</Text>;
  }

  return (
    <View style={styles.container}>
      <DeckSwiper
        infinite
        ref={swiperRef}
        backgroundColor="transparent"
        cards={users}
        swipeAnimationDuration={155}
        cardStyle={{ height: "100%" }}
        keyExtractor={(card) => card.id}
        cardVerticalMargin={85}
        stackSeparation={0}
        disableTopSwipe
        disableBottomSwipe
        renderCard={(user) => (
          <View style={styles.card} key={user.id}>
            <Image source={{ uri: user.avatar_url }} style={styles.image} />
            <View style={styles.overlay}>
              <Text variant="displayMedium" style={styles.cardText}>
                {user.name}
              </Text>
            </View>
            <View style={styles.overlay}></View>
          </View>
        )}
        onSwipedRight={onSwipedRight}
        onSwipedLeft={onSwipedLeft}
      />
    </View>
  );
};

const styles: {
  container: ViewStyle;
  card: ViewStyle;
  image: ImageStyle;
  overlay: ViewStyle;
  cardText: TextStyle;
} = {
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  card: {
    flex: 1,
    justifyContent: "center",
    elevation: 4,
    borderRadius: 50,
    margin: 10,
    right: 205,
    top: -85,
  },
  image: {
    flex: 1,
    backgroundColor: "green",
    borderRadius: 50,
    maxHeight: "100%",
    width: 400,
    maxWidth: "100%",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    marginLeft: 20,
    marginBottom: 60,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    maxWidth: "100%",
    width: "100%",
  },
  cardText: {
    color: "white",
    fontFamily: "inter-bold",
    fontWeight: "bold",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    backgroundColor: "Blue",
  },
};

export default Swaiper;
