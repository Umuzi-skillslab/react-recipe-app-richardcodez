import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();

    return (
        <>
            <nav className="navbar">
                <NavLink 
                    to="/" 
                    className={location.pathname === '/' ? StyleSheet.active : ""}
                >Home</NavLink>
                <NavLink
                    to="/recipes"
                    className={location.pathname.includes('/recipes') ? StyleSheet.active : ""}
                >Recipes</NavLink>
                <NavLink
                    to="/meal-planner"
                    className={location.pathname === '/meal-planner' ? StyleSheet.active : ""}
                >Meal Planner</NavLink>
                <NavLink
                    to="/favorites"
                    className={location.pathname === '/favorites' ? StyleSheet.active : ""}
                >Favorites</NavLink>
            </nav>
        </>
    );
}

export default Navbar;