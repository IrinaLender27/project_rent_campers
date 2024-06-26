import { AboutImg } from "../../../assets/image";
import css from "./About.module.css";
export const About = () => {
  return (
    <section className={css.aboutSection}>
      <p className={css.text}>
        Our company specializes in renting campers throughout Ukraine. We offer
        a wide selection of modern and comfortable campers for your
        unforgettable travel experience. Whether you planning a family holiday,
        a romantic trip or an adventure tour, our campers will provide you with
        comfort and freedom of movement. Discover Ukraine from a new perspective
        with us!
      </p>
      <img src={AboutImg} alt="camper" className={css.img} />
    </section>
  );
};
