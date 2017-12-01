import PropTypes from "prop-types";

export const event = PropTypes.shape({
  seminarNumber: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
});
