import PropTypes from "prop-types";
import styles from "./UI.module.css";

const Card = ({ children, className }) => {
  return <div className={`${StyleSheet.card} ${className}`}>{children}</div>;
};

Card.prototypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

Card.defaultProps = {className:""};

export default Card;
