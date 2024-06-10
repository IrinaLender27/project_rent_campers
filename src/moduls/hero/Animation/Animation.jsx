import css from "./Animation.module.css";
export const Animation = () => {
  return (
    <div className={css.arquee}>
      <div className={css.marqueeInner}>
        <p className={css.marqueeLine}>
          <span className={css.spanMarquee}>
            Take your home on a trip - rent campers
          </span>
        </p>
        <p className={css.marqueeLine}>
          <span className={css.spanMarquee}>
            Take your home on a trip - rent campers
          </span>
        </p>
      </div>
    </div>
  );
};
