import { clientAxios } from "../config/clientAxios";
import { createContext, useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
const SessionContext = createContext();

const obtenerPerfil = async (token) => {
    try {
        const configHeaders = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        const data = await clientAxios.get("/auth/perfil", configHeaders);
        return data;
    } catch (error) {
        return error;
    }
};

const SessionProvider = ({ children }) => {
    const [usuario, setUsuario] = useState({});
    const [loading, setLoading] = useState(true);

    const perfil = async () => {
        try {
            setLoading(true);
            const token = localStorage.getItem("token");
            const { data } = await obtenerPerfil(token ?? "");
            setUsuario(data.user);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    };

    const login = async (usuario) => {
        localStorage.setItem("token", usuario.token);
        await perfil();
    };
    const logout = () => {
        setUsuario({});
        localStorage.removeItem("token");
        window.location.href = "/";
    };

    useEffect(() => {
        perfil();
    }, []);



    if (loading) return (
        <>
            <div className="w-screen h-screen flex justify-center items-center">
                <TailSpin
                    visible={true}
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            </div>

        </>

    );

    return (
        <SessionContext.Provider
            value={{
                usuario,
                login,
                logout,
            }}
        >
            {children}
        </SessionContext.Provider>
    );
};

export { SessionContext, SessionProvider };