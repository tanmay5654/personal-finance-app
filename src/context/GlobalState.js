import React, { createContext, useReducer, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
  transactions: [],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Load transactions from storage
  useEffect(() => {
    async function loadData() {
      try {
        const saved = await AsyncStorage.getItem("transactions");
        if (saved !== null) {
          dispatch({
            type: "SET_TRANSACTIONS",
            payload: JSON.parse(saved),
          });
        }
      } catch (err) {
        console.log("Error loading data:", err);
      }
    }
    loadData();
  }, []);

  // Save transactions on change
  useEffect(() => {
    async function saveData() {
      try {
        await AsyncStorage.setItem(
          "transactions",
          JSON.stringify(state.transactions)
        );
      } catch (err) {
        console.log("Error saving data:", err);
      }
    }
    saveData();
  }, [state.transactions]);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
