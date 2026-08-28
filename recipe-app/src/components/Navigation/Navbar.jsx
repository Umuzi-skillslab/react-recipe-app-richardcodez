import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();

    return (
        <>
            <nav className="navbar">
                <NavLink 
                    to="/" 
                    className={location.pathname === '/' ? styles.active : ""}
                >Home</NavLink>
                <NavLink
                    to="/recipes"
                    className={location.pathname.includes('/recipes') ? styles.active : ""}
                >Recipes</NavLink>
                <NavLink
                    to="/meal-planner"
                    className={location.pathname === '/meal-planner' ? styles.active : ""}
                >Meal Planner</NavLink>
                <NavLink
                    to="/favorites"
                    className={location.pathname === '/favorites' ? styles.active : ""}
                >Favorites</NavLink>
            </nav>
        </>
    );
}

export default Navbar;