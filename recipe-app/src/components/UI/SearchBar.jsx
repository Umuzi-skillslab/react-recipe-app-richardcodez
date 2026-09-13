import PropTypes from "prop-types";
import styles from "./UI.module.css";

const SearchBar = ({value, onChange, onSubmit}) => { 

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(value);
    }

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <input 
                type="text"
                className={styles.searchInput}
                value={value}
                onChange={e => onChange(e.target.value)}
                placeholder="Search recipes..."
            />
            <button type="submit" className={styles.searchSubmit}>Search</button>
        </form>
    );
}

SearchBar.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func
}

SearchBar.defaultProps = {
    onSubmit: () => {}
}

export default SearchBar;