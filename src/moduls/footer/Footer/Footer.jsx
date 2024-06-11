import { ChooseCamper } from "../../../assets/image";
import { sprite } from "../../../assets/icons";
import css from "./Footer.module.css";

export const Footer = () => {
  return (
    <section className={css.footerBox}>
      <div className={css.line}></div>
      <img
        src={ChooseCamper}
        className={css.photo}
        width="300"
        height="300"
        alt="camper"
      />
      <div className={css.contactBox}>
        <p className={css.contact}>Contacts</p>
        <p className={css.text}>+38 (099) 777-11-77</p>
        <div className={css.location}>
          <svg
            style={{ fill: "none", stroke: "rgba(16, 24, 40, 0.6)" }}
            width="35"
            height="35"
          >
            <use xlinkHref={`${sprite}#icon-map`}></use>
          </svg>
          <p>Kherson, Ukraine</p>
        </div>
      </div>
    </section>
  );
};
