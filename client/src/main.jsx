import React from 'react';
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import { Login } from './pages/login.jsx';
import { Form } from './pages/form.jsx';
import {Home} from './pages/home.jsx'
import { RegistrarRubrica } from './pages/regisrubri.jsx';
import { Log_cat } from './pages/log_cat.jsx'
import "./index.css";
import "./formstyles.css"
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
},
{
  path: "/home",
  element:(
    <>
    <Home/>
    </>
  )
},
{
  path: "/regisrubri",
  element:(
    <>
    <RegistrarRubrica/>
    </>
  )
},
{
  path: "/Log_cat",
  element:(
    <>
    <Log_cat />
    </>
  )
}
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)