import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Recipe.module.css"
import { useState } from "react";
import Button from "../UI/Button";
import VideoPlayer from "../Media/VideoPlayer";
import { WEEK_DAYS as DAY, MEAL_SLOTS as SLOTS } from "../../utils/helpers";

const RecipeDetail = ({recipes, favorites, onFavoriteToggle, onAddMeal}) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [day, setDay] = useState(DAYS[0]);
    const [slot, setSlot] = useState(SLOTS[0])

    const recipe = recipesData.find(item => item.id === parseInt(id));

    if (!recipe) {
        return <p>Recipe Not Found</p>
    }

    const isFavorite = favorites.some( fav => fav.id === recipe.id);

    return (
        <div className="container">
            <Button variant='secondary' onClick={() => navigate(-1)}>← Back</Button>
            <div className={styles.detailGrid}>
                <div>
                    <img src={recipe.image} alt={recipe.title} className={styles.image} />
                    <VideoPlayer videoUrl={recipe.videoUrl} title={`${recipe.title} - Tutorial`} />
                </div>
                
                <div>
                    <h1>{recipe.title}</h1>
                    <div className={styles.metaRow}>
                        <span>{recipe.cuisine}</span>
                        <span>{recipe.cookTime}</span>
                        <span>{recipe.servings}</span>
                        <span>{recipe.difficulty}</span>
                    </div>
                </div>

                <Button 
                    variant={isFavorite? 'danger' : 'primary'}
                    onClick={() => onFavoriteToggle(recipe)}
                >
                    {isFavorite ? "♥ Remove favorite" : "♡ Add to favorites"}
                </Button>

                <h3>Ingredients</h3>
                <ul className={styles.ingredientList}>
                    {recipe.ingredients.map( (item, index) => <li key={index}> {item}</li>)}
                </ul>

                <h3>Add to meal planner</h3>
                <div className={styles.planRow}>
                    <select value={day} onChange={e => setDay(e.target.value)}>
                        {DAYS.map( day => <option key={day} value={day}>{day}</option>)}
                    </select>
                    <select value={slot} onChange={e => setDay(e.target.value)}>
                        {SLOTS.map( slot => <option key={slot} value={slot}>{slot}</option>)}
                    </select>
                    <Button variant='secondary' onClick={ () => onAddMeal(day, slot, recipe)}>Add</Button>
                </div>

                <div style={{gridColumn: "1 / -1"}}>
                    <h3>Instructions</h3>
                    <ol className={styles.instructionList}>
                        {recipe.instructions.map( (step, index) => <li key={index}>{step}</li>)}
                    </ol>
                </div>
            </div>
        </div>
    );
}

RecipeDetail.propTypes = {
    recipes: PropTypes.array.isRequired,
    favorites: PropTypes.array.isRequired,
    onFavoriteToggle: PropTypes.func.isRequired,
    onAddMeal: PropTypes.func.isRequired
}

export default RecipeDetail;