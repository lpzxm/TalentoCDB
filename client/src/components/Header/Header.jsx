// import React from "react";
import { useEffect, useState } from "react"
import { NavBar } from "./HeaderDesktop";
import { MobileNavBar } from "./HeaderMobile";
export const Header = () => {

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

    return <>{isDesktop ? <NavBar /> : <MobileNavBar />}</>

}