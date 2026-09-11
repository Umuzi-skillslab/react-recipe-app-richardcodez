export const WEEK_DAYS = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
export const MEAL_SLOTS = ['breakfast', 'lunch', 'dinner'];
export const CATEGORIES = ['breakfast', 'lunch', 'dinner', 'dessert', 'snacks'];

export function filterRecipes(recipes, {searchTerm, category, cuisine, difficulty}) {
    return recipes.filter(r => searchTerm ? r.title.toLowerCase().includes(searchTerm.toLowerCase()) : true)
                .filter(r => category && category !== "all" ? r.category === category : true)
                .filter(r => cuisine && cuisine !== "all" ? r.cuisine === cuisine : true)
                .filter(r => difficulty && difficulty !== "all" ? r.difficulty === difficulty : true)
}

export function buildEmptyMealPlan() {
    return WEEK_DAYS.reduce( (plan, day) => {
        plan[day] = {
            breakfast: null,
            lunch: null,
            dinner: null
        }
        return plan;
    }, {});
}