import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { type } from "os";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import Data_PL_Slice from "./slice/client";
import Clients_Slice from "./slice/client";

const persisConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  Data_PL_Slice: Data_PL_Slice.reducer,
  Clients_Slice: Clients_Slice.reducer,
});

const persistedReducer = persistReducer(persisConfig, rootReducer);

export const Store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export let persistor = persistStore(Store);
