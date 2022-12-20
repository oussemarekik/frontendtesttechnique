import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { CookiesProvider } from "react-cookie";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {Login} from "./pages/Login";
import {ListUsers} from "./pages/ListUsers";
import {Register} from "./pages/Register";
import {Modifier} from "./pages/Modifier";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>,
    },
    {
        path:"/list",
        element:<ListUsers/>,
    },
    {
        path:"/register",
        element:<Register/>
    },
    {
        path:"/add",
        element:<Register/>
    },
    {
        path:"/modifier/:id",
        element:<Modifier/>
    }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <CookiesProvider>

      <RouterProvider router={router} />
      </CookiesProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
