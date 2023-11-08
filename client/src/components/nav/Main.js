import { NavLink } from "react-router-dom";

export default function Main() {
  return (
    <div className="nav">
      <NavLink to="/" className="nav-link" aria-current="page">
        Home
      </NavLink>
      <NavLink to="/login" className="nav-link">
        Login
      </NavLink>
      <NavLink to="/register" className="nav-link">
        Register
      </NavLink>
    </div>
  );
}
