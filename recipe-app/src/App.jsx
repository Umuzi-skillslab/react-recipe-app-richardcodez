import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import Home from './pages/Home'
import RecipesPage from './pages/RecipesPage'
import RecipeDetail from './components/Recipe/RecipeDetail'
import MealPlannerPage from './pages/MealPlannerPage'
import FavoritesPage from './pages/FavoritesPage'
import NotFound from './pages/NotFound'
import {recipesData} from './data/recipesData'

import Navbar from './components/Navigation/Navbar'
import Footer from './components/common/Footer'
import { useEffect, useRef, useState } from 'react'
import { buildEmptyMealPlan } from './utils/helpers'

function App() {

  // state management
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [mealPlan, setMealPlan] = useState(buildEmptyMealPlan());
  const isFirstMealPlanRender = useRef(true);
  const isFirstFavoritesRender = useRef(true);

  // load recipes on mount
  useEffect( () => {
    const timer = setTimeout( () => {
      setRecipes(recipesData);
      setIsLoading(false);
    }, 300)
    return () => clearTimeout(timer);
  }, []);

  //  meal plan - load
  useEffect( () => {
    const saved = localStorage.getItem('mealPlan');
    if (saved) setMealPlan(JSON.parse(saved));
  }, []);

  // meal plan - save to local storage whenever it changes
  useEffect( () => {
    if (isFirstMealPlanRender.current) {
      isFirstMealPlanRender.current = false;
      return;
    }
    localStorage.setItem('mealPlan', JSON.stringify(mealPlan))
  }, [mealPlan]);

  // favorites - load
  useEffect(() => {
    const saved = localStorage.getItem('favorites');
    if (saved) setFavorites(JSON.parse(saved));
  }, []);

  // favorites - persist to localstorage
  useEffect(() => {
    if (isFirstFavoritesRender.current) {
      isFirstFavoritesRender.current = false;
      return;
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleFavoriteToggle = recipe => {
    setFavorites(
      prev => prev.some(fav => fav.id === recipe.id) ? prev.filter(fav => fav.id !== recipe.id) : [...prev, recipe]);
  };

  const handleAddMeal = (day, slot, recipe) => {
    setMealPlan( prev => ({ ...prev, [day] : { ...prev[day], [slot] : recipe} }));
  }

  const handleRemoveMeal = (day, slot) => {
    setMealPlan( prev => ({ ...prev, [day] : { ...prev[day], [slot] : null} }));
  }

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home recipes={recipes} favorites={favorites} onFavoriteToggle={handleFavoriteToggle} isLoading={isLoading}/>}/>
          <Route path="/recipes" element={<RecipesPage recipes={recipes} favorites={favorites} onFavoriteToggle={handleFavoriteToggle} isLoading={isLoading} />}/>
          <Route path="/recipes/:id" element={<RecipeDetail recipes={recipes} favorites={favorites} onFavoriteToggle={handleFavoriteToggle} onAddMeal={handleAddMeal} />}/>
          <Route path="/meal-planner" element={<MealPlannerPage mealPlan={mealPlan} recipes={recipes} onAddMeal={handleAddMeal} onRemoveMeal={handleRemoveMeal} setMealPlan={setMealPlan} />}/>
          <Route path="/favorites" element={<FavoritesPage favorites={favorites} onFavoriteToggle={handleFavoriteToggle} />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
