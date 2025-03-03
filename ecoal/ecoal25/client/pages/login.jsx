import { NavLink } from "react-router";
export const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <NavLink to="/anytrypage">
                <button>login</button>
            </NavLink>
        </div>
    );
};
