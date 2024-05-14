import { Link } from "react-router-dom"

export function BtnProps(props) {
    return (
        <Link to={props.to}>
            <button className={props.className}>
                <p>{props.text}</p>
            </button>
        </Link>
    )
}