import PropTypes from "prop-types";
import styles from "./MealPlanner.module.css";
import { WEEK_DAYS as DAYS } from "../../utils/helpers";
import { useState } from "react";

const MealPlanner = ({ mealPlan, recipes, onAddMeal, onRemoveMeal }) => {
  const [pickerSlot, setPickerSlot] = useState(null);

  const handlePick = (recipe) => {
    onAddMeal(pickerSlot.day, pickerSlot.slot, recipe);
    setPickerSlot(null);
  };

  return (
    <div className={styles.dayCard}>
      <div className={styles.dayName}>{dayLabel}</div>
      {SLOTS.map((slot) => {
        const meal = meals[slot];
        return (
          <div key={slot} className={styles.slot}>
            <span className={styles.slotLabel}>{slot}</span>
            {meal ? (
              <div className={styles.slotFilled}>
                <span>{meal.title}</span>
                <button
                  className={styles.slotRemove}
                  onClick={() => onRemoveSlot(slot)}
                >
                  X
                </button>
              </div>
            ) : (
              <button
                className={styles.slotAddBtn}
                onClick={() => onAddSlot(slot)}
              >
                + Add
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

DayCard.propTypes = {
  dayLabel: PropTypes.string.isRequired,
  meals: PropTypes.object.isRequired,
  onAddSlot: PropTypes.func.isRequired,
  onRemoveSlot: PropTypes.func.isRequired,
}

export default MealPlanner;
