import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import RootLayout from "./components/Pages/RootLayout";
import HomePage from "./components/Pages/HomePage";
import ErrorPage from "./components/Pages/ErrorPage";

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
            <HomePage />
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
