import React, { useContext } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { GlobalContext } from "../context/GlobalState";

export default function StatsScreen() {
  const { transactions } = useContext(GlobalContext);

  // Group spending by category
  const categoryTotals = {};

  transactions.forEach((t) => {
    if (t.amount < 0) {  // Only expenses
      if (!categoryTotals[t.category]) {
        categoryTotals[t.category] = 0;
      }
      categoryTotals[t.category] += Math.abs(t.amount);
    }
  });

  const chartData = Object.keys(categoryTotals).map((category, index) => ({
    name: category,
    amount: categoryTotals[category],
    color: chartColors[index % chartColors.length],
    legendFontColor: "#333",
    legendFontSize: 14,
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Category Spending</Text>

      {chartData.length > 0 ? (
        <PieChart
          data={chartData}
          width={Dimensions.get("window").width - 40}
          height={260}
          accessor={"amount"}
          backgroundColor={"transparent"}
          paddingLeft={"15"}
          chartConfig={chartConfig}
          absolute
        />
      ) : (
        <Text style={styles.noData}>No expense data to display</Text>
      )}
    </View>
  );
}

const chartColors = [
  "#FF6384",
  "#36A2EB",
  "#FFCE56",
  "#4BC0C0",
  "#9966FF",
  "#FF9F40",
];

const chartConfig = {
  backgroundGradientFrom: "#ffffff",
  backgroundGradientTo: "#ffffff",
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
};

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  noData: { marginTop: 40, fontSize: 18, color: "#777" },
});
