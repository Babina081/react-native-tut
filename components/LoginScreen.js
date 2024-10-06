import React from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput
} from "react-native";

export default function LoginScreen() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      {!loggedIn && (
        <>
          <Text style={styles.regularText}>Login to continue </Text>
          <TextInput
            style={styles.inputBox}
            value={email}
            onChangeText={onChangeEmail}
            placeholder="Email"
            keyboardType="email-address"
          ></TextInput>
          <TextInput
            style={styles.inputBox}
            value={password}
            onChangeText={onChangePassword}
            placeholder="Password"
            keyboardType="default"
            secureTextEntry={true}
          ></TextInput>
          <Pressable
            style={styles.button}
            onPress={() => {
              setLoggedIn(!loggedIn);
            }}
          >
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
        </>
      )}

      {loggedIn && <Text style={styles.regularText}>You are logged In !</Text>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "EDEFEE",
    backgroundColor: "#EDEFEE",
  },
  button: {
    backgroundColor: "#F4CE14",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "#EDEFEE",
    fontSize: 30,
    flexWrap: "wrap",
    textAlign: "center",
    fontWeight: "bold",
  },
});
