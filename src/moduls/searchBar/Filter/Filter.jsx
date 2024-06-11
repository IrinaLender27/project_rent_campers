// import { useState } from "react";
import css from "./Filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../../redux/campers/campersSelector";
import { setFilter, resetFilters } from "../../../redux/campers/camperSlice";
import { useEffect } from "react";
import { sprite } from "../../../assets/icons";
import { ButtonShow } from "../../../shared/components/ButtonShow/ButtonShow";
export const Filter = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilter);
  const { location, equipment, type } = filters;

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
    <div className={css.searchBar}>
      <p className={css.location}>Location</p>
      <div className={css.inputBox}>
        <input
          type="text"
          placeholder="City"
          value={location}
          onChange={handleLocation}
          className={css.placeholder}
        />
        <svg className={css.svg} width="18" height="20">
          <use xlinkHref={`${sprite}#icon-map`}></use>
        </svg>
      </div>
      <div>
        <p className={css.location}>Filters</p>
        <p className={css.equipmentName}>Vehicle equipment</p>
        <div className={css.equipment}>
          <label className={css.button}>
            <input
              type="checkbox"
              value="airConditioner"
              onChange={handleEquipment}
              className={css.checkbox}
              checked={equipment.includes("airConditioner")}
            />
            <svg
              width="32"
              height="32"
              style={{ fill: "none", stroke: "var(--color-dark)" }}
            >
              <use xlinkHref={`${sprite}#icon-conditioner`}></use>
            </svg>
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
            <svg
              width="32"
              height="32"
              style={{ fill: "none", stroke: "var(--color-dark)" }}
            >
              <use xlinkHref={`${sprite}#icon-avtomat`}></use>
            </svg>
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
            <svg
              width="32"
              height="32"
              style={{ fill: "none", stroke: "var(--color-dark)" }}
            >
              <use xlinkHref={`${sprite}#icon-kitchen`}></use>
            </svg>
            <span className={css.name}>Kitchen</span>
          </label>
          <label className={css.button}>
            <input
              type="checkbox"
              value="TV"
              onChange={handleEquipment}
              className={css.checkbox}
            />
            <svg
              width="32"
              height="32"
              style={{ fill: "none", stroke: "var(--color-dark)" }}
            >
              <use xlinkHref={`${sprite}#icon-tv`}></use>
            </svg>
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
            <svg
              width="32"
              height="32"
              style={{ fill: "none", stroke: "var(--color-dark)" }}
            >
              <use xlinkHref={`${sprite}#icon-shower`}></use>
            </svg>
            <span className={css.name}>Shower/WC</span>
          </label>
        </div>
        <p className={css.equipmentName}>Vehicle type</p>
        <div className={css.equipment}>
          <lable className={css.button}>
            <input
              type="radio"
              name="type"
              value="van"
              checked={type === "van"}
              onChange={handleType}
            />
            <svg width="32" height="32" style={{ stroke: "var(--color-dark)" }}>
              <use xlinkHref={`${sprite}#icon-camper`}></use>
            </svg>
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
            <svg width="32" height="32" style={{ stroke: "var(--color-dark)" }}>
              <use xlinkHref={`${sprite}#icon-camper`}></use>
            </svg>
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
            <svg width="32" height="32" style={{ stroke: "var(--color-dark)" }}>
              <use xlinkHref={`${sprite}#icon-camper`}></use>
            </svg>
            <span className={css.name}>Alcove</span>
          </lable>
        </div>
      </div>
      <ButtonShow
        onClick={() => dispatch(setFilter({ location, equipment, type }))}
        text={"Sarch"}
      />
    </div>
  );
};
