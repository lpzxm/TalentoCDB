import { Link } from "react-router-dom";

export const NavButton = ({ to, activeLink, activeDeskLink, children }) => {

    const linkStyle = {
        nonActiveMob: "p-2 ease-in-out duration-100",
        activeMob: "w-fit p-2 bg-orange-600 rounded-2xl ease-in-out duration-100",

        nonActive: "hover:border-b-4 border-black transition-border ease-in-out duration-100",
        active: "border-b-4 border-black transition ease-in-out",
    };

    return (
        <Link
            to={to}
            className={`${activeLink === to ? linkStyle.activeMob : linkStyle.nonActiveMob} ${activeDeskLink === to ? linkStyle.active : linkStyle.nonActive}`}
        >
            <div>{children}</div>
        </Link>

    );
}