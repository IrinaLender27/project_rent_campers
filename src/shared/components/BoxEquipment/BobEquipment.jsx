import { sprite } from "../../../assets/icons";
import PropTypes from "prop-types";
import css from "./BoxEquipment.module.css";
export const BoxEquipment = ({ text, icon }) => {
  return (
    <div className={css.box}>
      <svg className={css.icon} width={20} height={20}>
        <use xlinkHref={`${sprite}${icon}`}></use>
      </svg>
      <p className="text">{text.charAt(0).toUpperCase() + text.slice(1)}</p>
    </div>
  );
};

BoxEquipment.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
}.isRequired;
