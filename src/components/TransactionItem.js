import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, Card } from "react-native-paper";
import { GlobalContext } from "../context/GlobalState";

export default function TransactionItem({ item, navigation }) {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text variant="titleMedium">{item.text}</Text>
        <Text>Amount: €{item.amount.toFixed(2)}</Text>
        <Text>Category: {item.category}</Text>
      </Card.Content>

      <Card.Actions>
        <Button
          onPress={() =>
            navigation.navigate("EditTransaction", { transaction: item })
          }
        >
          Edit
        </Button>

        <Button onPress={() => deleteTransaction(item.id)} textColor="red">
          Delete
        </Button>
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 15,
    elevation: 2,
  },
});
