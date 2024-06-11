import css from "./StarBox.module.css";
import { sprite } from "../../../assets/icons";
export const StarBox = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(
        <span key={i}>
          <svg className={css.svg} width="16" height="16">
            <use xlinkHref={`${sprite}#icon-star`}></use>
          </svg>
        </span>
      );
    } else {
      stars.push(
        <span key={i}>
          <svg
            width="16"
            height="16"
            style={{ fill: "#F2F4F7", stroke: "#F2F4F7" }}
          >
            <use xlinkHref={`${sprite}#icon-starnot`}></use>
          </svg>
        </span>
      );
    }
  }
  return <div>{stars}</div>;
};
