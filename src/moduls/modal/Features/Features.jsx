import { BoxEquipment } from "../../../shared/components/BoxEquipment/BobEquipment";

import PropTypes from "prop-types";
import { VehicleDetails } from "../VehicleDetails/VehicleDetails";
export const Features = ({ camper }) => {
  return (
    <div>
      <div>
        <BoxEquipment
          text={`${camper.adults} adults`}
          icon={`#icon-children`}
        />
        <BoxEquipment text={camper.transmission} icon={`#icon-avtomat`} />
        <BoxEquipment text={camper.engine} icon={`#icon-petrol`} />
        <BoxEquipment
          text={`${camper.details.kitchen} Kitchen`}
          icon={`#icon-kitchen`}
        />
        <BoxEquipment
          text={` ${camper.details.beds} Beds`}
          icon={`#icon-bed`}
        />
        <BoxEquipment
          text={` ${camper.details.airConditioner} AC`}
          icon={`#icon-conditioner`}
        />
      </div>
      <VehicleDetails details={camper} />
    </div>
  );
};
Features.propTypes = {
  camper: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    location: PropTypes.string,
    price: PropTypes.number,
    gallery: PropTypes.array,
    adults: PropTypes.number,
    transmission: PropTypes.string,
    engine: PropTypes.string,
    rating: PropTypes.string,
    reviews: PropTypes.array,
    kitchen: PropTypes.number,
    details: PropTypes.object,
  }).isRequired,
};
