import { useEffect, useRef } from "react";

export const FadeIn = ({ children }) => {

    const fadeRef = useRef(null);

    useEffect(() => {


        const fadeIN = () => {
            let opacity = 0;

            const intervalID = setInterval(() => {
                if (opacity < 1) {
                    opacity = opacity + 0.1;
                    fadeRef.current.style.opacity = opacity;
                } else {
                    clearInterval(intervalID)
                }
            }, 30)
        };

        fadeIN();

    }, []);

    return (
        <div ref={fadeRef}>
            {children}
        </div>
    );
    
}