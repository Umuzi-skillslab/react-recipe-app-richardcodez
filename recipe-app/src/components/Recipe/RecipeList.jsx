import PropTypes from "prop-types";
import styles from "./Recipe.module.css";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes, favorites, onFavoriteToggle }) => {
  if (recipes.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p>No Recipes found.</p>
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {/* render one recipe card per recipe */}
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          isFavorite={favorites.some((fav) => fav.id === recipe.id)}
          onFavoriteToggle={onFavoriteToggle}
        />
      ))}
    </div>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.array.isRequired,
  favorites: PropTypes.array,
  onFavoriteToggle: PropTypes.func.isRequired,
};

RecipeList.defaultProps = { favorites: [] };

export default RecipeList;
