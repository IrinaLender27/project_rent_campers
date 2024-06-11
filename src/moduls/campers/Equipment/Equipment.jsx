import { BoxEquipment } from "../../../shared/components/BoxEquipment/BobEquipment";
import css from "./Equipment.module.css";

export const Equipment = ({ camper }) => {
  return (
    <div className={css.details}>
      <BoxEquipment
        className={css.fill}
        text={`${camper.adults} adults`}
        icon={`#icon-children`}
        style={{ stroke: "var(--color-dark)" }}
      />
      <BoxEquipment text={camper.transmission} icon={`#icon-avtomat`} />
      <BoxEquipment text={camper.engine} icon={`#icon-petrol`} />
      <BoxEquipment
        text={`${camper.details.kitchen} Kitchen`}
        icon={`#icon-kitchen`}
      />
      <BoxEquipment text={` ${camper.details.beds} Beds`} icon={`#icon-bed`} />
      <BoxEquipment
        text={` ${camper.details.airConditioner} AC`}
        icon={`#icon-conditioner`}
      />
    </div>
  );
};
