import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import userSlice from "../slices/userSlice.ts";

const persistConfig = {
    key: 'root',
    storage,
};

const combinerReducers = combineReducers({
    user: userSlice,
})

const persistedReducer = persistReducer(persistConfig, combinerReducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);

export type AppStore = typeof store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = AppStore['dispatch']
