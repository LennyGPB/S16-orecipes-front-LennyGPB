import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FicheCard = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`https://orecipesapi.onrender.com/api/recipes/${id}`)
      .then((response) => response.json())
      .then((data) => setRecipe(data))
      .catch((error) => console.error("Erreur Fetch:", error));
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-6 p-4 bg-white rounded shadow-lg">
      <h1 className="text-2xl font-bold mb-4">{recipe.title}</h1>
      <ul className="list-disc pl-5">
        <li className="mb-2">Difficulté: {recipe.difficulty}</li>
        <li className="mb-2">Temps de préparation: {recipe.prepTime}</li>
        <li className="mb-2">Temps de cuisson: {recipe.cookTime}</li>
        <li className="mb-2">
          Ingrédients:{" "}
          {recipe.ingredients.map((ingredient) => ingredient.name).join(", ")}
        </li>
        <li className="mb-2">Instructions: {recipe.instructions}</li>
      </ul>
    </div>
  );
};

export default FicheCard;
