import PropTypes from "prop-types";
import styles from "./UI.module.css";

const Button = ({ children, variant, onClick, type }) => {
  return (
    <button
      type={type}
      className={`${styles.btn} ${styles[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['button', 'submit'])
}

Button.defaultProps = {
    variant: 'primary',
    onClick: undefined,
    type: 'button'
}

export default Button;
