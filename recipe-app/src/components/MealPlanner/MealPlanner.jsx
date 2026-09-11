import PropTypes from "prop-types";
import styles from "./MealPlanner.module.css";
import { WEEK_DAYS as DAYS } from "../../utils/helpers";
import { useState } from "react";
import DayCard from "./DayCard";

const MealPlanner = ({ mealPlan, recipes, onAddMeal, onRemoveMeal }) => {

  // Tracks which day/slot the recipe picker modal is currently open for
  const [pickerSlot, setPickerSlot] = useState(null);

  const handlePick = (recipe) => {
    onAddMeal(pickerSlot.day, pickerSlot.slot, recipe);
    setPickerSlot(null);
  };

  return (
    <>
        <div className={styles.weekGrid}>
            {DAYS.map( day => (
                <DayCard 
                    key={day}
                    dayLabel={day}
                    meals={mealPlan[day]}
                    onAddSlot={slot => setPickerSlot({day, slot})}
                    onRemoveSlot={slot => onRemoveMeal(day, slot)}
                />
            ))}
        </div>

        {/* Only mount the modal while a slot is actively being edited */}
        {pickerSlot && (
            <div className={styles.modalOverlay} onClick={() => setPickerSlot(null)}>
                <div className={styles.modalBody} onClick={e => e.stopPropagation()}>
                    <h3>Choose a recipe - {pickerSlot.day} {pickerSlot.slot}</h3>
                    <div className={styles.pickerGrid}>
                        {recipes.map(recipe => (
                            <button key={recipe.id} className={styles.pickerItem} onClick={() => handlePick(recipe)}>
                                <img src={recipe.image} alt={recipe.title} />
                                <p>{recipe.title}</p>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        )}
    </>
  );
};

DayCard.propTypes = {
  mealPlan: PropTypes.object.isRequired,
  recipes: PropTypes.array.isRequired,
  onAddMeal: PropTypes.func.isRequired,
  onRemoveMeal: PropTypes.func.isRequired,
};

export default MealPlanner;
