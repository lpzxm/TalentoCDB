import { useEffect } from "react";
import { useSession } from "../../hooks/useSession"
import { Outlet, useNavigate } from "react-router-dom";

const AdminRoute = ({ children, needLogged = true }) => {
  const navigate = useNavigate();
  const { usuario } = useSession();

  useEffect(() => {
    console.log(usuario)
    // if (!usuario.id && needLogged) return navigate("/login");

    // if (usuario.id && !needLogged) return navigate("/redirect")

  }, [])

  return <Outlet/>
}

export default AdminRoute