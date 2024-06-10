import { AboutImg } from "../../../assets/image";
import css from "./About.module.css";
export const About = () => {
  return (
    <section className={css.aboutSection}>
      <img
        src={AboutImg}
        height="350px"
        width="500px"
        alt="camper"
        className={css.img}
      />
      <p className={css.text}>
        Our company specializes in renting campers throughout Ukraine. We offer
        a wide selection of modern and comfortable campers for your
        unforgettable travel experience. Whether you're planning a family
        holiday, a romantic trip or an adventure tour, our campers will provide
        you with comfort and freedom of movement. Discover Ukraine from a new
        perspective with us!
      </p>
    </section>
  );
};
