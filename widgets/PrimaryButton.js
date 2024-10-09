import { View, Text, Pressable, StyleSheet } from "react-native";
// import { theme } from '../utils/theme';

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color:"gray" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 5,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#f3bb00",
    paddingVertical: 10,
    paddingHorizontal: 16,
    elevation: 2,
    marginVertical: 15,
    borderRadius: 5
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 20
  },
  pressed: {
    opacity: 0.75,
  },
});
