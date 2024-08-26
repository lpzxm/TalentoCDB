import { useState, useEffect } from "react";
import { clientAxios } from "../config/clientAxios";

const useDeporteId = (id) => {
    const [data, setDeportes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDeportes = async () => {
            try {
                const response = await clientAxios.get("/deportes/" + id);
                setDeportes(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchDeportes();
    }, []);

    return { data, loading, error };
};

export { useDeporteId };