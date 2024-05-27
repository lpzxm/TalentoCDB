import { Outlet, useNavigate } from "react-router-dom";
import { useSession } from "../../hooks/useSession";
import { useEffect, useState } from "react";

const RolRoute = ({rol}) => {
  const { usuario } = useSession();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (usuario.role != rol) {
      navigate("/redirect");
      return;
    }

    setAccess(true);
  }, [usuario]);

  if (!access) return <p>Identificando...</p>;

  return <Outlet />;
};

export default RolRoute;