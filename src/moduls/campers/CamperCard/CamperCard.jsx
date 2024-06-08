import css from "./CamperCard.module.css";

export const CamperCard = ({ advert }) => {
  return (
    <div>
      <img src={advert.gallery[0]} alt={advert.name}></img>
      <div className={css.content}>
        <h2 className={css.title}>{advert.name}</h2>
        <p className={css.location}>{advert.location}</p>
        <p className={css.price}>€{advert.price}.00</p>
        <div className={css.details}>
          <span>{advert.adults} adults</span>
          <span>{advert.transmission}</span>
          <span>{advert.engine}</span>
        </div>
        <p className={css.description}>
          {advert.description.substring(0, 100)}...
        </p>
        <button className={css.button}>Show more</button>
      </div>
    </div>
  );
};
