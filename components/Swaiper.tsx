import React, { useRef, useState } from "react";
import {
  View,
  ViewStyle,
  Image,
  ImageStyle,
  Text,
  TextStyle,
} from "react-native";
import DeckSwiper from "react-native-deck-swiper";
import { IconButton } from "./IconButton";
import { SuperButton } from "./SuperButton";

interface Props {
  esa?: string;
}

export const Swaiper = (props: Props) => {
  const swiperRef = useRef<DeckSwiper<any>>(null);

  const data = [
    { id: 1, image: require("../assets/imagines/download.png") },
    { id: 2, image: require("../assets/imagines/essa.jpg") },
    {
      id: 3,
      image: require("../assets/imagines/123436278_351097649321786_8786909236462977611_n(2).jpg"),
    },

    {
      id: 4,
      image: require("../assets/imagines/356963203_226368263125523_3845061014848158639_n.jpg"),
    },
  ];

  const onSwipedRight = () => {
    console.log("Match");
  };
  const onSwipedLeft = () => {
    console.log("Discard");
  };

  return (
    <View style={styles.container}>
      <DeckSwiper
        infinite
        ref={swiperRef}
        backgroundColor="transparent"
        cards={data}
        swipeAnimationDuration={155}
        cardStyle={{ height: "100%" }}
        keyExtractor={(card) => card.id}
        cardVerticalMargin={85}
        stackSeparation={0}
        disableTopSwipe
        disableBottomSwipe
        renderCard={(card) => (
          <View style={styles.card} key={card.id}>
            <Image source={card.image} style={styles.image} />
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
    maxHeight: "100%",
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end",
    alignItems: "center",
    maxWidth: "100%",
  },
  cardText: {
    color: "white",
  },
};

export default Swaiper;
