import { useEffect } from "react";
import { useSession } from "../../hooks/useSession"
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children, needLogged = true }) => {
  const navigate = useNavigate();
  const { usuario } = useSession();

  useEffect(() => {
    console.log(usuario)
    if (!usuario.id && needLogged) return navigate("/login");

    if (usuario.id && !needLogged) return navigate("/redirect")

  }, [])

  return children
}

export default ProtectedRoute