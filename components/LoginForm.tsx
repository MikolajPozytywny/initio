import React, { useState } from "react";
import { SuperButton } from "../components/SuperButton";
import SuperTextInput from "../components/SuperTextInput";
import { StyleSheet, View } from "react-native";

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
}

const LoginForm = (props: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    console.log("LoginForm, onSubmit =>", email, password);
    props.onSubmit(email, password);
  };

  return (
    <View>
      <View style={styles.container}>
        <SuperTextInput label="E-Mail" onChange={setEmail} value={email} />
        <SuperTextInput
          label="password"
          onChange={setPassword}
          value={password}
        />
      </View>
      <SuperButton
        onPress={onSubmit}
        myColor="#2a9"
        strona="left"
        title="wyślij"
        czcionka="Inter-Black"
        size={16}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    maxWidth: 300,
  },
});

export default LoginForm;
