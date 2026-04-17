import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout";

import { Toaster } from "sonner";
import Homepage from "./pages/Homepage";
import AllHabitsPage from "./pages/AllHabitspage";
import Plannerai from "./pages/Ai_planner";
import PrivacyASCII from "./components/Privacy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Homepage />,
      },
      {
        path: "/habits",
        element: <AllHabitsPage />,
      },
      {
        path: "/planner",
        element: <Plannerai />,
      },
      {
        path:'/privacy',
        element:<PrivacyASCII/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster position="top-center" />
  </StrictMode>,
);
