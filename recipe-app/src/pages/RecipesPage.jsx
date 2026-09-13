import PropTypes from "prop-types";
import { useMemo, useState } from "react";
import { filterRecipes } from "../utils/helpers";
import Header from "../components/common/Header";
import SearchBar from "../components/UI/SearchBar";
import RecipeFilter from "../components/Recipe/RecipeFilter";
import Loading from "../components/UI/Loading";
import RecipeList from "../components/Recipe/RecipeList";

const RecipesPage = ({recipes, favorites, onFavoriteToggle, isLoading}) => {

    const [searchTerm, setSearchterm] = useState("");
    const [category, setCategory] = useState("all")
    const [cuisine, setCusine] = useState("all")
    const [difficulty, setDifficulty] = useState("all")

    const cuisineOptions = useMemo( () => [...new Set(recipes.map(r => r.cuisine))], [recipes]);
    const visibleRecipes = useMemo(
        () => filterRecipes(recipes, {searchTerm, category, cuisine, difficulty}),
        [recipes, searchTerm, category, cuisine, difficulty]
    );

    const handleClear = () => {
        setCategory("all");
        setCusine("all");
        setDifficulty("all");
    }

    return (
        <div className = "container">
            <Header title="Recipes" description="Search and filter the full collection of recipes." />
            <SearchBar value={searchTerm} onChange={setSearchterm} onSubmit={setSearchterm} />
            <RecipeFilter 
                category={category}
                cuisine={cuisine}
                difficulty={difficulty}
                cuisineOptions={cuisineOptions}
                onCategoryChange={setCategory}
                onCuisineChange={setCusine}
                onDifficultyChange={setDifficulty}
                onClear={handleClear}
            />
            {isLoading ? <Loading label="Gathering recipes..." /> : (
                <RecipeList recipes={visibleRecipes} favorites={favorites} onFavoriteToggle={onFavoriteToggle} />
            )}
        </div>
    );
}

RecipesPage.propTypes = {
    recipes: PropTypes.array.isRequired,
    favorites: PropTypes.array.isRequired,
    onFavoriteToggle: PropTypes.func.isRequired,
    isLoading: PropTypes.bool
}

RecipesPage.defaultProps = { isLoading: true }

export default RecipesPage;