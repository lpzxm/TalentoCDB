import { useState, useEffect } from "react";
import axios from "axios";
import { clientAxios } from "../config/clientAxios";

const useCategoriaDeporte = (idDeporte, idCategoria) => {
  const [categoria, setCategoria] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoria = async () => {
      try {
        const response = await clientAxios(
          `/deportes/${idDeporte}/categorias/${idCategoria}`
        );
        setCategoria(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoria();
  }, [idDeporte, idCategoria]);

  return { categoria, loading, error };
};

export { useCategoriaDeporte };
