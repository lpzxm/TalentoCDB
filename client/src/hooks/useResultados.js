import { useState, useEffect } from "react";
import { clientAxios } from "../config/clientAxios";

const useResultados = (id) => {
  const [data, setCategoria] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoria = async () => {
      try {
        const response = await clientAxios(`/jugadores/rubrica/${id}/`);
        setCategoria(response.data);
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

export { useResultados };
