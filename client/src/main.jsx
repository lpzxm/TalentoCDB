import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { FadeIn } from './components/ui/fadeIn/fadeIn.jsx';
import { BackButton } from './components/ui/goBack/GoBack.jsx';
import "./index.css";
// Importaciones componentes - publicos
import { SessionProvider } from './context/Session.jsx';
import Redirect from "./pages/redirect.jsx"
import ProtectedRoute from "./components/routes/ProtectedRoute.jsx"
import { Header } from './components/Header/Header';
import { Welcome } from './pages/public/Welcome/welcome.jsx';
import { Login } from './pages/public/Login/login';
import { Error404 } from './pages/public/404Error/404err.jsx';
import Translate from './components/ui/translate/translate.jsx';
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
import { EditCategory } from './pages/logged_in/Coach/Evaluaciones/RegistrarCategoria/editarCategoria.jsx';
import { PerfilCoach } from './pages/logged_in/Coach/Perfil/perfilcoach.jsx'
import { ViewCategories } from './pages/logged_in/Coach/Jugadores/ListCategory.jsx';
import { RegisterAthlete } from './pages/logged_in/Coach/Evaluaciones/Registrar_Atleta/RegisterAthlete.jsx';
import { Registrar_Rubrica } from './pages/logged_in/Coach/Evaluaciones/Registrar_Rubrica/Registrar_Rubrica.jsx';
import { EditAthlete } from './pages/logged_in/Coach/Evaluaciones/Registrar_Atleta/EditAthlete.jsx';
import { ObservationAthlete } from './pages/logged_in/Coach/Evaluaciones/Registrar_Observacion/ObservationAthlete.jsx';
//  Admin
import { AdminOptions } from './pages/logged_in/Admin/AdminOptions.jsx';
import { AddDeportes } from './AddDeportes.jsx';
import { RegisterCoach } from './RegisterCoach.jsx';
import AdminRoute from './components/routes/AdminRoute.jsx';
import { EditDeporte } from './EditDeporte.jsx';
import { AdminPlayerProfile } from './AdminPlayerProfile.jsx';

const router = createBrowserRouter([
  // Rutas publicas - acceso libre
  {
    path: "*",
    element: (
      <>
        <Error404 />
      </>
    ),
  },
  {
    path: "/redirect",
    element: <Redirect />
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
      <ProtectedRoute needLogged={false}>
        <Translate />
        <Login />
      </ProtectedRoute>
    ),
  },
  // Fin de rutas publicas
  //
  //Inicio de rutas del atleta
  {
    path: "/atleta/perfilJugador",
    element: (
      <>
        <Header />
        <Translate />
        <PlayerProfile />
      </>
    ),
  },
  {
    path: "/atleta/resultados",
    element: (
      <>
        <Header />
        <Translate />
        <PlayerResults />
      </>
    ),
  },
  // Fin de rutas del atleta
  //
  // Inicio de rutas del Coach - Privadas
  {
    path: "/home",
    element: (
      <ProtectedRoute needLogged={true}>
        <Header />
        <Home />
        <Translate />
      </ProtectedRoute>
    ),
  },
  {
    path: "/coach/perfil",
    element: (
      <ProtectedRoute needLogged={true}>
        <Header />
        <PerfilCoach />
        <Translate />
        <BackButton />
      </ProtectedRoute>
    )
  },
  {
    path: "/coach/registrarRubrica",
    element: (
      <ProtectedRoute needLogged={true}>
        <Header />
        <Translate />
        <Registrar_Rubrica />
        <BackButton />
      </ProtectedRoute>
    ),
  },
  /*  {
      path: "/coach/registrarRubrica/nuevoCampo",
      element: (
        <>
  
            <Header />
            <BackButton />
        </>
      ),
    },*/
  {
    path: "/coach/categorias",
    element: (
      <ProtectedRoute needLogged={true}>
        <Header />
        <Translate />
        <ViewCategories />
        <BackButton />
      </ProtectedRoute>
    ),
  },
  {
    path: "/coach/categorias/editar/:id",
    element: (
      <ProtectedRoute needLogged={true}>
        <Header />
        <Translate />
        <EditCategory />
        <BackButton />
      </ProtectedRoute>
    ),
  },
  {
    path: "/coach/categorias/nuevaCategoria",
    element: (
      <ProtectedRoute needLogged={true}>
        <Header />
        <Translate />
        <RegisterCategory />
        <BackButton />
      </ProtectedRoute>
    ),
  },
  {
    path: "/coach/categorias/jugadores/:id",
    element: (
      <ProtectedRoute needLogged>
        <Header />
        <Translate />
        <AtletasSelec />
        <BackButton />
      </ProtectedRoute>
    ),
  },
  {
    path: "/coach/categoria/:id/jugadores/nuevoJugador",
    element: (
      <ProtectedRoute needLogged={true}>
        <Header />
        <Translate />
        <RegisterAthlete />
        <BackButton />
      </ProtectedRoute>
    ),
  },
  {
    path: "/coach/editarJugador/:id",
    element: (
      <ProtectedRoute needLogged={true}>
        <Header />
        <Translate />
        <EditAthlete />
        <BackButton />
      </ProtectedRoute>
    ),
  },
  {
    path: "/evaluarJugador",
    element: (
      <>
        <Header />
        <ReviewPlayer />
        <BackButton />
      </>
    ),
  },
  /*{
      path: "/jugadores",
     element: (
       <>
 
           <Header />
           <Players />
 
       </>
     ),
   }, 
  idk, hay que ver para que es esta o la logica xd*/
  // Fin de rutas del coach - privadas
  //
  // Rutas del Admin - Privadas
  {
    path: "/admin",
    element: <AdminRoute />,
    children: [
      {
        path: "selecciones",
        element: (
          <>
            <Header />
            <Selecciones />
            <BackButton />
          </>
        ),
      },
      {
        path: "MiembrosCat/:id_deporte/:id_categoria",
        element: (
          <>
            <Header />
            <MiembrosCat />
            <BackButton />
          </>
        ),
      },
      {
        path: "home",
        element: (
          <>
            <Header />
            <AdminOptions />
          </>
        ),
      },
      {
        path: "nuevoDeporte",
        element: (
          <>
            <Header />
            <AddDeportes />
            <BackButton />
          </>
        ),
      },
      {
        path: "editarDeporte/:id",
        element: (
          <>
            <Header />
            <EditDeporte />
            <BackButton />
          </>
        ),
      },
      {
        path: "perfilAtleta/:id",
        element: (
          <>
            <Header />
            <AdminPlayerProfile />
            <BackButton />
          </>
        )
      },
      {
        path: "registerCoach",
        element: (
          <>
            <Header />
            <RegisterCoach />
            <BackButton />
          </>
        ),
      },
      {
        path: "observacionAtleta",
        element: (
          <>
            <Header />
            <ObservationAthlete />
            <BackButton />
          </>
        )
      },
      {
        path: "observacionCoach",
        element: (
          <>
            <Header />
            <ObservationAthlete type="coach" />
            <BackButton />
          </>
        )
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SessionProvider>
      <RouterProvider router={router} />
    </SessionProvider>
  </React.StrictMode>
)