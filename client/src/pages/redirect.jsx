import { useEffect } from "react";
import { useSession } from "../hooks/useSession";
import { useNavigate } from "react-router-dom";

const Redirect = () => {
  const { usuario } = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    if (usuario.rol == "Coach") {
      navigate("/home");
      return
    }
    if (usuario.rol == "Jugador") {
      navigate("/atleta/perfilJugador");
      return
    }
    navigate("/")
  }, [usuario]);

  return <div>Redirect</div>;
};

export default Redirect;