import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCamper } from "../../../redux/campers/campersSelector";
import { getCampers } from "../../../redux/campers/operations";
import { CamperCard } from "../CamperCard/CamperCard";
import css from "./CampersList.module.css";
import { CAMPERS_PER_PAGE } from "../../../shared/constans/constans";

export const CampersList = () => {
  const [visibleCampers, setVisibleCampers] = useState(CAMPERS_PER_PAGE);
  const dispatch = useDispatch();

  // const campersFilter = useSelector(selectCampersFilter);
  const campers = useSelector(selectCamper);
  useEffect(() => {
    dispatch(getCampers());
  }, [dispatch]);

  const loadMore = () => {
    setVisibleCampers(
      (prevVisibleCampers) => prevVisibleCampers + CAMPERS_PER_PAGE
    );
  };
  return (
    <div>
      <ul>
        {campers.slice(0, visibleCampers).map((camper) => (
          <li className={css.list} key={camper._id}>
            <CamperCard camper={camper} />
          </li>
        ))}
      </ul>
      {visibleCampers < campers.length && (
        <button className={css.loadMoreButton} onClick={loadMore}>
          Load more
        </button>
      )}
    </div>
  );
};
