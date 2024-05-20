import { createSlice } from '@reduxjs/toolkit'

export const CATEGORIES = [
  "housing",
  "food",
  "transportation",
  "utilities",
  "clothing",
  "healthcare",
  "personal",
  "education",
  "entertainment",
];
const initialState = Object.fromEntries(
  CATEGORIES.map((category) => [category, []])
);

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: initialState,
  reducers: {
    addTransaction: (state, action) => {
      const { category } = action.payload;
      state[category].push(action.payload);
    },
    deleteTransaction: ( state, action) => {
      const { category, id } = action.payload;
      state[category] = state[category].filter(transaction => transaction.id != id)
      }    
    }
  }
);

export const selectTransactions = (state) => state.transactions;
export const selectFlattenedTransactions = (state) => Object.values(state.transactions).reduce((a, b) => [...a, ...b], []); //Flatterns the array of arrays into a single array


export const { addTransaction, deleteTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;
