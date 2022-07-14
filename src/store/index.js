// REDUX LOGIC
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
  showCounter: true,
  isAuthenticated: false,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "increment":
//       return {
//         counter: state.counter + 1,
//         showCounter: state.showCounter,
//       };

//     case "increase":
//       return {
//         counter: state.counter + action.amount,
//         showCounter: state.showCounter,
//       };

//     case "decrement":
//       return {
//         counter: state.counter - 1,
//         showCounter: state.showCounter,
//       };

//     case "toggle":
//       return {
//         showCounter: !state.showCounter,
//         counter: state.counter,
//       };

//     default:
//       return state;
//   }
//   // eslint-disable next-line
//   return state;
// };
