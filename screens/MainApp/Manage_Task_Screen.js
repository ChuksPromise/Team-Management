import React, { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Card, Text, Chip, IconButton } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import TopHeader from "../../widgets/TopHeader";

const colorStatusFormat = {
  completed: "#1E88E5",
  pending: "#FFB300",
  active: "#4CAF50",
  timeup: "#E53935",
};

const TaskElement = ({ item }) => (
  <Card
    style={[
      styles.card,
      {
        borderLeftColor:
          colorStatusFormat[item.status.toLowerCase().replace(" ", "")],
      },
    ]}
  >
    <View style={styles.cardContent}>
      <View style={styles.info}>
        <Text style={styles.teamName}>{item.name}</Text>
        <Text style={styles.phone}>{item.phone}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      <View style={styles.actions}>
        <Chip
          style={[
            styles.status,
            {
              backgroundColor: `${
                colorStatusFormat[item.status.toLowerCase().replace(" ", "")]
              }F9`,
            },
          ]}
          textStyle={styles.statusText}
        >
          {item.status}
        </Chip>
        <View style={styles.icons}>
          <IconButton icon="pencil" size={20} onPress={() => {}} />
          <IconButton icon="delete" size={20} onPress={() => {}} />
          <IconButton icon="phone" size={20} onPress={() => {}} />
        </View>
      </View>
    </View>
  </Card>
);

const Manage_Task_Screen = ({ navigation }) => {
  const defaultTasks = [
    {
      name: "Team Name",
      phone: "09036225578",
      date: "20/9/2024",
      status: "Active",
    },
    {
      name: "Team Name",
      phone: "08191919199",
      date: "20/9/2024",
      status: "Completed",
    },
    {
      name: "Team Name",
      phone: "08191919199",
      date: "20/9/2024",
      status: "Pending",
    },
    {
      name: "Team Name",
      phone: "08191919199",
      date: "20/9/2024",
      status: "Pending",
    },
    {
      name: "Team Name",
      phone: "08191919199",
      date: "20/9/2024",
      status: "Time up",
    },
    {
      name: "Team Name",
      phone: "08191919199",
      date: "20/9/2024",
      status: "Time up",
    },
    {
      name: "Team Name",
      phone: "08191919199",
      date: "20/9/2024",
      status: "Time up",
    },
    {
      name: "Team Name",
      phone: "08191919199",
      date: "20/9/2024",
      status: "Time up",
    },
    {
      name: "Team Name",
      phone: "08191919199",
      date: "20/9/2024",
      status: "Time up",
    },
  ];
  const [tasks, setTasks] = useState(defaultTasks);

  return (
    <View style={styles.container}>
      <TopHeader headerTitle="Manage Task" navigation={navigation} />

      <FlatList
        data={tasks}
        keyExtractor={(_, index) => index.toString()}
        renderItem={TaskElement}
      />
    </View>
  );
};

export default Manage_Task_Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#F9F9F9",
  },
  card: {
    marginVertical: 8,
    borderLeftWidth: 5,
    borderRadius: 8,
    elevation: 2,
    backgroundColor: "#fff",
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  info: {
    flex: 1,
  },
  teamName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  phone: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  date: {
    fontSize: 14,
    color: "#999",
    marginTop: 2,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
  },
  status: {
    marginRight: 10,
    borderRadius: 15,
  },
  statusText: {
    color: "#fff",
    fontSize: 10,
  },
  icons: {
    flexDirection: "row",
  },
});
