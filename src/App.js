// src/App.js
import React from "react";
import { Provider } from "react-redux";
import { store } from "./Store";
import Home from "./Home";
import Login from "./Login";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./SignUp";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Signup />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/home",
      element: <Home />
    }
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
