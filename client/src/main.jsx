// import React from 'react';
import ReactDOM from 'react-dom/client';
import { Welcome } from './pages/Welcome/welcome.jsx';
import { Registrar_Rubrica } from './pages/Registrar_Rubrica/Registrar_Rubrica.jsx';
import { N_campo } from './pages/N_campo/N_campo.jsx';
import { Tabla_Resultados } from './pages/Tabla_Resultados/Tabla_Resultados.jsx';
import { Login } from './pages/Login/login.jsx';
import { Log_cat } from './pages/RegistrarCategoria/log_cat.jsx';
import {Home} from './pages/home.jsx';
import { EvaluacionUsu } from './pages/Evaluación/regisrubri.jsx';
import RegisterCategory from './pages/ListasCategoria/ListaCategoria.jsx';
import "./index.css";
import "./formstyles.css"
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
    path:"/home",
    element:(
      <>
      <Home/>
      </>
    ),
  },
  {
    path: "/EvaluacionUsu",
    element:(
      <>
      <EvaluacionUsu/>
      </>
    )
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
  {
  path: "/Registrar_rubrica",
  element:(
    <>
    <Registrar_Rubrica />
    </>
  )
},
{
  path: "/Tabla_Resultados",
  element:(
    <>
    <Tabla_Resultados />
    </>
  )
},
{
  path: "/N_campo",
  element:(
    <>
    <N_campo />
    </>
  )
},
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
