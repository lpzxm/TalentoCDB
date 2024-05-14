import { Link } from "react-router-dom";

export const NavButton = ({ to, activeLink, children }) => {

    const linkStyle = {
        nonActive: "p-2 ease-in-out duration-100",
        active: "w-fit p-2 bg-orange-600 rounded-2xl ease-in-out duration-100"
    };

    return (
        <Link
            to={to}
            className={activeLink === to ? linkStyle.active : linkStyle.nonActive}
        >
            <div>{children}</div>
        </Link>

    );
}