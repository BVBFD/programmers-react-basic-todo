import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: { name: "Lee Seong Eun", age: 34 },
  reducers: {
    changeUserInfo: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { changeUserInfo } = user.actions;

const stock = createSlice({
  name: "stock",
  initialState: [100, 200, 300],
  reducers: {},
});

const cart = createSlice({
  name: "cart",
  initialState: {
    cart: [
      { id: 0, title: "아메리카노", count: 1 },
      { id: 1, title: "카페라떼", count: 1 },
    ],
  },
  reducers: {
    plusCount: (state, action) => {
      const index = state.cart.findIndex(
        (coffee) => coffee.id === action.payload
      );
      state.cart[index].count += 1;
    },
    minusCount: (state, action) => {
      const index = state.cart.findIndex(
        (coffee) => coffee.id === action.payload
      );
      state.cart[index].count -= 1;

      if (state.cart[index].count === 0) {
        state.cart = state.cart.filter(
          (coffee) => coffee.id !== action.payload
        );
      }
    },
    addItem: (state, action) => {
      const isExisted = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (isExisted) {
        isExisted.count += 1;
      } else {
        state.cart.push({
          id: action.payload.id,
          title: action.payload.title,
          count: 1,
        });
      }
    },
  },
});

export const { plusCount, minusCount, addItem } = cart.actions;

const rootReducer = combineReducers({
  user: user.reducer,
  stock: stock.reducer,
  cart: cart.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootStateType = ReturnType<typeof store.getState>;
export default store;
