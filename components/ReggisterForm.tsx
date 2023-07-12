import React, { useState } from "react";
import { SuperButton } from "../components/SuperButton";
import SuperTextInput from "../components/SuperTextInput";
import { StyleSheet, View } from "react-native";
import { Allert } from "./Allert";
import { ViewStyle } from "react-native";

interface ReggisterFormProps {
  onSubmit: (email: string, password: string) => void;
}

const ReggisterForm = (props: ReggisterFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mrunio, setMrunio] = useState(0);
  const [allart, setAllart] = useState<string>("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
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
    if (!ConfirmedPassword([password, ConfirmPassword])) {
      setAllart("hasla nie sa takie same");
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
      <SuperTextInput
        placeholderColor="white"
        label="email"
        onChange={setEmail}
        value={email}
        placeholder="email"
        style={{ fontFamily: "Inter-Black" }}
        width={300}
      />
      <View style={styles.container}>
        <SuperTextInput
          label="password"
          onChange={setPassword}
          value={password}
          placeholderColor="white"
          placeholder="password"
          style={{ fontFamily: "Inter-Black" }}
          width={310}
        />
        <SuperTextInput
          placeholderColor="white"
          label="ConfirmPassword"
          onChange={setConfirmPassword}
          value={ConfirmPassword}
          placeholder="ConfirmPassword"
          style={{ fontFamily: "Inter-Black" }}
          width={310}
        />
      </View>
      <View style={{ marginTop: 70 }}>
        <SuperButton
          onPress={onSubmit}
          myColor="white"
          strona="left"
          title="wyślij"
          czcionka="Inter-Black"
          size={16}
        />
        {mrunio === 1 && <Allert Allart={allart} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: 300,
    maxHeight: 100,
  },
});

export default ReggisterForm;

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

const ConfirmedPassword = (passwords: [string, string]) => {
  const [slu, stc] = passwords;
  if (slu === stc) {
    return true;
  }
  return false;
};
