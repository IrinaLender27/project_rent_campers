import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCampersFilter } from "../../../redux/campers/campersSelector";
import { getCampers } from "../../../redux/campers/camperSlice";
import { CamperCard } from "../CamperCard/CamperCard";
import css from "./CampersList.module.css";
export const CampersList = () => {
  const dispatch = useDispatch();
  const campersFilter = useSelector(selectCampersFilter);
  console.log(campersFilter);
  useEffect(() => {
    dispatch(getCampers());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {campersFilter.map((camper) => (
          <li className={css.list} key={camper._id}>
            <CamperCard camper={camper} />
          </li>
        ))}
      </ul>
    </div>
  );
};
