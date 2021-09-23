import PropTypes from "prop-types";

function Heading(props) {
  return (
      <>
          <h1>{props.content}</h1>
      </>
  );
}

Heading.propTypes = {
  title: PropTypes.string,
 };

export default Heading;