import React, { useState } from "react";
import { SuperButton } from "../components/SuperButton";

import { StyleSheet, View } from "react-native";
import { Allert } from "./Allert";
import { ViewStyle } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {Badge, Button,TextInput} from "react-native-paper";
import { IconButton, MD3Colors } from 'react-native-paper';

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
}

const LoginForm = (props: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mrunio, setMrunio] = useState(0);
  const [allart, setAllart] = useState<string>("");
  const navigation = useNavigation();
  const navigateToHome = () => {
    navigation.navigate("Home" as never);
  };
  const onSubmit = () => {
    console.log("LoginForm, onSubmit =>", email, password);
    if (minimumLenght(password, 8)) {
      setAllart("Nie ma 8 znaków");
      setMrunio(1);
      setTimeout(() => {
        setMrunio(0);
      }, 5000);
      return;
    }
    if (!hasUppercaseLetter(password)) {
      setAllart("Nie ma duzej litery");
      setMrunio(1);
      setTimeout(() => {
        setMrunio(0);
      }, 5000);
      return;
    }
    if (!hasLowercaseLetter(password)) {
      setAllart("Nie ma Małej litery");
      setMrunio(1);
      setTimeout(() => {
        setMrunio(0);
      }, 5000);
      return;
    }
    if (!hasNumber(password)) {
      setAllart("Nie ma cyferki");
      setMrunio(1);
      setTimeout(() => {
        setMrunio(0);
      }, 5000);
      return;
    }
    if (!validateEmail(email)) {
      setAllart("niepoprawny adres e mail");
      setMrunio(1);
      setTimeout(() => {
        setMrunio(0);
      }, 5000);
      return;
    }
    props.onSubmit(email, password);
  };

  return (
    <View>
 
      <View style={styles.container}>
      <TextInput
       mode="outlined"
          label="E-Mail"
          onChangeText={setEmail}
          value={email}
          right={<TextInput.Affix text="/100" />}
          placeholder="E-Mail"
          style={{ width: 300}}
      
     
        />
       
        <TextInput
              mode="outlined"
              label="password"
              placeholder="Password"
              secureTextEntry
              right={<TextInput.Affix text="/100" />}
              value={password}
              onChangeText={setPassword}
              style={{ width: 300 }}
              
            />
        {/* <TextInput
        MarginTop={20} 
          secureTextEntry={true}
          placeholderColor="white"
          label="password"
          onChange={setPassword}
          value={password}
          placeholder="Password"
          style={{ fontFamily: "Inter-Black" }}
    width={300}
          backgroundColor="#454444"
          borderColor="transparent"
          borderRadius={20}
        /> */}

      </View>
      <View style={{ marginVertical: 20 }}>
        
        <Button  
        
        onPress={onSubmit}
        mode="contained"
        >login</Button>

        
        {mrunio === 1 && <Allert Allart={allart} />}

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#241E24",
    
  },
});

export default LoginForm;

/**
 * Funkcja sprawdza czy długość stringa jest mniejsza od podanej wartości
 */
const minimumLenght = (str: string, len: number) => {
  return str.length < len;
};

/**
 * Funkcja sprawdza czy string zawiera wielką literę
 */
const hasUppercaseLetter = (ste: string) => {
  for (let i = 0; i < ste.length; i++) {
    if (ste[i] === ste[i].toUpperCase()) {
      return true;
    }
  }
  return false;
};

/**
 * Funkcja sprawdza czy string zawiera małą literę
 */
const hasLowercaseLetter = (ste: string) => {
  for (let i = 0; i < ste.length; i++) {
    if (ste[i] === ste[i].toLowerCase()) {
      return true;
    }
  }
  return false;
};

/**
 * Funkcja sprawdza czy string zawiera cyfrę
 */
const hasNumber = (ste: string) => {
  for (let i = 0; i < ste.length; i++) {
    //@ts-ignore
    if (ste[i] == Number(ste[i])) {
      return true;
    }
  }
  return false;
};

/**
 * Funkcja sprawdza czy string jest poprawnym adresem e-mail
 */
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};
