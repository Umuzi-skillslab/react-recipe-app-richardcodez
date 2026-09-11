import PropTypes from "prop-types";
import styles from "./FavoritesPage.module.css";
import RecipeList from "../components/Recipe/RecipeList";
import { Link } from "react-router-dom";
import Button from "../components/UI/Button";

const FavoritesPage = ({favorites, onFavoriteToggle}) => {
    return (
        <div className="container">
            <div className={styles.header}>
                <h1>Favorites</h1>
                <p>Recipes you've saved, all in one place.</p>
            </div>

            {/* Ternary: empty state vs populated grid */}
            {
                favorites.length > 0 ? (<RecipeList 
                    recipes={favorites}    
                    favorites={favorites}
                    onFavoriteToggle={onFavoriteToggle} 
                    />) : (
                        <div className={styles.emptyState}>
                            <h3>No favorites yet</h3>
                            <p>Browse recipe and tap the heart on anything you love.</p>
                            <Link to="/recipes">
                                <Button variant="primary">Browse Recipes</Button>
                            </Link>
                        </div>
                    )
            }
        </div>
    );
}

FavoritesPage.propTypes = {
    favorites: PropTypes.array.isRequired,
    onFavoriteToggle: PropTypes.func.isRequired
}

export default FavoritesPage;