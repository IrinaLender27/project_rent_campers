import css from "./VehicleDetails.module.css";
import PropTypes from "prop-types";

export const VehicleDetails = ({ details }) => {
  return (
    <div className={css.vehicleBox}>
      <h3 className={css.title}>Vehicle details</h3>
      <div className={css.vehicleDetails}></div>
      <div className={css.detailsContainer}>
        <div className={css.detailItem}>
          <span className={css.detailKey}>Form</span>
          <span className={css.detailValue}>
            {details.form.charAt(0).toUpperCase() + details.form.slice(1)}
          </span>
        </div>
        <div className={css.detailItem}>
          <span className={css.detailKey}>Length</span>
          <span className={css.detailValue}>{details.length}</span>
        </div>
        <div className={css.detailItem}>
          <span className={css.detailKey}>Width</span>
          <span className={css.detailValue}>{details.width}</span>
        </div>
        <div className={css.detailItem}>
          <span className={css.detailKey}>Height</span>
          <span className={css.detailValue}>{details.height}</span>
        </div>
        <div className={css.detailItem}>
          <span className={css.detailKey}>Tank</span>
          <span className={css.detailValue}>{details.tank}</span>
        </div>
        <div className={css.detailItem}>
          <span className={css.detailKey}>Consumption</span>
          <span className={css.detailValue}>{details.consumption}</span>
        </div>
      </div>
    </div>
  );
};
VehicleDetails.propTypes = {
  details: PropTypes.shape({
    form: PropTypes.string.isRequired,
    length: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    tank: PropTypes.string.isRequired,
    consumption: PropTypes.string.isRequired,
  }).isRequired,
};
