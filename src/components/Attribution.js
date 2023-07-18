import "./Attribution.css";
import { Link } from "react-router-dom";

const Attribution = () => {
    return (
        <div className="attribution">
            Challenge by{" "}
            <Link
                to="https://www.frontendmentor.io?ref=challenge"
                target="_blank"
            >
                Frontend Mentor
            </Link>
            . Coded by <Link to="/">Leghemo Precious</Link>.
        </div>
    );
};

export default Attribution;
