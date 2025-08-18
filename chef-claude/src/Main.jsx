
import React from "react"
import IngredientsList from "./components/IngredientsList"
import ClaudeRecipe from "./components/ClaudeRecipe"

export default function Main() {
     const [ingredients, setMyIngredients] = React.useState(["all the main spices", "pasta", "ground beef", "tomato paste"])

     const [recipeShown, setRecipeShown] = React.useState(false)

     function addIngredient(formData) {
          const newIngredient = formData.get("ingredient")
          setMyIngredients(prevIngredients => [...prevIngredients, newIngredient])
     }

     function toggleRecipeShown() {
          setRecipeShown(prevRecipeShown => !prevRecipeShown)
     }

     return (
          <main className="main">
               <form action={addIngredient} className="add-ingredient-form">
                    <input className="add-ingredient-input"
                         type="text"
                         placeholder="e.g. oregano"
                         aria-label="Add ingredient"
                         name="ingredient"
                    />
                    <button className="add-ingredient-button">Add ingredient</button>
               </form>
               {ingredients.length > 0 && <IngredientsList 
                    ingredients={ingredients} 
                    toggleRecipeShown={toggleRecipeShown} />
               }
               {recipeShown && <ClaudeRecipe />
               }
          </main>
     )
}