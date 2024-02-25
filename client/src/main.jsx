// import React from 'react';
import ReactDOM from 'react-dom/client'
import { Welcome } from './pages/Welcome/welcome.jsx';
import { Login } from './pages/Login/login.jsx';
import { RegisterCategory } from './pages/Register/RegistrarCategoria/log_cat.jsx';
import { Reg_bkb } from './pages/Register/RegistrarDeporte/Reg_bkb.jsx';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import "./index.css";

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
    <RegisterCategory />
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