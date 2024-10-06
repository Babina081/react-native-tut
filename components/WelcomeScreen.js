import React from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from "react-native";

export default function WelcomeScreen() {
  const colorSchema = useColorScheme();
  return (
    <ScrollView
      horizontal={false}
      indicatorStyle={"white"}
      style={[
        styles.container,
        colorSchema === "light"
          ? { backgroundColor: "#fff" }
          : { backgroundColor: "#333333" },
      ]}
    >
      {/* <ImageBackground
        source={require("../assets/background.jpeg")}
        style={styles.bgImage}
        // resizeMode="contain"
      > */}
        <View style={styles.headerWrapper}>
          <Image
            source={require("../assets/lemon.jpg")}
            style={styles.logo}
            resizeMode={"contain"}
            accessible={true}
            accessibilityLabel="Little Lemon Logo"
          ></Image>
          <Text style={styles.regular}>Color Schema: {colorSchema}</Text>
          <Text style={styles.headerText}>Little Lemon</Text>
        </View>
        <Text style={styles.title}>Welcome To Little Lemon</Text>
        <Text style={styles.title}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear more about your experience with us!
        </Text>
        <Image
          source={require("../assets/food1.jpg")}
          style={styles.image}
          resizeMode={"cover"}
          accessible={true}
          accessibilityLabel="Food Picture 1"
        ></Image>
        <Image
          source={require("../assets/food2.jpg")}
          style={styles.image}
          resizeMode={"cover"}
          accessible={true}
          accessibilityLabel="Food Picture 2"
        ></Image>
        <Image
          source={require("../assets/food3.jpg")}
          style={styles.image}
          resizeMode={"cover"}
          accessible={true}
          accessibilityLabel="Food Picture 3"
        ></Image>
        <Image
          source={require("../assets/food4.jpg")}
          style={styles.image}
          resizeMode={"cover"}
          accessible={true}
          accessibilityLabel="Food Picture 4"
        ></Image>
        <Image
          source={require("../assets/food5.jpg")}
          style={styles.image}
          resizeMode={"cover"}
          accessible={true}
          accessibilityLabel="Food Picture 5"
        ></Image>
      {/* </ImageBackground> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  regular: {},
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 10,
  },
  headerText: {
    paddingRight: 10,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  title: {
    marginTop: 16,
    paddingVertical: 10,
    color: "#333333",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    height: 250,
    width: 350,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "red",
    margin: 10,
    justifyContent: "center",
  },
  bgImage: {
    flex: 1,
    justifyContent: "center",
  },
});
