import PropTypes from "prop-types";
import { VehicleDetails } from "../VehicleDetails/VehicleDetails";
import { Equipment } from "../../campers/Equipment/Equipment";
import css from "./Features.module.css";
export const Features = ({ camper }) => {
  return (
    <div className={css.featuresContainer}>
      <Equipment camper={camper} />
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
