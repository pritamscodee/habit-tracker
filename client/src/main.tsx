import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout";
import { ClerkProvider } from '@clerk/react'
import { Toaster } from "sonner";
import Homepage from "./pages/Homepage";
import AllHabitsPage from "./pages/AllHabitspage";

import PrivacyASCII from "./components/Privacy";
import { Protected } from "./components/Protected";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element:   
        <Protected>

          <Homepage />
        </Protected>
        
        ,
      },
      {
        path: "/habits",
        element: <AllHabitsPage />,
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
     <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}>
    <RouterProvider router={router} />
    <Toaster position="top-center" />
     </ClerkProvider>
  </StrictMode>
 
);
