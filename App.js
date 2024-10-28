import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import FlashMessage from "react-native-flash-message";

import Login from "./screens/Login";
import Register from "./screens/Register";
import Forget_Password from "./screens/Forget_Password";
import Onboard from "./screens/Onboard";
import Verify_Forgot_Password from "./screens/Verify_Forget_Password";
import MainApp from "./screens/MainApp";
// import Home_Screen from './screens/MainApp/Home_Screen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <SafeAreaView style={{ flex: 1 }}>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <FlashMessage
        position="top"
        // floating={true} // makes the flash message float above the content
        // style={{ backgroundColor: "#0414c0" }} // customize background color
        animated={true} // enables animation
        statusBarHeight={
          Platform.OS === "android" ? StatusBar.currentHeight : 20
        }
      />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
            headerTitleAlign: "center",
            tabBarIcon: () => {
              <MaterialCommunityIcons name="home" size={20} />;
            },
            headerShadowVisible: false,
          }}
        >
          <Stack.Screen
            name="Onboarding"
            component={Onboard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={
              {
                // headerShown: false,
              }
            }
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={
              {
                // headerShown: false,
              }
            }
          />
          <Stack.Screen
            name="Forget-Password"
            component={Forget_Password}
            options={
              {
                // headerShown: false,
              }
            }
          />
          <Stack.Screen
            name="Verify-Forgot-Password"
            component={Verify_Forgot_Password}
            options={
              {
                // headerShown: false,
              }
            }
          />
          <Stack.Screen
            name="MainApp"
            component={MainApp}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
