import React from "react";
import { createBrowserRouter } from "react-router";
import Homepage from "../pages/homepage/Homepage";
import RootLayout from "../layout/RootLayout";
import Timeline from "../pages/timeline/Timeline";
import Stat from "../components/homepage/Stat";
import Stats from "../pages/stats/Stats";
import FriendDetails from "../ui/FriendDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/timeline",
        element: <Timeline />,
      },
      {
        path: "/stats",
        element: <Stats />,
      },
      {
        path: "/details/:id",
        element: <FriendDetails />,
      },
    ],
    errorElement: <h2>Data is Not Found</h2>,
  },
]);

export default router;
