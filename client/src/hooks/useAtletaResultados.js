import { useState, useEffect } from "react";
import { clientAxios } from "../config/clientAxios";
import { useSession } from "./useSession";

const useAtletaResultados = () => {
  const [data, setCategoria] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { usuario } = useSession();

  useEffect(() => {
    const fetchCategoria = async () => {
      try {
        const response = await clientAxios(`/jugadores/${usuario.id}/`);
        setCategoria(response.data.categories_joined[0].category.sport.rubricFields);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoria();
  }, []);

  return { data, loading, error };
};

export { useAtletaResultados };
