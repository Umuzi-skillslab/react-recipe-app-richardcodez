import PropTypes from "prop-types";
import styles from "./Recipe.module.css";
import { CATEGORIES } from "../../utils/helpers";

const RecipeFilter = ({category, cuisine, difficulty, cuisineOptions, onCategoryChange, onCuisineChange, onDifficultyChange, onClear}) => {
    const hasActiveFilters = category !== "all" || cuisine !== "all" || difficulty !== "all";

    return (
        <div className={styles.filterBar}>
            <select className={styles.select} value={category} onChange={e => onCategoryChange(e.target.value)}>
                <option value="all">All categories</option>
                {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>

            <select className={styles.select} value={cuisine} onChange={e => onCuisineChange(e.target.value)}>
                <option value="all">All cuisines</option>
                {cuisineOptions.map(c => <option key={c} value={c}>{c}</option>)}
            </select>

            <select className={styles.select} value={difficulty} onChange={e => onDifficultyChange(e.target.value)}>
                <option value="all">Any difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>

            {
                hasActiveFilters && <button className={styles.clearBtn} onClick={onClear}>Clear Filters</button>
            }
        </div>
    );
}

RecipeFilter.propTypes = {
    category: PropTypes.string.isRequired,
    cuisine: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    cuisineOptions: PropTypes.array.isRequired,
    onCategoryChange: PropTypes.func.isRequired,
    onCuisineChange: PropTypes.func.isRequired,
    onDifficultyChange: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired
}

export default RecipeFilter;