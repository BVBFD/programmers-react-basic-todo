import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

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

// persistConfig 설정
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"], // 지속시킬 슬라이스를 설정합니다.
};

// persistedReducer 생성
const persistedReducer = persistReducer(persistConfig, rootReducer);

// configureStore 함수를 사용하여 store를 생성합니다.
const store = configureStore({
  reducer: persistedReducer,
});

// persistor를 생성합니다.
export const persistor = persistStore(store);

export type RootStateType = ReturnType<typeof store.getState>;
export default store;
