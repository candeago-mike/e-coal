import { NavLink } from "react-router";
export const MainPage = () => {
    return (
        <div>
            <div>
                <h1>mainPage</h1>
            </div>
            <NavLink to="/">
                <button>logout</button>
            </NavLink>
        </div>
    );
};
