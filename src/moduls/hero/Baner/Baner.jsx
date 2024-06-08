import css from "./Baner.module.css";
import { BanerImg } from "../../../assets/image";
export const Baner = () => {
  return (
    <section className={css.banerThumb}>
      <img src={BanerImg} className={css.baner} alt="camper" />
    </section>
  );
};
