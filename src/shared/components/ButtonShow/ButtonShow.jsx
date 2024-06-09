import PropTypes from "prop-types";
import css from "./ButtonShow.module.css";
export const ButtonShow = ({ text, onClick }) => {
  return (
    <button className={css.buttonShow} type="button" onClick={onClick}>
      <p className={css.text}>{text}</p>
    </button>
  );
};

ButtonShow.propTypes = {
  text: PropTypes.string,
}.isRequired;
