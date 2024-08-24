import { useEffect, useState } from "react";
import TranslateDesk from "./dektoptranslate"; // Cambiado aquí
import TranslateMobi from "./mobiletranslate"; // Asegúrate de que esta ruta sea correcta

// Componente principal que se exporta por defecto
function Translate() {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const manageSize = () => {
            setIsDesktop(window.innerWidth >= 900);
        };

        manageSize();

        window.addEventListener("resize", manageSize);

        return () => {
            window.removeEventListener("resize", manageSize);
        };
    }, []);

    return (
        <>
            {isDesktop ? <TranslateDesk /> : <TranslateMobi />}
        </>
    );
}

export default Translate;
