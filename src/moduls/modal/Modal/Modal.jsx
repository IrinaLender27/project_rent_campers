import { useState } from "react";
import { sprite } from "../../../assets/icons";
import { Features } from "../Features/Features";
import css from "./Modal.module.css";
import { Reviews } from "../Reviews/Reviews";
import { BookForm } from "../BookForm/BookForm";

export const Modal = ({ camper }) => {
  const [activTab, setActiveTab] = useState(false);
  const handleBookingSubmit = (data) => {
    window.location.reload();
  };
  const renderInfo = () => {
    if (activTab === "features") {
      return (
        <div>
          <Features camper={camper} />
          <BookForm onSubmit={handleBookingSubmit} />
        </div>
      );
    } else if (activTab === "reviews") {
      return (
        <div>
          <Reviews />
          <BookForm onSubmit={handleBookingSubmit} />
        </div>
      );
    }
  };
  return (
    <div>
      <p className={css.title}>{camper.name}</p>
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
      <p className={css.price}>€{camper.price}.00</p>
      <div className={css.imgGroup}>
        <img
          src={camper.gallery[0]}
          alt={camper.name}
          width="290"
          height="310"
          className={css.image}
        />
        <img
          src={camper.gallery[1]}
          alt={camper.name}
          width="290"
          height="310"
          className={css.image}
        />
        <img
          src={camper.gallery[2]}
          alt={camper.name}
          width="290"
          height="310"
          className={css.image}
        />
      </div>
      <p className={css.description}>
        {camper.description.substring(0, 200)}...
      </p>
      <div className={css.buttonInfo}>
        <button
          className={`${css.tabButton} ${
            activTab === "features" ? css.active : ""
          }`}
          onClick={() => setActiveTab("features")}
        >
          Features
        </button>
        <button
          className={`${css.tabButton} ${
            activTab === "reviews" ? css.active : ""
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
      </div>
      <div className={css.tabContent}>{renderInfo()}</div>
    </div>
  );
};
