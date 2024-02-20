import React from 'react';
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import { Login } from './pages/login.jsx';
import { Form } from './pages/form.jsx';
import "./index.css";
import { createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
      <App />
      </>
    ),
  },
{
  path: "/login",
  element: (
    <>
      <Login />
    </>
  )
},
{
path: "/form",
element: (
  <>
    <Form />
  </>
)
}
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)