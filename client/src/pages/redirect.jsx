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
      navigate("/atleta/resultados");
      return
    }
    if (usuario.rol == "Admin") {
      navigate("/admin/menuOpciones");
      return
    }
    navigate("/")
  }, [usuario]);

  return <div></div>;
};

export default Redirect;