import { useNavigate, useParams } from "react-router-dom";

import { recipesData } from "../../data/recipesData"; 

const RecipeDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const recipe = recipesData.find(item => item.id === parseInt(id));

    if (!recipe) {
        return <p>Recipe Not Found</p>
    }
    return (
        <div></div>
    );
}

export default RecipeDetail;