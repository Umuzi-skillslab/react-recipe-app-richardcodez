import PropTypes from "prop-types";

const Loading = ({label}) => {
    <p role="status">{label}</p>
}

Loading.propTypes = { label: PropTypes.string };

Loading.defaultProps = { label: "Loading…" };

export default Loading;