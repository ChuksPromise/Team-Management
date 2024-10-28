import React from "react";
import { StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";

const TopHeader = ({ headerTitle, navigation }) => {
  return (
    <Appbar.Header style={styles.header}>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <Appbar.Content title={headerTitle} titleStyle={styles.headerTitle} />
      <Appbar.Action icon="menu" onPress={() => navigation.toggleDrawer()} />
    </Appbar.Header>
  );
};

export default TopHeader;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FFFFFF",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
