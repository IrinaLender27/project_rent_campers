import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav>
      <ul className={css.navigationList}>
        <li className={css.navigationItems}>
          <NavLink>Home</NavLink>
          <NavLink>Catalog</NavLink>
          <NavLink>Favorits</NavLink>
        </li>
      </ul>
    </nav>
  );
};
