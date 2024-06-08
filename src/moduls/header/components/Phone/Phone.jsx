import css from "./Phone.module.css";

export const Phone = () => {
  return (
    <div className={css.phoneContact}>
      <a className={css.phoneLink} href="tel:+380997771177">
        <div className={css.imageContainer}></div>
      </a>
      <a className={css.numberForDesk} href="tel:+380997771177">
        <p>+38 (099) 777-11-77</p>
      </a>
    </div>
  );
};
