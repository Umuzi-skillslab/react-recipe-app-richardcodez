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
import { useEffect, useState } from 'react'

function App() {

  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);

  useEffect( () => {
    const timer = setTimeout( () => {
      setRecipes(recipesData);
      setIsLoading(false);
    }, 300)
    return () => clearTimeout(timer);
  }, []);

  const handleFavoriteToggle = recipe => {
    setFavorites(
      prev => prev.some(fav => fav.id === recipe.id ? prev.filter(fav => fav.id !== recipe.id) : [...prev, recipe])
    );
  };

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home recipes={recipes} favorites={favorites} onFavoriteToggle={handleFavoriteToggle} isLoading={isLoading}/>}/>
          <Route path="/recipes" element={<RecipesPage recipes={recipes} favorites={favorites} onFavoriteToggle={handleFavoriteToggle} isLoading={isLoading} />}/>
          <Route path="/recipes/:id" element={<RecipeDetail />}/>
          <Route path="/meal-planner" element={<MealPlannerPage />}/>
          <Route path="/favorites" element={<FavoritesPage favorites={favorites} onFavoriteToggle={handleFavoriteToggle} />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
