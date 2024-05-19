import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FadeIn } from './components/fadeIn/fadeIn.jsx';
import "./index.css";

// Importaciones componentes - publicos
import { Header } from './components/Header/Header';
import { Welcome } from './pages/Welcome/welcome';
import { Login } from './pages/Login/login';


// Privados - Coach
import { Home } from './pages/Home/home.jsx';
import { Players } from './pages/ListasCategoria_revisar/ListaCategoria.jsx';
import { Selecciones } from './pages/ListasCategoria_revisar/Selecciones.jsx';
import { MiembrosCat } from './pages/ListasCategoria_revisar/MiembrosCat.jsx';
import { AtletasSelec } from './pages/ListasCategoria_revisar/AtletasSeleccionados.jsx';
import { ReviewPlayer } from './pages/logged_in/Coach/Evaluaciones/CalificarRubrica/ReviewPlayer.jsx';
import { RegisterCategory } from './pages/logged_in/Coach/Evaluaciones/RegistrarCategoria/NuevaCategoria.jsx';
import { ViewCategories } from './pages/logged_in/RegistrarDeporte/ListCategory.jsx';
import { RegisterAthlete } from './pages/logged_in/Coach/Evaluaciones/Registrar_Atleta/RegisterAthlete.jsx';
import { Registrar_Rubrica } from './pages/logged_in/Coach/Evaluaciones/Registrar_Rubrica/Registrar_Rubrica.jsx';
import { Tabla_Resultados } from './pages/Tabla_Resultados/Tabla_Resultados';
import { Error404 } from './pages/404Error/404err.jsx';

// Atleta
import { Profile } from './pages/logged_in/Atleta/Profile.jsx';

import { PlayerProfile } from './pages/logged_in/Atleta/PlayerProfile.jsx';

const router = createBrowserRouter([
  {
    path: "*",
    element: (
      <>
        <FadeIn>
          <Error404 />
        </FadeIn>
      </>
    ),
  },
  {
    path: "/",
    element: (
      <>
        <FadeIn>
          <Welcome />
        </FadeIn>

      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <FadeIn>
          <Login />
        </FadeIn>
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
        <FadeIn>
          <Header />
          <RegisterCategory />
        </FadeIn>
      </>
    ),
  },
  {
    path: "/jugadores",
    element: (
      <>
        <FadeIn>
          <Header />
          <Players />
        </FadeIn>

      </>
    ),
  },
  {
    path: "/Selecciones",
    element: (
      <>
        <FadeIn>
          <Header />
          <Selecciones />
        </FadeIn>
      </>
    ),
  },
  {
    path: "/MiembrosCat",
    element: (
      <>
        <FadeIn>
          <Header />
          <MiembrosCat />
        </FadeIn>
      </>
    ),
  },
  {
    path: "/AtletasSelec",
    element: (
      <>
        <FadeIn>
          <Header />
          <AtletasSelec />
        </FadeIn>
      </>
    ),
  },
  {
    path: "/verCategorias",
    element: (
      <>
        <FadeIn>
          <Header />
          <ViewCategories />
        </FadeIn>

      </>
    ),
  },
  {
    path: "/evaluarJugador",
    element: (
      <>
        <FadeIn>
          <Header />
          <ReviewPlayer />
        </FadeIn>
      </>
    ),
  },
  {
    path: "/registrarRubrica",
    element: (
      <>
        <FadeIn>
          <Header />
          <Registrar_Rubrica />
        </FadeIn>
      </>
    ),
  },
  {
    path: "/registrarRubrica/nuevoCampo",
    element: (
      <>
        <FadeIn>
          <Header />
        </FadeIn>
      </>
    ),
  },
  {
    path: "/registrarAtleta",
    element: (
      <>
        <FadeIn>
          <Header />
          <RegisterAthlete />
        </FadeIn>
      </>
    ),
  },
  {
    path: "/resultados",
    element: (
      <>
        <FadeIn>
          <Header />
          <Tabla_Resultados />
        </FadeIn>
      </>
    ),
  },
  {
    path: "/perfilAtleta",
    element: (
      <>
        <FadeIn>
          <Header />
          <PlayerProfile />
        </FadeIn>
      </>
    )
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
