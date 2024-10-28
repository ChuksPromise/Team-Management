import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import TopHeader from "../../widgets/TopHeader";

function Create_Task_Screen({ navigation }) {
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [showStartTimePicker, setShowStartTimePicker] = useState(false);
  const [showEndTimePicker, setShowEndTimePicker] = useState(false);

  const onStartTimeChange = (event, selectedDate) => {
    const currentDate = selectedDate || startTime;
    setShowStartTimePicker(false);
    setStartTime(currentDate);
  };

  const onEndTimeChange = (event, selectedDate) => {
    const currentDate = selectedDate || endTime;
    setShowEndTimePicker(false);
    setEndTime(currentDate);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <TopHeader headerTitle="Create Task" navigation={navigation} />

      {/* Task Form */}
      <View style={styles.form}>
        <Text style={styles.label}>Task Title:</Text>
        <TextInput style={styles.input} placeholder="Enter task title" />

        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>Start Time:</Text>
            <TouchableOpacity onPress={() => setShowStartTimePicker(true)}>
              <TextInput
                style={styles.input}
                placeholder="11:00 am"
                value={startTime.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
                editable={false}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.column}>
            <Text style={styles.label}>End Time:</Text>
            <TouchableOpacity onPress={() => setShowEndTimePicker(true)}>
              <TextInput
                style={styles.input}
                placeholder="02:00 pm"
                value={endTime.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
                editable={false}
              />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.label}>Start Date:</Text>
        <TextInput style={styles.input} placeholder="MM/DD/YY" />

        <Text style={styles.label}>Staff Name:</Text>
        <TextInput style={styles.input} placeholder="Enter staff name" />

        <Text style={styles.label}>Select Staff:</Text>
        <TextInput style={styles.input} placeholder="Select staff" />

        {/* Create Button */}
        <TouchableOpacity style={styles.createButton}>
          <Text style={styles.createButtonText}>Create</Text>
        </TouchableOpacity>
      </View>

      {/* Time Pickers */}
      {showStartTimePicker && (
        <DateTimePicker
          value={startTime}
          mode="time"
          display="spinner"
          onChange={onStartTimeChange}
        />
      )}
      {showEndTimePicker && (
        <DateTimePicker
          value={endTime}
          mode="time"
          display="spinner"
          onChange={onEndTimeChange}
        />
      )}
    </View>
  );
}

export default Create_Task_Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  form: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
    color: "#1F2937",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginBottom: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    width: "48%",
  },
  createButton: {
    backgroundColor: "#0000FF",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  createButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
