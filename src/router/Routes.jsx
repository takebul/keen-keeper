import React from "react";
import { createBrowserRouter } from "react-router";
import Homepage from "../pages/homepage/Homepage";
import RootLayout from "../layout/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
    ],
    errorElement: <h2>Data is Not Found</h2>,
  },
]);

export default router;
