import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Homepage from "./pages/homepage/Homepage.jsx";
import { RouterProvider } from "react-router";
import router from "./router/Routes.jsx";
import FriendContextProvider from "./context/FriendContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FriendContextProvider>
      <RouterProvider router={router} />
    </FriendContextProvider>
  </StrictMode>,
);
