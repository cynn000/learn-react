
import React from "react"
import IngredientsList from "./components/IngredientsList"
import ClaudeRecipe from "./components/ClaudeRecipe"
import { getRecipeFromMistral } from "./ai"

export default function Main() {
     const [ingredients, setMyIngredients] = React.useState([])

     const [recipe, setRecipe] = React.useState("")

     function addIngredient(formData) {
          const newIngredient = formData.get("ingredient")
          setMyIngredients(prevIngredients => [...prevIngredients, newIngredient])
     }

     async function getRecipe() {
          const recipeMarkdown = await getRecipeFromMistral(ingredients)
          setRecipe(recipeMarkdown)
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
                    getRecipe={getRecipe} />
               }
               {recipe && <ClaudeRecipe recipe={recipe}/>
               }
          </main>
     )
}