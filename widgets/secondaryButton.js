import { View, Text, Pressable, StyleSheet } from "react-native";
// import { theme } from '../utils/theme';

function SecondaryButton({ children, onPress }) {
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

export default SecondaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 100,
    margin: 4,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#ADADAD" 
  },
  buttonInnerContainer: {
    backgroundColor: "white",
    paddingVertical: 16,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "black",
    textAlign: "center",
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 20
  },
  pressed: {
    opacity: 0.75,
  },
});
