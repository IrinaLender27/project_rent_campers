import css from "./CamperCard.module.css";
import PropTypes from "prop-types";
import { sprite } from "../../../assets/icons";
import { ButtonShow } from "../../../shared/components/ButtonShow/ButtonShow";
import { BaseModal } from "../../../shared/components/BaseModal/BaseModal";
import { useState } from "react";
import { Modal } from "../../modal/Modal/Modal";
import { Equipment } from "../Equipment/Equipment";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorits } from "../../../redux/campers/campersSelector";
import {
  deleteFavorites,
  setFavorites,
} from "../../../redux/campers/camperSlice";

export const CamperCard = ({ camper }) => {
  const [isOpen, setIsOpen] = useState(false);
  const favorites = useSelector(selectFavorits);
  const dispatch = useDispatch();

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const isFavorite = favorites.some((favorit) => favorit._id === camper._id);
  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(deleteFavorites(camper._id));
    } else {
      dispatch(setFavorites(camper));
    }
  };

  return (
    <div className={css.card}>
      <img
        src={camper.gallery[0]}
        alt={camper.name}
        width="290"
        height="310"
        className={css.image}
      />
      <div className={css.content}>
        <div className={css.topInfo}>
          <h2 className={css.title}>{camper.name}</h2>
          <div className={css.favorite}>
            <p className={css.price}>€{camper.price}.00</p>
            <button
              className={`${css.favoriteButton} ${
                isFavorite ? css.favoriteActive : ""
              }`}
              onClick={toggleFavorite}
            >
              <svg className={css.svg} width="20" height="20">
                <use xlinkHref={`${sprite}#icon-heart`}></use>
              </svg>
            </button>
          </div>
        </div>
        <div className={css.group}>
          <div className={css.reviews}>
            <svg width="16" height="16">
              <use xlinkHref={`${sprite}#icon-star`}></use>
            </svg>
            <p>
              {camper.rating}({camper.reviews.length} Reviews)
            </p>
          </div>
          <div className={css.reviews}>
            <svg className={css.svg} width="16" height="16">
              <use xlinkHref={`${sprite}#icon-map`}></use>
            </svg>
            <p className={css.location}>{camper.location}</p>
          </div>
        </div>
        <p className={css.description}>
          {camper.description.substring(0, 100)}...
        </p>
        <Equipment camper={camper} />
        <ButtonShow text={"Show more"} onClick={openModal} />
      </div>
      <BaseModal isOpen={isOpen} onClose={closeModal}>
        <Modal camper={camper} />
      </BaseModal>
    </div>
  );
};
CamperCard.propTypes = {
  camper: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    location: PropTypes.string,
    price: PropTypes.number,
    gallery: PropTypes.array,
    adults: PropTypes.number,
    transmission: PropTypes.string,
    engine: PropTypes.string,
    rating: PropTypes.string,
    reviews: PropTypes.array,
    kitchen: PropTypes.number,
    details: PropTypes.object,
  }).isRequired,
};
