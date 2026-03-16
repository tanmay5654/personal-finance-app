import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GlobalProvider } from "./src/context/GlobalState";
import { Provider as PaperProvider } from "react-native-paper";

import HomeScreen from "./src/screens/HomeScreen";
import AddTransactionScreen from "./src/screens/AddTransactionScreen";
import StatsScreen from "./src/screens/StatsScreen";
import MonthlyStatsScreen from "./src/screens/MonthlyStatsScreen";
import EditTransactionScreen from "./src/screens/EditTransactionScreen";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <GlobalProvider>
        <NavigationContainer>
          <Stack.Navigator>
            {/* HOME SCREEN */}
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: "Dashboard" }}
            />

            {/* ADD TRANSACTION SCREEN */}
            <Stack.Screen
              name="AddTransaction"
              component={AddTransactionScreen}
              options={{ title: "Add Transaction" }}
            />

            {/* CATEGORY PIE CHART SCREEN */}
            <Stack.Screen
              name="Stats"
              component={StatsScreen}
              options={{ title: "Category Statistics" }}
            />

            {/* MONTHLY BAR CHART SCREEN */}
            <Stack.Screen
              name="MonthlyStats"
              component={MonthlyStatsScreen}
              options={{ title: "Monthly Analytics" }}
            />
            <Stack.Screen
              name="EditTransaction"
              component={EditTransactionScreen}
              options={{ title: "Edit Transaction" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </GlobalProvider>
    </PaperProvider>
  );
}
