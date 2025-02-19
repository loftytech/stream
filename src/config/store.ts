import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from '../slices/navigationSlice'
import profileReducer from '../slices/profileSlice'
import authReducer from '../slices/authSlice'
import createAppReducer from '../slices/createAppSlice'
import walletReducer from '../slices/walletSlice'

export const store = configureStore({
    reducer: {
        navigation: navigationReducer,
        profile: profileReducer,
        auth: authReducer,
        createApp: createAppReducer,
        wallet: walletReducer
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch