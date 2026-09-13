import PropTypes from "prop-types";
import styles from "./common.module.css";

const Header = ({title, description}) => {
    return (
        <div className={styles.pageHeader}>
            <h1>{title}</h1>
            { description && <p>{description}</p> }
        </div>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string
}

Header.defaultProps = {
    description: ""
}

export default Header;