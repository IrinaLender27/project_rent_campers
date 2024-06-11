import { StarBox } from "../StarBox/StarBox";
import css from "./Reviews.module.css";
export const Reviews = ({ reviews }) => {
  return (
    <div className={css.box}>
      <ul>
        {reviews.map((reviews, index) => (
          <li key={reviews.index} className={css.item}>
            <div className={css.wrapper}>
              <div className={css.nameBox}>
                <p className={css.name}>
                  {reviews.reviewer_name.charAt(0).toUpperCase()}
                </p>
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "4" }}
              >
                <p className={css.fullName}>{reviews.reviewer_name}</p>
                <StarBox rating={reviews.reviewer_rating} />
              </div>
            </div>
            <p className={css.comment}>{reviews.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
