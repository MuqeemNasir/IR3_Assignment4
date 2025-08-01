import { NavLink } from "react-router-dom";

const Header = () => (
  <header className="bg-dark text-light">
    <div className="container py-3">
      <h1 className="display-3 fw-medium">Todos</h1>
    </div>
    <nav className="container">
      <ul className="nav">
        <li className="nav-item">
          <NavLink to="/" className="nav-link text-primary">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/todos" className="nav-link text-primary">
            Todos
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link text-primary">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
