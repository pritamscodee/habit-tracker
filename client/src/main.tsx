import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout";

import { Toaster } from "sonner";
import Homepage from "./pages/Homepage";
import AllHabitsPage from "./pages/AllHabitspage";

import PrivacyASCII from "./components/Privacy";
import Login from "./auth/login";
import Register from "./auth/register";





const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element:


          <Homepage />


        ,
      },
      {
        path: "/habits",
        element: <AllHabitsPage />
      },

      {
        path: '/privacy',
        element: <PrivacyASCII />
      }


      , {


        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />


      }
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>

    <RouterProvider router={router} />
    <Toaster position="top-center" />

  </StrictMode>

);
