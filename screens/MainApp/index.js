import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { Appbar, TextInput, Button } from "react-native-paper";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import Home_Screen from "./Home_Screen";
import Create_Task_Screen from "./Create_Task_Screen";
import Manage_Task_Screen from "./Manage_Task_Screen";
import Create_Personnel_Screen from "./Create_Personel_Screen";
// import Manage_Personnel_Screen from './Manage_Personnel_Screen';

const Drawer = createDrawerNavigator();

function MainApp() {
  const ScreenData = [
    {
      name: "Home",
      icon: ({ color, size }) => (
        <Ionicons name="home-outline" size={size} color={color} />
      ),
      component: Home_Screen,
    },
    {
      name: "Create Task",
      icon: ({ color, size }) => (
        <Ionicons name="document-text-outline" size={size} color={color} />
      ),
      component: Create_Task_Screen,
    },
    {
      name: "Manage Task",
      icon: ({ color, size }) => (
        <Ionicons name="briefcase-outline" size={size} color={color} />
      ),
      component: Manage_Task_Screen,
    },
    {
      name: "Create Personnel",
      icon: ({ color, size }) => (
        <FontAwesome5 name="user-plus" size={size} color={color} />
      ),
      component: Create_Personnel_Screen,
    },
    // {
    //      name: 'Manage Personnel',
    //      icon: ({ color, size }) => (
    //           <Ionicons name="home-outline" size={size} color={color} />
    //      ),
    //      component: Manage_Personnel_Screen
    // },
  ];

  const CustomDrawerContent = (props) => (
    <View {...props}  contentContainerStyle={styles.drawerContent}>
      {/* Logo */}
      {/* <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/vtm_logo.png")}
          style={styles.logo}
        />
      </View> */}
      <Appbar.Header style={styles.logoContainer}>
        <Image
          source={require("../../assets/vtm_logo.png")}
          style={styles.logo}
        />
        <Appbar.Action
          size={30}
          icon="close"
          onPress={() => props.navigation.closeDrawer()}
        />
      </Appbar.Header>

      {/* Dynamic Drawer Items */}
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={ScreenData}
        renderItem={({ item: { name, icon }, index }) => (
          <DrawerItem
            label={name}
            icon={icon}
            onPress={() => props.navigation.navigate(name)}
            labelStyle={styles.drawerLabel}
            focused={props.state.index === index}
          />
        )}
      />
    </View>
  );
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: "blue",
        drawerInactiveTintColor: "#606060",
        drawerLabelStyle: {
          fontSize: 16,
        },
      }}
    >
      {ScreenData.map(({ name, component }, index) => (
        <Drawer.Screen key={index} name={name} component={component} />
      ))}
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    paddingTop: 20,
  },
  logoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 40,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  drawerLabel: {
    fontSize: 16,
    color: "#606060",
  },
  activeLabel: {
    color: "blue",
    fontWeight: "bold",
  },
});

export default MainApp;
