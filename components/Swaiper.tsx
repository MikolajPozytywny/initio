import React, { useRef, useState } from "react";
import { View, ViewStyle, Image, ImageStyle } from "react-native";
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
      image: require("../assets/imagines/comment_HCmrufpGblqbggdnwX9UQBO42mWtUyxG.gif"),
    },
    {
      id: 5,
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
        cardStyle={{ height: "100%", maxwidth: "70%" }}
        keyExtractor={(card) => card.id}
        renderCard={(card) => (
          <View style={styles.card} key={card.id}>
            <Image source={card.image} style={styles.image} />
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
} = {
  container: {
    flex: 1,

    justifyContent: "flex-start",
    alignItems: "flex-start",
    maxHeight: "100%",
    width: 100,
  },
  card: {
    flex: 1,
    justifyContent: "center",
    elevation: 4,
    borderRadius: 50,
    maxWidth: "100%",
    margin: 10,
    right: 155,
    top: -60,
  },
  image: {
    flex: 1,
    backgroundColor: "green",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 50,
    maxHeight: "100%",
  },
};

export default Swaiper;
