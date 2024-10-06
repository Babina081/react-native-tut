import { StyleSheet, View } from "react-native";
import LittleLemonFooter from "./components/LittleLemonFooter";
import LittleLemonHeader from "./components/LittleLemonHeader";
import MenuItems from "./components/MenuItems";
import FeedbackForm from "./components/FeedbackForm";
import LoginScreen from "./components/LoginScreen";
import WelcomeScreen from "./components/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Menu"
        screenOptions={{ headerStyle: { backgroundColor: "#F4CE14" } }}
      >
        <Stack.Screen
          options={{ title: "Home" }}
          name="Welcome"
          component={WelcomeScreen}
        ></Stack.Screen>
        <Stack.Screen name="Menu" component={MenuItems}></Stack.Screen>
      </Stack.Navigator>
      <View style={styles.container}>
        <LittleLemonHeader />
        <WelcomeScreen />
        {/* <MenuItems /> */}
        {/* <FeedbackForm></FeedbackForm> */}
        {/* <LoginScreen></LoginScreen> */}
      </View>
      <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
  },
  footerContainer: { backgroundColor: "#333333" },
});
