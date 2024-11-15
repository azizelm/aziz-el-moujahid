import React, { useState } from 'react';
import RecipeCard from './RecipeCard';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');

  // Mock data for testing
  const mockData = [
    {
      recipe: {
        label: "Chicken Vesuvio",
        image: "https://www.edamam.com/web-img/e17/e1775fa635cbdfb8cbd9c586f8f48b74.jpg",
        ingredients: [
          { text: "1/2 cup olive oil" },
          { text: "5 cloves garlic, peeled" },
        ],
        calories: 4228.04,
        url: "http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html",
      },
    },
  ];

  // Replace this function with mock data for testing
  const searchRecipes = () => {
    setRecipes(mockData); // Use mock data instead of API
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <input
          type="text"
          className="border p-2 rounded"
          placeholder="Rechercher des recettes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white p-2 rounded ml-2"
          onClick={searchRecipes}
        >
          Rechercher
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {recipes.map((recipeData, index) => (
          <RecipeCard key={index} recipe={recipeData.recipe} />
        ))}
      </div>
    </div>
  );
};

export default App;
