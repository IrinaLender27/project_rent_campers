import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";
const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
export const Navigation = () => {
  return (
    <nav>
      <ul className={css.navigationList}>
        <li className={css.navigationItems}>
          <NavLink className={buildLinkClass} to="/">
            Home
          </NavLink>
          <NavLink to="/catalog" className={buildLinkClass}>
            Catalog
          </NavLink>
          <NavLink to="/favorites" className={buildLinkClass}>
            Favorits
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
