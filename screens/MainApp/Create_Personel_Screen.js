import React, {useState} from "react";
import { View, StyleSheet } from "react-native";
import { Appbar, TextInput, Button } from "react-native-paper";

export default function CreatePersonnelScreen({ navigation }) {
  const [teamName, setTeamName] = useState("");
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <View style={styles.container}>
      {/* Header */}
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content
          title="Create Personnel"
          titleStyle={styles.headerTitle}
        />
        <Appbar.Action icon="menu" onPress={() => {}} />
      </Appbar.Header>

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
  header: {
    backgroundColor: "#FFFFFF",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
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
