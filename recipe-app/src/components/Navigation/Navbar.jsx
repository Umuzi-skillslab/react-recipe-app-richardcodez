import { Link, NavLink, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className={styles.navbar}>
            <div className={styles.inner}>
                <Link to="/" className={styles.brand}>Recipe App</Link>
                <div className={styles.links}>
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
                </div>
            </div>
        </nav>
    );
}

export default Navbar;