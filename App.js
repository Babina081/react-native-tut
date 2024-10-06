import { StyleSheet, View, Image } from "react-native";
import LittleLemonFooter from "./components/LittleLemonFooter";
import LittleLemonHeader from "./components/LittleLemonHeader";
import MenuItems from "./components/MenuItems";
import FeedbackForm from "./components/FeedbackForm";
import LoginScreen from "./components/LoginScreen";
import WelcomeScreen from "./components/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function LogoTitle() {
  return (
    <Image
      source={require("./assets/lemon.jpg")}
      style={{
        height: 40,
        width: 300,
        resizeMode: "contain",
        alignSelf: "center",
      }}
    ></Image>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      {/* <View style={styles.container}> */}
      {/* <LittleLemonHeader /> */}
      {/* <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerStyle: { backgroundColor: "#333333" },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen
            // options={{ title: "Home" }}
            name="Welcome"
            component={WelcomeScreen}
            options={{
              title: "Home",
              headerTitle: (props) => <LogoTitle {...props}></LogoTitle>,
            }}
          ></Stack.Screen>
          <Stack.Screen name="Menu" component={MenuItems}></Stack.Screen>
          <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
        </Stack.Navigator> */}
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Welcome") {
              iconName = "home"
                
            } else if (route.name === "Login") {
              iconName = "log-in";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Welcome" component={WelcomeScreen}></Tab.Screen>
        {/* <Tab.Screen name="Menu" component={MenuItems}></Tab.Screen> */}
        <Tab.Screen name="Login" component={LoginScreen}></Tab.Screen>
      </Tab.Navigator>
      {/* <WelcomeScreen /> */}
      {/* <LoginScreen></LoginScreen> */}
      {/* <MenuItems /> */}
      {/* <FeedbackForm></FeedbackForm> */}
      {/* </View>
     */}
     
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
