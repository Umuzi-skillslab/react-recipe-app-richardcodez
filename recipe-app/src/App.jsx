import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import RecipesPage from './pages/RecipesPage'
import RecipeDetail from './components/Recipe/RecipeDetail'
import MealPlanner from './pages/MealPlanner'
import FavoritesPage from './pages/FavoritesPage'
import NotFound from './pages/NotFound'

import Navbar from './components/Navigation/Navbar'
import Footer from './components/common/Footer'

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/recipes" element={<RecipesPage />}/>
          <Route path="/recipes/:id" element={<RecipeDetail />}/>
          <Route path="/meal-planner" element={<MealPlanner />}/>
          <Route path="/favorites" element={<FavoritesPage />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
