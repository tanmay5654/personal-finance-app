import React, { useContext, useState } from "react";
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { GlobalContext } from "../context/GlobalState";
import { Picker } from "@react-native-picker/picker";
import { Card, Button, FAB } from "react-native-paper";
import TransactionItem from "../components/TransactionItem";

export default function HomeScreen({ navigation }) {
  const { transactions } = useContext(GlobalContext);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const total = transactions.reduce((acc, item) => acc + item.amount, 0);

  const filteredTransactions =
    selectedCategory === "All"
      ? transactions
      : transactions.filter((item) => item.category === selectedCategory);

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER CARD */}
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.title}>Personal Finance App</Text>
          <Text style={styles.balance}>Balance: €{total.toFixed(2)}</Text>
        </Card.Content>
      </Card>

      {/* CATEGORY FILTER */}
      <Text style={styles.filterLabel}>Filter by Category</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={selectedCategory}
          onValueChange={(v) => setSelectedCategory(v)}
          style={styles.picker}
        >
          <Picker.Item label="All Categories" value="All" />
          <Picker.Item label="Food" value="Food" />
          <Picker.Item label="Rent" value="Rent" />
          <Picker.Item label="Shopping" value="Shopping" />
          <Picker.Item label="Travel" value="Travel" />
          <Picker.Item label="Bills" value="Bills" />
          <Picker.Item label="Salary" value="Salary" />
          <Picker.Item label="Groceries" value="Groceries" />
        </Picker>
      </View>

      {/* TRANSACTION LIST */}
      <FlatList
        data={filteredTransactions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TransactionItem item={item} navigation={navigation} /> // 👈 FIXED
        )}
        contentContainerStyle={{ paddingBottom: 150 }}
      />

      {/* BUTTONS CARD */}
      <Card style={styles.actionsCard}>
        <Card.Content>
          <Button
            mode="contained"
            style={styles.actionButton}
            onPress={() => navigation.navigate("Stats")}
          >
            View Category Stats
          </Button>

          <Button
            mode="contained"
            style={[styles.actionButton, { backgroundColor: "#0061cc" }]}
            onPress={() => navigation.navigate("MonthlyStats")}
          >
            View Monthly Stats
          </Button>
        </Card.Content>
      </Card>

      {/* FLOATING ADD BUTTON */}
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => navigation.navigate("AddTransaction")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f3f3f3" },

  card: {
    margin: 15,
    elevation: 3,
  },

  title: { fontSize: 24, fontWeight: "bold" },

  balance: { fontSize: 20, marginTop: 10 },

  filterLabel: {
    marginLeft: 20,
    fontSize: 16,
    fontWeight: "600",
    marginTop: 10,
  },

  pickerWrapper: {
    borderWidth: 1,
    borderRadius: 10,
    overflow: "hidden",
    marginHorizontal: 20,
    backgroundColor: "#fff",
  },

  picker: { height: 50 },

  actionsCard: {
    position: "absolute",
    bottom: 90,
    left: 15,
    right: 15,
    elevation: 3,
  },

  actionButton: {
    marginVertical: 8,
    borderRadius: 10,
    backgroundColor: "#007bff",
  },

  fab: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#007bff",
  },
});
