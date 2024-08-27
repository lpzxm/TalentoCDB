import { useState, useEffect } from "react";
import { clientAxios } from "../config/clientAxios";

const useRubricaEstudiante = (id) => {
  const [data, setCategoria] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoria = async () => {
      try {
        const response = await clientAxios(`/jugadores/${id}/`);
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

export { useRubricaEstudiante };
