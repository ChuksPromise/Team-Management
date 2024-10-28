import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Animated } from "react-native";
import PrimaryButton from "../widgets/PrimaryButton";
import FormBgContainer from "../widgets/FormBgContainer";
import { ShowAlert } from "../utilities/Alert";
import validateInput from "../utilities/validateInputs";

const ForgetPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState(["", "", "", ""]);
  const [isEmailStage, setIsEmailStage] = useState(true);

  // const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const inputRefs = [...code.map((_) => useRef(null))];
  // Animated progress bar reference
  const progressAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: isEmailStage ? 0.5 : 1, // 0.5 for the email stage, 1 for the code stage
      duration: 500, // Adjust duration for a smoother effect
      useNativeDriver: false,
    }).start();
  }, [isEmailStage]);

  const handleEmailSubmit = () => {
    const { isValid, errorMessage } = validateInput({
      name: "email",
      value: email,
    });
    if (!isValid) {
      return ShowAlert("warning", errorMessage);
    }

    setIsEmailStage(false);
    setTimeout(() => inputRefs[0].current.focus(), 1500);
  };

  const handleCodeChange = (index, value) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyPress = ({ nativeEvent }, index) => {
    if (nativeEvent.key === "Backspace" && index > 0 && code[index] === "") {
      // Move to the previous input when Backspace is pressed and the current input is empty
      inputRefs[index - 1].current.focus();
    }
  };

  const handleCodeSubmit = () => {
    if (code.every((digit) => digit)) {
      navigation.navigate("ResetPassword");
    }
  };

  return (
    <View style={styles.container}>
      <FormBgContainer>
        {/* Animated Progress Tracker */}
        <View style={styles.progressBar}>
          <Animated.View
            style={[
              styles.progressFill,
              {
                width: progressAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0%", "100%"],
                }),
              },
            ]}
          />
        </View>

        {isEmailStage ? (
          <View style={styles.stageContainer}>
            <Text style={styles.instructionText}>
              What's your email address?
            </Text>
            <TextInput
              style={styles.inputField}
              placeholder="junial.william@gmail.com"
              placeholderTextColor="#ccc"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
            <PrimaryButton onPress={handleEmailSubmit}>
              <Text>Continue</Text>
            </PrimaryButton>
          </View>
        ) : (
          <View style={styles.stageContainer}>
            <Text style={styles.instructionText}>
              Enter the 4-digit code that we have sent via Mail to {email}
            </Text>
            <View style={styles.codeInputContainer}>
              {code.map((digit, index) => (
                <TextInput
                  key={index}
                  ref={inputRefs[index]}
                  style={styles.codeInput}
                  keyboardType="numeric"
                  maxLength={1}
                  value={digit}
                  onKeyPress={(e) => handleKeyPress(e, index)}
                  onChangeText={(value) => handleCodeChange(index, value)}
                />
              ))}
            </View>
            <PrimaryButton
              onPress={handleCodeSubmit}
              //   style={[
              //     {
              //       backgroundColor: code.every((digit) => digit)
              //         ? "#FFC107"
              //         : "#8a7d80",
              //     },
              //   ]}
              //   disabled={!code.every((digit) => digit)}
            >
              <Text>Continue</Text>
            </PrimaryButton>
            <Text style={styles.resendText}>Resend code</Text>
          </View>
        )}
      </FormBgContainer>
    </View>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  backgroundColor: "#0414c0",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginVertical: 10,
  },
  progressBar: {
    width: "100%",
    height: 4,
    backgroundColor: "#8a7d80",
    borderRadius: 2,
    marginVertical: 10,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#007AFF",
  },
  stageContainer: {
    paddingHorizontal: 20,
    alignItems: "center",
  },
  instructionText: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 10,
  },
  inputField: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 20,
  },
  codeInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 10,
  },
  codeInput: {
    width: 60,
    height: 60,
    backgroundColor: "white",
    textAlign: "center",
    fontSize: 18,
    borderRadius: 8,
  },
  continueButton: {
    width: "100%",
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: "#0414c0",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  resendText: {
    color: "white",
    fontSize: 14,
    marginTop: 10,
    textAlign: "center",
    textDecorationLine: "underline",
  },
});
