import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import { GlobalContext } from "../context/GlobalState";

export default function EditTransactionScreen({ route, navigation }) {
  const { transaction } = route.params; // Receive transaction from navigation
  const { editTransaction } = useContext(GlobalContext);

  const [text, setText] = useState(transaction.text);
  const [amount, setAmount] = useState(transaction.amount.toString());
  const [category, setCategory] = useState(transaction.category);

  const onSave = () => {
    editTransaction({
      id: transaction.id,
      text,
      amount: parseFloat(amount),
      category,
    });

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text variant="titleLarge" style={styles.header}>
        Edit Transaction
      </Text>

      <TextInput
        label="Description"
        value={text}
        mode="outlined"
        onChangeText={setText}
        style={styles.input}
      />

      <TextInput
        label="Amount (€)"
        value={amount}
        mode="outlined"
        keyboardType="numeric"
        onChangeText={setAmount}
        style={styles.input}
      />

      <Text style={styles.label}>Category</Text>

      <View style={styles.pickerWrapper}>
        <Picker selectedValue={category} onValueChange={setCategory}>
          <Picker.Item label="Food" value="Food" />
          <Picker.Item label="Rent" value="Rent" />
          <Picker.Item label="Shopping" value="Shopping" />
          <Picker.Item label="Travel" value="Travel" />
          <Picker.Item label="Bills" value="Bills" />
          <Picker.Item label="Salary" value="Salary" />
          <Picker.Item label="Groceries" value="Groceries" />
        </Picker>
      </View>

      <Button
        mode="contained"
        onPress={onSave}
        style={styles.saveButton}
      >
        Save Changes
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  header: { marginBottom: 20, fontWeight: "bold" },
  input: { marginBottom: 15 },
  label: { fontSize: 16, marginBottom: 5, fontWeight: "600" },
  pickerWrapper: {
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    overflow: "hidden",
  },
  saveButton: {
    paddingVertical: 5,
  },
});
