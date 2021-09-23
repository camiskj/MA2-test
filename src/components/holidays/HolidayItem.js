import PropTypes from "prop-types";

function HolidayItem({ localName, name, date }) {
	return (
    <>
			<h5>{localName}</h5>
			<p>{name}</p>
      <p>{date}</p>
    </>
	);
}

HolidayItem.propTypes = {
	localName: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
};

export default HolidayItem;