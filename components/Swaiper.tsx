import React, { useEffect, useRef, useState } from "react";
import {
  View,
  ViewStyle,
  Image,
  ImageStyle,
  TextStyle,
  ScrollView,
} from "react-native";
import DeckSwiper from "react-native-deck-swiper";
import { IconButton } from "./IconButton";
import { SuperButton } from "./SuperButton";
import { userList, matchesCheck, matchesCreate, userInfo } from "../api/api";
import { User } from "../types";
import { useUser } from "../utils/user-hook";
import { Button, Text } from "react-native-paper";
import { auth } from "../fireBaseConfig";
import { useNavigation } from "@react-navigation/native";
import { Slider1 } from "./Slider";
import { set } from "firebase/database";
import { SwaiperBottomBar } from "./SwaiperBottomBar";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage
import { BottomBar } from "./BottomBar";
import { LinearGradient } from "expo-linear-gradient";

interface Props {
  esa?: string;
}

export const Swaiper = (props: Props) => {
  const swiperRef = useRef<DeckSwiper<any>>(null);
  const [users, setUsers] = useState<User[] | null>(null);
  const navigation = useNavigation();
  const [person, setPerson] = useState<number>(0);
  const [swipedUsers, setSwipedUsers] = useState<string[]>([]);
  const [handleSlideUp, setHandleSlideUp] = useState<() => void>(() => {});
  const [Mrunio, setMrunio] = useState(2);
  const [haloLogged, setHaloLogged] = useState(false); // Dodaj ten stan
  const [user4, setUser4] = useState<any>(null);
  const { user } = useUser();
  const [isFetchingUser4, setIsFetchingUser4] = useState("0"); // Dodaj nowy stan

  useEffect(() => {
    if (auth.currentUser?.uid) fetchUserList(); // Inicjuj filtrację, gdy użytkownik jest zalogowany
  }, [auth.currentUser?.uid]);

  const fetchUserList = async (pageToken?: string) => {
    // Dodaj opcjonalny parametr pageToken
    const response2 = await userInfo(auth.currentUser?.uid);

    setUser4(response2);

    const response = await userList(10, pageToken);
    console.log("response", response);

    const swipedUsersList = await getSwipedUsers(); // Pobierz listę przesuniętych użytkowników

    const filteredUsers = response?.filter((user) => {
      return auth.currentUser?.uid !== user?.id;
    });

    // Funkcja do porównywania dwóch tablic
    function arraysAreEqual(array1, array2) {
      if (array1 === null && array2 === null) {
        return true;
      }
      if (array1 === null || array2 === null) {
        return false;
      }
      if (array1.length !== array2.length) {
        return false;
      }
      return array1.every((item) => array2.includes(item));
    }
    console.log("User list", filteredUsers);
    setUsers(filteredUsers);
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

  if (users[person]?.id === undefined) {
    return <Text style={styles.Text}>all users have been swiped</Text>;
  }

  const swipeLeftAutomatically = () => {
    if (swiperRef.current) {
      swiperRef.current.swipeLeft();
    }
  };

  const swipeTopAutomatically = () => {
    if (swiperRef.current) {
      swiperRef.current.swipeBack();
    }
  };

  const swipeRightAutomatically = () => {
    if (swiperRef.current) {
      swiperRef.current.swipeRight();
    }
  };

  const handleParentSlideUp = () => {
    console.log("handleSlideUp from parent");
    console.log(users[person]?.id);
    setMrunio(1);
    return;
  };

  if (Mrunio === 1) {
    setTimeout(() => {
      setMrunio(2);
    }, 200); // 2000 milliseconds = 2 seconds
  }

  return (
    <View style={styles.container}>
      {users.length === 0 && (
        <Text style={styles.Text}>all users have been swiped</Text>
      )}

      <DeckSwiper
        renderCard={(user) => (
          <View style={[styles.card, { paddingBottom: "20%" }]} key={user?.id}>
            <Image source={{ uri: user?.avatar_url }} style={styles.image} />

            <LinearGradient
              colors={["transparent", "#3b3b3b"]}
              style={{
                justifyContent: "flex-end",
                left: 0,
                right: 0,
                top: 0,
                height: "15%",
                maxHeight: "100%",
                alignItems: "flex-start",
                position: "absolute",
                marginTop: "119%",
              }}
            />
            <Text variant="displayMedium" style={styles.cardText}>
              {user?.name}
            </Text>
            <Text
              numberOfLines={4}
              variant="displaySmall"
              onPress={handleParentSlideUp}
              style={styles.cardText2}
            >
              {user?.description}
            </Text>
          </View>
        )}
        ref={swiperRef}
        cards={users || []}
        swipeAnimationDuration={155}
        showSecondCard={true}
        goBackToPreviousCardOnSwipeTop
        cardStyle={{
          right: 0,
          left: 0,
          top: 0,
          bottom: 0,
          maxWidth: "100%",
          height: "80%",

          width: "100%",
        }}
        keyExtractor={(card) => card?.id}
        containerStyle={styles.deckSwaiper}
        stackSeparation={0}
        backgroundColor="transparent"
        onSwipedAll={() => {
          console.log("onSwipedAll");
          <Text style={styles.Text}>all users have been swiped</Text>;
        }}
        disableTopSwipe
        stackSize={3}
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
                marginLeft: 70,
              },
              wrapper: {
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                marginTop: 80,
                marginRight: 0,
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
                marginTop: 60,
                marginLeft: 30,
              },
            },
          },
        }}
        animateOverlayLabelsOpacity
        animateCardOpacity
        onSwipedRight={onSwipedRight}
        onSwipedLeft={onSwipedLeft}
        swipeBackCard={true}
      ></DeckSwiper>

      <View style={styles.Slider}>
        <Slider1
          onSlideUp={() => {
            // Funkcja onSlideUp
          }}
          mrunio2={Mrunio}
          name={users[person]?.description}
        />
      </View>

      <View style={styles.bottomBar2}>
        <SwaiperBottomBar
          onLeftButtonPress={swipeLeftAutomatically}
          onMiddleButtonPress={handleParentSlideUp}
          onRightButtonPress={swipeRightAutomatically}
          onRight2ButtonPress={handleParentSlideUp}
          onLeft2ButtonPress={swipeTopAutomatically}
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
  bottomBar2: ViewStyle;
  deckSwaiper: ViewStyle;
  cardText2: TextStyle;
  Text: TextStyle;
} = {
  container: {
    flex: 1,
  },
  card: {
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 50,
    backgroundColor: "#3b3b3b",
    height: "95%", // Set the height to 100%
    position: "relative", // Dodaj tę linię
  },
  image: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100%", // Set the height to 100%
    width: "100%", // Set the width to 100%
    resizeMode: "cover", // Ensure the image covers the entire container
  },
  overlay: {
    alignContent: "flex-start",

    left: 0,
    width: "100%",
    right: 0,
  },
  deckSwaiper: {
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: "100%",
  },
  cardText: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    left: "0%",
    marginHorizontal: 20,
    color: "white",
    fontFamily: "inter-bold",
    fontWeight: "bold",
    fontSize: 40,
    bottom: "30%",
    position: "absolute",
  },
  cardText2: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    lineHeight: 20,
    left: "0%",
    marginHorizontal: 20,
    color: "white",

    fontFamily: "inter-bold",
    fontWeight: "bold",
    fontSize: 15,
    top: "83%",

    position: "absolute",
  },
  Slider: {
    alignItems: "center",
    width: "100%",
    maxWidth: "100%",
    marginTop: "200%",
    position: "absolute",
    zIndex: 2, // Add this line to set a higher zIndex
  },
  bottomBar: {
    justifyContent: "flex-end",
    left: 0,
    right: 0,
    top: 0,
    marginTop: "118%",
    height: "10%",
  },
  bottomBar2: {
    marginTop: "132%",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
    maxWidth: "100%",
    left: 0,
    right: 0,
    top: 0,
    height: "10%",
  },
  Text: {
    position: "absolute",
    width: "100%",
    textAlign: "center",
    marginTop: "40%",
    color: "white",
    fontSize: 30,
  },
};

export default Swaiper;
