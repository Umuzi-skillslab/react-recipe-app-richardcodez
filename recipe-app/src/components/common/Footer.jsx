import { Link } from "react-router-dom";
import styles from "./common.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerInner}>
                <span className={styles.footerBrand}>Recipe App</span>
                <nav className={styles.footerLinks}>
                    <Link to="/">Home</Link>
                    <Link to="/recipes">Recipes</Link>
                    <Link to="/meal-planner">Meal Planner</Link>
                    <Link to="/favorites">Favorites</Link>
                </nav>
                <span className={styles.footerNote}>@ 2026 · Recipe App</span>
            </div>
        </footer>
    );
}

export default Footer;