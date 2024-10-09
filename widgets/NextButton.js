import { View, Text, Pressable, StyleSheet } from "react-native";
// import { theme } from '../utils/theme';

function NextButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color:"darkblue" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default NextButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 10,
    backgroundColor: "green",
    margin: 4,
    overflow: "hidden",
    width: 100,
  },
  buttonInnerContainer: {
    backgroundColor: "#f3bb00",
    paddingVertical: 5,
    paddingHorizontal: 10,
    elevation: 2,
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 20
  },
  pressed: {
    opacity: 0.75,
  },
});
