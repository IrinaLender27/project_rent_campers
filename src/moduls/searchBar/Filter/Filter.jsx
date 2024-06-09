// import { useState } from "react";
import css from "./Filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../../redux/campers/campersSelector";
import { setFilter, resetFilters } from "../../../redux/campers/camperSlice";
import { useEffect } from "react";
export const Filter = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilter);
  const { location, equipment, type } = filters;
  console.log(filters);
  useEffect(() => {
    dispatch(resetFilters());
  }, [dispatch]);
  const handleLocation = (e) => {
    dispatch(setFilter({ location: e.target.value }));
  };
  const handleEquipment = (e) => {
    const value = e.target.value;
    const newEquipment = equipment.includes(value)
      ? equipment.filter((item) => item !== value)
      : [...equipment, value];
    dispatch(setFilter({ equipment: newEquipment }));
  };

  const handleType = (e) => {
    dispatch(setFilter({ type: e.target.value }));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="City"
        value={location}
        onChange={handleLocation}
      />
      <div>
        <p>Vehicle equipment</p>
        <label className={css.button}>
          <input
            type="checkbox"
            value="airConditioner"
            onChange={handleEquipment}
            className={css.checkbox}
            checked={equipment.includes("airConditioner")}
          />
          <span className={css.name}>AC</span>
        </label>
        <label className={css.button}>
          <input
            type="checkbox"
            value="transmission"
            onChange={handleEquipment}
            className={css.checkbox}
            checked={equipment.includes("transmission")}
          />
          <span className={css.name}>Automatic</span>
        </label>
        <label className={css.button}>
          <input
            type="checkbox"
            value="kitchen"
            onChange={handleEquipment}
            className={css.checkbox}
            checked={equipment.includes("kitchen")}
          />
          <span className={css.name}>Kitchen</span>
        </label>
        <label className={css.button}>
          <input
            type="checkbox"
            value="TV"
            onChange={handleEquipment}
            className={css.checkbox}
          />
          <span className={css.name}>TV</span>
        </label>
        <label className={css.button}>
          <input
            type="checkbox"
            value="bathroom"
            onChange={handleEquipment}
            className={css.checkbox}
            checked={equipment.includes("bathroom")}
          />
          <span className={css.name}>Shower/WC</span>
        </label>
        <p>Vehicle type</p>
        <div>
          <lable className={css.button}>
            <input
              type="radio"
              name="type"
              value="van"
              checked={type === "van"}
              onChange={handleType}
            />
            <span className={css.name}>Van</span>
          </lable>
          <lable className={css.button}>
            <input
              type="radio"
              name="type"
              value="fullyIntegrated"
              checked={type === "fullyIntegrated"}
              onChange={handleType}
            />
            <span className={css.name}>Fully Integrated</span>
          </lable>
          <lable className={css.button}>
            <input
              type="radio"
              name="type"
              value="alcove"
              checked={type === "alcove"}
              onChange={handleType}
            />
            <span className={css.name}>Alcove</span>
          </lable>
        </div>
      </div>
      <button
        onClick={() => dispatch(setFilter({ location, equipment, type }))}
      >
        Search
      </button>
    </div>
  );
};
