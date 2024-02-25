// import React from 'react';
import ReactDOM from 'react-dom/client'
import { Welcome } from './pages/Welcome/welcome.jsx';
import { Login } from './pages/Login/login.jsx';
import { Log_cat } from './pages/RegistrarCategoria/log_cat.jsx'
import { Reg_bkb } from './pages/Registrar_BKB/Reg_bkb.jsx';
import RegisterCategory from './pages/ListasCategoria/ListaCategoria.jsx';
import "./index.css";
import { createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
      <Welcome />
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
  path: "/add_category",
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
{
  path: "/RegisterCategory",
  element:(
    <>
    <RegisterCategory />
    </>
  )
},
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)