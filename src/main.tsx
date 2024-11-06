import './index.scss';
import App from './App.tsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Pages/Layout/Layout.tsx';
import Toplam from './Pages/Toplam/Toplam.tsx';
import Haqimizda from './Pages/Haqimizda/Haqimizda.tsx';
import Kontakt from './Pages/Kontakt/Kontakt.tsx';
import Ikat from './Pages/Ikat/Ikat.tsx';
import { Bed } from '@mui/icons-material';
import "./service/i18n/i18n.ts"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "uy", // Bu yerda yo'lni o'zgartirdim
        element: <App />
      },
      {
        path: "toplam",
        element: <Toplam />,
      },
      {
        path: "haqimizda",
        element: <Haqimizda />
      },
      {
        path: "kontakt",
        element: <Kontakt />
      },
      {
        path: "/bed/:id",
        element:<Ikat/>
      },
      {
        path:"beds",
        element:<Bed/>
      }

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
