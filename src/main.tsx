import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import App from './App'
import './index.css'
import { Auth0Provider } from "@auth0/auth0-react";
import { AUTH0_CALLBACK_URL, AUTH0_CLIENT_ID, AUTH0_DOMAIN } from 'src/lib/env';
import { Login } from './pages/login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: '/login',
    element: <Login />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Auth0Provider
      domain={AUTH0_DOMAIN}
      clientId={AUTH0_CLIENT_ID}
      redirectUri={AUTH0_CALLBACK_URL}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>
)
