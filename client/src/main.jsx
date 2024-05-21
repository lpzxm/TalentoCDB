import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FadeIn } from './components/fadeIn/fadeIn.jsx';
import "./index.css";

// Importaciones componentes - publicos
import { Header } from './components/Header/Header';
import { Welcome } from './pages/public/Welcome/welcome.jsx';
import { Login } from './pages/public/Login/login';
import { Error404 } from './pages/public/404Error/404err.jsx';

// Atleta - Rutas privadas
import { PlayerResults } from './pages/logged_in/Atleta/Results.jsx';
import { PlayerProfile } from './pages/logged_in/Atleta/PlayerProfile.jsx';


// Coach - Rutas privadas
import { Home } from './pages/public/Home/home.jsx';
import { Selecciones } from './pages/logged_in/Admin/Selecciones.jsx';
import { MiembrosCat } from './pages/ListasCategoria_revisar/MiembrosCat.jsx';
import { AtletasSelec } from './pages/logged_in/Coach/Jugadores/AtletasSeleccionados.jsx';
import { ReviewPlayer } from './pages/logged_in/Coach/Evaluaciones/CalificarRubrica/ReviewPlayer.jsx';

import { RegisterCategory } from './pages/logged_in/Coach/Evaluaciones/RegistrarCategoria/NuevaCategoria.jsx';
import { PerfilCoach } from './pages/logged_in/Coach/Perfil/perfilcoach.jsx'

import { ViewCategories } from './pages/logged_in/Coach/Jugadores/ListCategory.jsx';
import { RegisterAthlete } from './pages/logged_in/Coach/Evaluaciones/Registrar_Atleta/RegisterAthlete.jsx';
import { Registrar_Rubrica } from './pages/logged_in/Coach/Evaluaciones/Registrar_Rubrica/Registrar_Rubrica.jsx';
import { Tabla_Resultados } from './pages/Tabla_Resultados/Tabla_Resultados';



const router = createBrowserRouter([
  // Rutas publicas - acceso libre
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
  // Fin de rutas publicas
  //
  //Inicio de rutas del atleta
  {
    path: "/atleta/perfilJugador",
    element: (
      <>
        <FadeIn>
          <Header />
          <PlayerProfile />
        </FadeIn>
      </>
    ),
  },
  {
    path: "/atleta/resultados",
    element: (
      <>
        <FadeIn>
          <Header />
          <PlayerResults />
        </FadeIn>
      </>
    ),
  },
  // Fin de rutas del atleta
  //
  // Inicio de rutas del Coach - Privadas
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
    path: "/coach/perfil",
    element:(
      <>
          <FadeIn>
          <Header />
          <PerfilCoach/>
        </FadeIn>
      </>
    )
  },
  {
    path: "/coach/registrarRubrica",
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
    path: "/coach/registrarRubrica/nuevoCampo",
    element: (
      <>
        <FadeIn>
          <Header />
        </FadeIn>
      </>
    ),
  },
  {
    path: "/coach/categorias",
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
    path: "/coach/categorias/nuevaCategoria",
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
    path: "/coach/categorias/volleyball/jugadores",
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
    path: "/coach/categoria/volleyball/jugadores/nuevoJugador",
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
  
  /*{
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
  idk, hay que ver para que es esta o la logica xd*/
  // Fin de rutas del coach - privadas
  //
  // Rutas del Admin - Privadas
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
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
