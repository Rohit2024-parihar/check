// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./postSlice";
import searchReducer from "./searchSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postReducer,
    searchTerm: searchReducer
  }
});
