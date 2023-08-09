import React, { useEffect, useRef, useState } from "react";
import { View, ViewStyle, Image, ImageStyle, TextStyle } from "react-native";
import DeckSwiper from "react-native-deck-swiper";
import { IconButton } from "./IconButton";
import { SuperButton } from "./SuperButton";
import { userList, matchesCheck, matchesCreate } from "../api/api";
import { User } from "../types";
import { useUser } from "../utils/user-hook";
import { Text } from "react-native-paper";
import { auth } from "../fireBaseConfig";
import { useNavigation } from "@react-navigation/native";
import { Slider1 } from "./Slider";
import { set } from "firebase/database";
import { SwaiperBottomBar } from "./SwaiperBottomBar";

interface Props {
  esa?: string;
}

export const Swaiper = (props: Props) => {
  const swiperRef = useRef<DeckSwiper<any>>(null);
  const [users, setUsers] = useState<User[] | null>(null);
  const navigation = useNavigation();
  const [dupa, setDupa] = useState<number>(0);
  const fetchUserList = async () => {
    const response = await userList();
    console.log("User list", response);
    setUsers(
      response?.filter((user) => {
        return auth.currentUser?.uid !== user?.id;
      })
    );
  };
  useEffect(() => {
    if (auth.currentUser?.uid) fetchUserList();
  }, [auth.currentUser?.uid]);

  const fetchMatchCheck = async (targetId) => {
    // Check if 'users' is not empty before proceeding
    if (users && users.length > 0) {
      const response = await matchesCheck(targetId);
      console.log("matches-check", response.matched);
      if (response.matched) {
        console.log("Matched");
        //todo: add success message
      } else {
        console.log("Not Matched");
        await CreateMatch(targetId);
      }
      console.log(users[0]?.contacts);
    }
  };
  const CreateMatch = async (targetId: string) => {
    const response = await matchesCreate(targetId);
    console.log("matches-check", response);
  };

  const onSwipedRight = (userIndex: number) => {
    console.log("Match");
    fetchMatchCheck(users[userIndex + 1]?.id);

    setDupa(dupa + 1);
  };

  const onSwipedLeft = (userIndex: number) => {
    console.log("Discard");
    fetchMatchCheck(users[userIndex]?.id);

    setDupa(dupa + 1);
  };

  if (users === null) {
    return <Text>loading</Text>;
  }

  return (
    <View style={styles.container}>
      <DeckSwiper
        ref={swiperRef}
        backgroundColor="transparent"
        cards={users || []}
        swipeAnimationDuration={155}
        cardStyle={{ height: "100%" }}
        keyExtractor={(card) => card?.id}
        cardVerticalMargin={85}
        cardHorizontalMargin={20}
        stackSeparation={0}
        disableTopSwipe
        disableBottomSwipe
        overlayLabels={{
          left: {
            title: "NOPE",
            style: {
              label: {
                borderColor: "#E5000E",
                borderRadius: 20,
                color: "#E5000E",
                borderWidth: 5,
                fontSize: 75,
                transform: [{ rotate: "45deg" }], // Obrót tekstu o 180 stopni
              },
              wrapper: {
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                marginTop: 10,
                marginRight: 100,
              },
            },
          },

          right: {
            title: "LIKE",
            style: {
              label: {
                borderColor: "#22FC0D",
                borderRadius: 20,
                color: "#22FC0D",
                borderWidth: 5,
                fontSize: 75,
                transform: [{ rotate: "-45deg" }], // Obrót tekstu o 180 stopni
              },
              wrapper: {
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                marginTop: 10,
                marginLeft: 10,
              },
            },
          },
        }}
        animateOverlayLabelsOpacity
        animateCardOpacity
        renderCard={(user) => (
          <View style={styles.card} key={user?.id}>
            <Image source={{ uri: user?.avatar_url }} style={styles.image} />
            <View style={styles.overlay}>
              <Text variant="displayMedium" style={styles.cardText}>
                {user?.name}
              </Text>
            </View>
            <View style={styles.overlay}></View>
          </View>
        )}
        onSwipedRight={onSwipedRight}
        onSwipedLeft={onSwipedLeft}
      />
      <View style={styles.bottomBar}>
        <SwaiperBottomBar />
      </View>
      <View style={styles.Slider}>
        <Slider1
          name={users[dupa]?.description || ""}
          onSlideUp={console.log}
        />
      </View>
    </View>
  );
};

const styles: {
  container: ViewStyle;
  card: ViewStyle;
  image: ImageStyle;
  overlay: ViewStyle;
  cardText: TextStyle;
  Slider: ViewStyle;
  bottomBar: ViewStyle;
} = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "100%",
  },
  card: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    margin: 10,
    right: 27,
    top: -85,
    width: "95%",
  },
  image: {
    backgroundColor: "transparent",
    borderRadius: 50,
    height: "100%",
    width: "100%",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    marginLeft: 20,
    marginBottom: 20,
    justifyContent: "flex-end",
    alignItems: "flex-start",
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
  Slider: {
    position: "absolute",
    justifyContent: "flex-start",
    left: 0,
    bottom: -230,
    maxWidth: "110%",
    width: "100%",
    maxHeight: "100%",
  },
  bottomBar: {
    alignItems: "center",
    justifyContent: "center",
    left: 0,
    right: 0,
    top: 295,
  },
};

export default Swaiper;
