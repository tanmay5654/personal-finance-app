import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { GlobalContext } from "../context/GlobalState";

export default function BalanceCard() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((t) => t.amount);

  const total = amounts.reduce((acc, num) => acc + num, 0).toFixed(2);
  const income = amounts
    .filter((num) => num > 0)
    .reduce((acc, num) => acc + num, 0)
    .toFixed(2);
  const expense = (
    amounts.filter((num) => num < 0).reduce((acc, num) => acc + num, 0) * -1
  ).toFixed(2);

  return (
    <View style={styles.card}>
      <Text style={styles.balanceLabel}>Current Balance</Text>
      <Text style={styles.balanceAmount}>€{total}</Text>

      <View style={styles.row}>
        <View style={styles.box}>
          <Text style={styles.incomeLabel}>Income</Text>
          <Text style={styles.incomeAmount}>€{income}</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.expenseLabel}>Expense</Text>
          <Text style={styles.expenseAmount}>€{expense}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
  },
  balanceLabel: {
    fontSize: 18,
    color: "#555",
  },
  balanceAmount: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  box: { alignItems: "center", flex: 1 },
  incomeLabel: { color: "green", fontSize: 16 },
  incomeAmount: { color: "green", fontSize: 20, fontWeight: "bold" },
  expenseLabel: { color: "red", fontSize: 16 },
  expenseAmount: { color: "red", fontSize: 20, fontWeight: "bold" }
});
