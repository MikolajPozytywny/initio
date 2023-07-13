import React, { useRef, useState } from "react";
import { View, ViewStyle, Image, ImageStyle } from "react-native";
import DeckSwiper from "react-native-deck-swiper";

interface Props {}

export const Swaiper = (props: Props) => {
  const swiperRef = useRef<DeckSwiper<any>>(null);
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);

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

  const onSwiped = (cardIndex: number) => {
    setActiveCardIndex(cardIndex);
  };

  return (
    <DeckSwiper
      infinite
      ref={swiperRef}
      backgroundColor="transparent"
      cards={data}
      cardIndex={activeCardIndex}
      swipeAnimationDuration={155}
      cardStyle={{ height: "80%" }}
      keyExtractor={(card) => card.id}
      renderCard={(card) => (
        <View style={styles.card} key={card.id}>
          <Image source={card.image} style={styles.image} />
        </View>
      )}
      onSwipedRight={onSwiped}
      onSwipedLeft={onSwiped}
    />
  );
};

const styles: {
  card: ViewStyle;
  image: ImageStyle;
} = {
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    // padding: 16,
    elevation: 2,
    borderRadius: 50,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 50,
  },
};
