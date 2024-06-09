import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav>
      <ul className={css.navigationList}>
        <li className={css.navigationItems}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/catalog">Catalog</NavLink>
          <NavLink to="/favorites">Favorits</NavLink>
        </li>
      </ul>
    </nav>
  );
};
