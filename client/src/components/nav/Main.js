import { NavLink } from "react-router-dom";

export default function Main() {
  return (
    <div className="nav d-flex justify-content-between lead">
      <NavLink to="/" className="nav-link" aria-current="page">
        Home
      </NavLink>
      <NavLink to="/login" className="nav-link">
        Login
      </NavLink>
      <NavLink to="/register" className="nav-link">
        Register
      </NavLink>

      <div className="dropdown">
        <li>
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
            User
          </a>
          <ul className="dropdown-menu">
            <li>
              <NavLink className="nav-link" to="/dashboard">
                Dashboard
              </NavLink>
            </li>
            <li>
              <a className="nav-link">Logout</a>
            </li>
          </ul>
        </li>
      </div>
    </div>
  );
}
