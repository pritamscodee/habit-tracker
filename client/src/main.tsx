import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import Layout from './components/Layout';
import Home from './components/HomePage';
import Stats from './components/Stats';
import Habits from './components/Habits';
import { Toaster } from 'sonner';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/habits',
        element: <Habits />,
      },
      {
        path: '/stats',
        element: <Stats />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster position="top-center" />
  </StrictMode>,
);
