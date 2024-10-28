import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Appbar, TextInput, Button } from "react-native-paper";
import TopHeader from "../../widgets/TopHeader";

export default function CreatePersonnelScreen({ navigation }) {
  const [teamName, setTeamName] = useState("");
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <View style={styles.container}>
      {/* Header */}
      <TopHeader headerTitle="Create Personnel" navigation={navigation} />

      {/* Form Inputs */}
      <View style={styles.form}>
        <TextInput
          label="Team Name"
          value={teamName}
          onChangeText={(text) => setTeamName(text)}
          style={styles.input}
          mode="outlined"
        />

        <TextInput
          label="Role"
          value={role}
          onChangeText={(text) => setRole(text)}
          style={styles.input}
          mode="outlined"
        />

        <TextInput
          label="Phone"
          value={phone}
          onChangeText={(text) => setPhone(text)}
          style={styles.input}
          mode="outlined"
          keyboardType="phone-pad"
        />

        {/* Submit Button */}
        <Button
          mode="contained"
          onPress={() => {}}
          style={styles.button}
          contentStyle={styles.buttonContent}
          labelStyle={styles.buttonLabel}
        >
          Create
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  form: {
    flex: 1,
    padding: 20,
  },
  input: {
    marginBottom: 20,
    backgroundColor: "#FFFFFF",
  },
  button: {
    backgroundColor: "#0000FF",
    borderRadius: 5,
    marginTop: 20,
  },
  buttonContent: {
    paddingVertical: 10,
  },
  buttonLabel: {
    fontSize: 18,
    color: "#FFFFFF",
  },
});
