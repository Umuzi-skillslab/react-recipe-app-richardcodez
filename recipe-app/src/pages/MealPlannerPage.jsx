import PropTypes from "prop-types";
import styles from "./MealPlannerPage.module.css";
import { buildEmptyMealPlan } from "../utils/helpers";
import Button from "../components/UI/Button";
import MealPlanner from "../components/MealPlanner/MealPlanner";

const MealPlannerPage = ({mealPlan, recipes, onAddMeal, onRemoveMeal, setMealPlan}) => {

    // Resets the whole week back to empty slots
    const handleClearWeek = () => setMealPlan(buildEmptyMealPlan);

    return (
        <div className="container">
            <div className={styles.ehader}>
                <h1>Meal Planner</h1>
                <p>Slot recipes into breakfast, lunch and dinner for every day of the week.</p>
            </div>
            <div className={styles.actionsRow}>
                <Button variant="danger" onClick={handleClearWeek}>Clear week</Button>
            </div>
            <MealPlanner mealPlan={mealPlan} recipes={recipes} onAddMeal={onAddMeal} onRemoveMeal={onRemoveMeal} />
        </div>
    );
}

MealPlannerPage.propTypes = {
    mealPlan: PropTypes.object.isRequired,
    recipes: PropTypes.array.isRequired,
    onAddMeal: PropTypes.func.isRequired,
    onRemoveMeal: PropTypes.func.isRequired,
    setMealPlan: PropTypes.func.isRequired
}

export default MealPlannerPage;