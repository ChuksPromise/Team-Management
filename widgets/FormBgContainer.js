import { StyleSheet, ImageBackground, View } from "react-native";

const FormBgContainer = ({children}) => {
  return (
    <ImageBackground
      source={require("../assets/form-background.png")}
      style={styles.formBackground}
      imageStyle={{ objectFit: "cover" }}
    >
      <View style={styles.formContainer}>{children}</View>
    </ImageBackground>
  );
};

export default FormBgContainer;

const styles = StyleSheet.create({
  formBackground: {
    backgroundColor: "#fff", // Blue background
    width: "100%",
    height: 700,
  },

  formContainer: {
    paddingTop: 150,
    paddingHorizontal: 20, // Rounded corners
  },
});