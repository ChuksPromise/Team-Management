import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FormBgContainer from "../widgets/FormBgContainer";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   return (
     <View style={styles.container}>
       {/* Login Form Container */}
       <FormBgContainer>
         {/* Email Input */}
         <View style={styles.inputContainer}>
           <Ionicons
             name="call-outline"
             size={20}
             color="#0026ff"
             style={styles.icon}
           />
           <TextInput
             style={styles.input}
             placeholder="Email"
             placeholderTextColor="#00000083"
             value={email}
             onChangeText={setEmail}
           />
         </View>

         {/* Password Input */}
         <View style={styles.inputContainer}>
           <Ionicons
             name="eye-off-outline"
             size={20}
             color="#0026ff"
             style={styles.icon}
           />
           <TextInput
             style={styles.input}
             placeholder="Password"
             placeholderTextColor="#00000083"
             value={password}
             onChangeText={setPassword}
             secureTextEntry={true}
           />
         </View>

         {/* Log In Button */}
         <TouchableOpacity
           style={styles.button}
           onPress={() => navigation.navigate("MainApp")}
         >
           <Text style={styles.buttonText}>Log In</Text>
         </TouchableOpacity>

         {/* Forget Password and Register Links */}
         <TouchableOpacity
           onPress={() => navigation.navigate("Forget-Password")}
         >
           <Text style={styles.forgetPasswordText}>Forget Password?</Text>
         </TouchableOpacity>

         <View style={styles.registerTextContainer}>
           <Text style={styles.registerPrompt}>Don’t have an account? </Text>
           <TouchableOpacity onPress={() => navigation.navigate("Register")}>
             <Text style={styles.registerLink}>Register</Text>
           </TouchableOpacity>
         </View>
       </FormBgContainer>
     </View>
   );
}

// Styles
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    marginVertical: 10,
    paddingHorizontal: 9,
    borderRadius: 9,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: "#000",
    fontSize: 16,
    paddingVertical: 15,
  },
  button: {
    backgroundColor: "#ffc107", // Yellow button
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  forgetPasswordText: {
    color: "#fff",
    textAlign: "right",
    marginBottom: 20,
  },
  registerTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  registerPrompt: {
    color: "#fff",
  },
  registerLink: {
    color: "#ffc107", // Yellow for the register link
  },
});
