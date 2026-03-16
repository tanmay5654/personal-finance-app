import React, { useContext } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { BarChart } from "react-native-chart-kit";
import { GlobalContext } from "../context/GlobalState";

export default function MonthlyStatsScreen() {
  const { transactions } = useContext(GlobalContext);

  // Group expenses by month
  const monthlyTotals = {};

  transactions.forEach((t) => {
    if (t.amount < 0) {  // Only expenses
      const date = new Date(t.id); // ID used as timestamp
      const month = date.toLocaleString("default", { month: "short" });

      if (!monthlyTotals[month]) {
        monthlyTotals[month] = 0;
      }
      monthlyTotals[month] += Math.abs(t.amount);
    }
  });

  const months = Object.keys(monthlyTotals);
  const values = Object.values(monthlyTotals);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Monthly Spending</Text>

      {months.length > 0 ? (
        <BarChart
          data={{
            labels: months,
            datasets: [{ data: values }],
          }}
          width={Dimensions.get("window").width - 20}
          height={260}
          fromZero
          showValuesOnTopOfBars
          chartConfig={chartConfig}
          style={{ borderRadius: 12 }}
        />
      ) : (
        <Text style={styles.noData}>No expense data available</Text>
      )}
    </View>
  );
}

const chartConfig = {
  backgroundGradientFrom: "#ffffff",
  backgroundGradientTo: "#ffffff",
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  barPercentage: 0.7,
};

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: "center" },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  noData: {
    marginTop: 40,
    fontSize: 18,
    color: "#777",
  },
});
