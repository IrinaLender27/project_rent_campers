import PropTypes from "prop-types";
import { sprite } from "../../../assets/icons";
import css from "./BaseModal.module.css";
import Modal from "react-modal";

export const BaseModal = ({ isOpen, onClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onClose()}
      className={css.modalContent}
      ariaHideApp={false}
      overlayClassName={css.overlay}
    >
      <button className={css.button} onClick={() => onClose()}>
        <svg
          className={css.svg}
          width="32"
          height="32"
          style={{ fill: "none", stroke: "var(--color-dark)" }}
        >
          <use xlinkHref={`${sprite}#icon-close`}></use>
        </svg>
      </button>
      {children}
    </Modal>
  );
};
BaseModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};
