// import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import "./index.css";

// Importaciones componentes
import { Header } from './components/Header/Header';
import { Welcome } from './pages/Welcome/welcome';
import { Login } from './pages/Login/login';
import { Home } from './pages/Home/home';
import { Players } from './pages/ListasCategoria/ListaCategoria';
import { ReviewPlayer } from './pages/Register/CalificarRubrica/ReviewPlayer';
import { RegisterCategory } from './pages/Register/RegistrarCategoria/log_cat';
import { ViewCategories } from './pages/Register/RegistrarDeporte/Reg_bkb';
import { NewField } from './pages/Tabla_Resultados/N_campo/N_campo';
import { RegisterAthlete } from './pages/Register/Registrar_Atleta/RegisterAthlete.jsx';
// import { Registrar_Rubrica } from './pages/Registrar_Rubrica/Registrar_Rubrica';
import { Tabla_Resultados} from './pages/Tabla_Resultados/Tabla_Resultados';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
      <Welcome/>
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
      <Login/>
      </>
    ),
  },
  {
    path: "/home",
    element: (
      <>
      <Header/>
      <Home/>
      </>
    ),
  },
  {
    path: "/register_category",
    element: (
      <>
      <RegisterCategory/>
      </>
    ),
  },
  {
    path: "/players",
    element: (
      <>
      <Players/>
      </>
    ),
  },
  {
    path: "/view_categories",
    element: (
      <>
      <ViewCategories/>
      </>
    ),
  },
  {
    path: "/review_player",
    element: (
      <>
      <ReviewPlayer/>
      </>
    ),
  },
  {
    path: "/register_rubric/newField",
    element: (
      <>
      <NewField/>
      </>
    ),
  },
  {
    path: "/RegisterAthlete",
    element: (
      <>
      <Header/>
      <RegisterAthlete/>
      </>
    ),
  },
  // {
  //   path: "/register_rubric",
  //   element: (
  //     <>
  //     <Registrar_Rubrica/>
  //     </>
  //   ),
  // },
  {
    path: "/results",
    element: (
      <>
      <Tabla_Resultados/>
      </>
    ),
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
