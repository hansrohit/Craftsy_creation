import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import { createSlice } from "@reduxjs/toolkit";
import persistStore from "redux-persist/es/persistStore";


const userSlice = createSlice({
  name: "user",
  initialState: {    
    name: "",
    email: "",
    admin: false,
    token: ""
  },
  reducers: {
    login: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.admin = action.payload.admin;
      state.token = action.payload.token;
    }
  }
});

export const { login } = userSlice.actions;

const persistConfig = {
  key: 'user',
  storage,
};


const persistedReducer = persistReducer(persistConfig, userSlice.reducer);


export const store = configureStore({
  reducer: {
    user: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


export const persistor = persistStore(store);

export const selectCurrentUser = (state) => state.user.name;
export const selectCurrenttoken = (state) => state.user.token;
export const selectCurrentEmail = (state) => state.user.email;
export const isAdmin =(state) => state.user.admin
