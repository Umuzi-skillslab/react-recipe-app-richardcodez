import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "../components/UI/Button";
import Loading from "../components/UI/Loading";
import RecipeList from "../components/Recipe/RecipeList";
import AudioPlayer from "../components/Media/AudioPlayer";

const TIP_AUDIO = "https://www.w3schools.com/html/horse.ogg";

const Home = ({ recipes, favorites, onFavoriteToggle, isLoading }) => {
  const featured = recipes.slice(0, 3);

  return (
    <div className="container">
      <section style={{ padding: "3rem 0" }}>
        <h1>Cook something worth writing on an index card.</h1>
        <p>Browse recipes, plan your week, and save your favorites.</p>
        <div style={{ display: "flex", gap: "0.75rem", marginTop: "1rem" }}>
          <Link to="/recipes">
            <Button variant="primary">Browse recipes</Button>
          </Link>
          <Link to="/meal-planner">
            <Button variant="secondary">Plan my week</Button>
          </Link>
        </div>
      </section>

      <section>
        <h2>Featured this week</h2>
        {isLoading ? (
          <Loading label="Setting the table…" />
        ) : (
          <RecipeList
            recipes={featured}
            favorites={favorites}
            onFavoriteToggle={onFavoriteToggle}
          />
        )}
      </section>

      <section style={{ padding: "2rem 0" }}>
        <h2>Today's cooking tip</h2>
        <AudioPlayer audioUrl={TIP_AUDIO} title="60-second seasoning tip" />
      </section>
    </div>
  );
};

Home.propTypes = {
  recipes: PropTypes.array.isRequired,
  favorites: PropTypes.array.isRequired,
  onFavoriteToggle: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
}

Home.defaultProps = { isLoading: false }

export default Home;
