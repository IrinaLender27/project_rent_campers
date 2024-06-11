import css from "./Baner.module.css";
import { BanerImg } from "../../../assets/image";

export const Baner = () => {
  return (
    <section className={css.hero}>
      <div className={css.banerThumb}>
        <div className={css.gradientOverlay}></div>
        <img src={BanerImg} className={css.baner} alt="camper" />
        <div className={css.topOverlay}></div>
      </div>
      <h1 className={css.mainTittle}>
        {" "}
        Take your home on a trip - rent campers
      </h1>
    </section>
  );
};
