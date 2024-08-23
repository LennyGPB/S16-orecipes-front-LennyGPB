import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Card = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://orecipesapi.onrender.com/api/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Erreur Fetch:", error));
  }, []);

  return (
    <div className="flex justify-center gap-10 mt-6 flex-wrap">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="max-w-sm rounded overflow-hidden shadow-lg p-4"
        >
          <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
          <p className="text-gray-700 mb-4">Difficulté: {recipe.difficulty}</p>
          <Link
            to={`/recipe/${recipe.id}`}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded inline-block text-center"
          >
            Voir la recette
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Card;
