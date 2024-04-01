import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// Importaciones componentes
import { Header } from './components/Header/Header';
import { Welcome } from './pages/Welcome/welcome';
import { Login } from './pages/Login/login';
import { Home } from './pages/Home/home';
import { Players } from './pages/ListasCategoria/ListaCategoria';
import { Selecciones } from './pages/ListasCategoria/Selecciones.jsx';
import { MiembrosCat } from './pages/ListasCategoria/MiembrosCat.jsx';
import { AtletasSelec } from './pages/ListasCategoria/AtletasSeleccionados.jsx';
import { ReviewPlayer } from './pages/Register/CalificarRubrica/ReviewPlayer';
import { RegisterCategory } from './pages/Register/RegistrarCategoria/log_cat';
import { ViewCategories } from './pages/Register/RegistrarDeporte/Reg_bkb';
import { NewField } from './pages/Tabla_Resultados/N_campo/N_campo';
import { RegisterAthlete } from './pages/Register/Registrar_Atleta/RegisterAthlete.jsx';
import { Registrar_Rubrica } from './pages/Register/Registrar_Rubrica/Registrar_Rubrica.jsx';
import { Tabla_Resultados } from './pages/Tabla_Resultados/Tabla_Resultados';
import { Error404 } from './pages/404Error/404err.jsx';
import { FadeIn } from './components/fadeIn/fadeIn.jsx';

const router = createBrowserRouter([
  {
    path: "*",
    element: (
      <>
        <Error404 />
      </>
    ),
  },
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
    ),
  },
  {
    path: "/home",
    element: (
      <>
        <FadeIn>
          <Header />
          <Home />
        </FadeIn>

      </>
    ),
  },
  {
    path: "/registrarCategoria",
    element: (
      <>
        <Header />
        <RegisterCategory />
      </>
    ),
  },
  {
    path: "/jugadores",
    element: (
      <>
        <Header />
        <Players />
      </>
    ),
  },
   {
    path: "/Selecciones",
    element: (
      <>
        <Header />
        <Selecciones />
      </>
    ),
  },
  {
    path: "/MiembrosCat",
    element: (
      <>
        <Header />
        <MiembrosCat />
      </>
    ),
  },
  {
    path: "/AtletasSelec",
    element: (
      <>
        <Header />
        <AtletasSelec />
      </>
    ),
  },
  {
    path: "/verCategorias",
    element: (
      <>
        <Header />
        <ViewCategories />
      </>
    ),
  },
  {
    path: "/evaluarJugador",
    element: (
      <>
        <Header />
        <ReviewPlayer />
      </>
    ),
  },
  {
    path: "/registrarRubrica",
    element: (
      <>
        <Registrar_Rubrica />
      </>
    ),
  },
  {
    path: "/registrarRubrica/nuevoCampo",
    element: (
      <>
        <NewField />
      </>
    ),
  },
  {
    path: "/registrarAtleta",
    element: (
      <>
        <Header />
        <RegisterAthlete />
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
    path: "/resultados",
    element: (
      <>
        <Header />
        <Tabla_Resultados />
      </>
    ),
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
