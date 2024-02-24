// import React from 'react';
import ReactDOM from 'react-dom/client'
import { Login } from './pages/Welcome/welcome.jsx';
import { Form } from './pages/Login/form.jsx';
import { Log_cat } from './pages/RegistrarCategoria/log_cat.jsx'
import { Reg_bkb } from './pages/RegistrarCategoria/Reg_bkb.jsx'
import "./index.css";
import { createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
      <Login />
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
  path: "/log_cat",
  element:(
    <>
    <Log_cat />
    </>
  )
},
{
  path: "/Reg_bkb",
  element:(
    <>
    <Reg_bkb />
    </>
  )
},
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)