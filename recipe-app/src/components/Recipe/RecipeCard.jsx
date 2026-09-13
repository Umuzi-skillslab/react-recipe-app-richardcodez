import { Link } from "react-router-dom";
import styles from "./Recipe.module.css";
import PropTypes from "prop-types";
import Card from "../UI/Card";

const RecipeCard = ({recipe, isFavorite, onFavoriteToggle}) => {
    return (
        <Card>
            <button
                className={`${styles.favBtn} ${isFavorite? styles.favActive : ""}`}
                onClick = {() => onFavoriteToggle(recipe)}
                aria-label="Toggle favorite"
            >
                {isFavorite? "♥" : "♡"}
            </button>
            <Link to={`/recipes/${recipe.id}`} className={styles.card}>
                <img src={recipe.image} alt={recipe.title} className={styles.image} />
                <div className={styles.cardBody}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.cuisine} · {recipe.cookTime}</p>
                </div>
            </Link>
        </Card>
    );
}

RecipeCard.propTypes = {
    recipe: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string,
        cookTime: PropTypes.number,
        cuisine: PropTypes.string
    }).isRequired,
    isFavorite: PropTypes.bool,
    onFavoriteToggle: PropTypes.func.isRequired
}

RecipeCard.defaultProps = {
    isFavorite: false
}

export default RecipeCard;