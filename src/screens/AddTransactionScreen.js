import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";  // ✅ Expo-compatible picker
import { GlobalContext } from "../context/GlobalState";

export default function AddTransactionScreen({ navigation }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = () => {
    if (!text || !amount || !category) return;

    addTransaction({
      id: Math.random(),
      text,
      amount: parseFloat(amount),
      category,
    });

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* DESCRIPTION */}
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Enter item name"
      />

      {/* AMOUNT */}
      <Text style={styles.label}>Amount (€)</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
        placeholder="Enter amount"
      />

      {/* CATEGORY PICKER */}
      <Text style={styles.label}>Category</Text>
      <View style={styles.pickerWrapper}>
        <Picker selectedValue={category} onValueChange={(value) => setCategory(value)}>
          <Picker.Item label="Select Category" value="" />
          <Picker.Item label="Food" value="Food" />
          <Picker.Item label="Rent" value="Rent" />
          <Picker.Item label="Shopping" value="Shopping" />
          <Picker.Item label="Travel" value="Travel" />
          <Picker.Item label="Bills" value="Bills" />
          <Picker.Item label="Salary" value="Salary" />
          <Picker.Item label="Groceries" value="Groceries" />
        </Picker>
      </View>

      {/* SUBMIT BUTTON */}
      <Button title="Add Transaction" onPress={onSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  label: { marginTop: 20, fontSize: 18, fontWeight: "600" },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    overflow: "hidden", // Makes picker look clean
  },
});
