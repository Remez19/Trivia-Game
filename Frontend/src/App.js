import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import RootLayout from "./components/Pages/RootLayout";
import HomePage from "./components/Pages/HomePage";
import ErrorPage from "./components/Pages/ErrorPage";
import NewGamePage from "./components/Pages/NewGamePage";
import GamePage from "./components/Pages/GamePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <React.Suspense>
            <HomePage />
          </React.Suspense>
        ),
      },
      {
        path: "/new-game",
        element: (
          <React.Suspense>
            <NewGamePage />
          </React.Suspense>
        ),
      },
      {
        path: "/new-game/:category",
        element: (
          <React.Suspense>
            <GamePage />
          </React.Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
