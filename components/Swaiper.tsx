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
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage

interface Props {
  esa?: string;
}

export const Swaiper = (props: Props) => {
  const swiperRef = useRef<DeckSwiper<any>>(null);
  const [users, setUsers] = useState<User[] | null>(null);
  const navigation = useNavigation();
  const [person, setPerson] = useState<number>(0);
  const [swipedUsers, setSwipedUsers] = useState<string[]>([]);
  const [userIndex, setUserIndex] = useState(0);
  const [haloLogged, setHaloLogged] = useState(false); // Dodaj ten stan

  const fetchUserList = async () => {
    const response = await userList();

    const swipedUsersList = await getSwipedUsers(); // Pobierz listę przesuniętych użytkowników

    const filteredUsers = response?.filter((user) => {
      return (
        auth.currentUser?.uid !== user?.id &&
        !swipedUsersList.includes(user?.id) // Użyj tutaj swipedUsersList
      );
    });

    console.log("User list", filteredUsers);
    setUsers(filteredUsers);
  };

  useEffect(() => {
    if (auth.currentUser?.uid) fetchUserList();
  }, [auth.currentUser?.uid]);

  const clearSwipedUsers = async () => {
    try {
      await AsyncStorage.removeItem("swipedUsers");
      console.log("Usunięto zapisanych użytkowników z bazy danych.");
    } catch (error) {
      console.error("Błąd podczas usuwania zapisanych użytkowników:", error);
    }
  };

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
  const displaySwipedUsers = async () => {
    try {
      const swipedUsersList = await getSwipedUsers();
      setSwipedUsers(swipedUsersList); // Use setSwipedUsers, not setSwipedUser
      console.log("Zapisani użytkownicy:", swipedUsersList);
    } catch (error) {
      console.error("Błąd wyświetlania zapisanych użytkowników:", error);
    }
  };
  const onSwipedRight = (userIndex: number) => {
    const swipedUserId = users[userIndex]?.id;
    fetchMatchCheck(swipedUserId);
    storeSwipedUser(swipedUserId);
    console.log("WWWWWWWWWWWWWWWWWW, swi", swipedUserId);
    setPerson(person + 1);
    displaySwipedUsers();
  };

  const onSwipedLeft = (userIndex: number) => {
    const swipedUserId = users[userIndex]?.id;
    fetchMatchCheck(swipedUserId);
    storeSwipedUser(swipedUserId);
    setPerson(person + 1);
    console.log("ELEOLEOLEOE", users[userIndex]?.description);
    displaySwipedUsers();
  };

  const storeSwipedUser = async (userId: string) => {
    try {
      if (userId && userId !== "null") {
        // Dodatkowe sprawdzanie, czy userId nie jest null
        console.log("elo", userId);
        const storedData = await AsyncStorage.getItem("swipedUsers");
        const existingSwipedUsers = storedData ? JSON.parse(storedData) : [];

        if (!existingSwipedUsers.includes(userId)) {
          existingSwipedUsers.push(userId);
          await AsyncStorage.setItem(
            "swipedUsers",
            JSON.stringify(existingSwipedUsers)
          );
        }
      }
    } catch (error) {
      console.error("Error storing swiped user:", error);
    }
  };
  const getSwipedUsers = async () => {
    try {
      const storedData = await AsyncStorage.getItem("swipedUsers");
      return storedData ? JSON.parse(storedData) : [];
    } catch (error) {
      console.error("Error getting swiped users:", error);
      return [];
    }
  };

  if (users === null) {
    return <Text>loading</Text>;
  }

  const swipeLeftAutomatically = () => {
    if (swiperRef.current) {
      swiperRef.current.swipeLeft();
    }
  };

  const swipeRightAutomatically = () => {
    if (swiperRef.current) {
      swiperRef.current.swipeRight();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.deckSwaiper}>
        <DeckSwiper
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
          ref={swiperRef}
          backgroundColor="transparent"
          cards={users || []}
          swipeAnimationDuration={155}
          cardStyle={{}}
          keyExtractor={(card) => card?.id}
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
          onSwipedRight={onSwipedRight}
          onSwipedLeft={onSwipedLeft}
        />
      </View>
      <View style={styles.bottomBar}>
        <SwaiperBottomBar
          onLeftButtonPress={swipeLeftAutomatically}
          onRightButtonPress={swipeRightAutomatically}
        />
      </View>
      <View style={styles.Slider}>
        <Slider1
          name={users[person]?.description || ""}
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
  deckSwaiper: ViewStyle;
} = {
  container: {},
  card: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    borderRadius: 50,
    maxHeight: "100%",
    maxWidth: "100%",
  },
  image: {
    borderRadius: 50,
    height: "100%",
    maxWidth: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    margin: 10,
  },
  overlay: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
  },
  deckSwaiper: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#424242",
    height: "70%",
    maxHeight: "70%",
    flex: 1,
    margin: 10,
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
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 120,
    left: 0,
    maxWidth: "100%",
    width: "100%",
    maxHeight: "100%",
  },
  bottomBar: {
    top: -300,
    alignItems: "center",
    justifyContent: "center",
    left: 0,
    right: 0,
  },
};

export default Swaiper;
