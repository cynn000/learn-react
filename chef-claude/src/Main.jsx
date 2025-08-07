
import React from "react"

export default function Main() {
     const [ingredients, setMyIngredients] = React.useState([])
     const ingredientsListItems = ingredients.map(ingredient => (
               <li key={ingredient}>
                    {ingredient}
               </li>
          )
     )

     function handleSubmit(event) {
          event.preventDefault()
          const formData = new FormData(event.currentTarget)
          const newIngredient = formData.get("ingredient")
          setMyIngredients(prevIngredients => [...prevIngredients, newIngredient])
     }

     return (
          <main className="main">
               <form onSubmit={handleSubmit} className="add-ingredient-form">
                    <input className="add-ingredient-input"
                         type="text"
                         placeholder="e.g. oregano"
                         aria-label="Add ingredient"
                         name="ingredient"
                    />
                    <button className="add-ingredient-button">Add ingredient</button>
               </form>
               <ul>
                    {ingredientsListItems}
               </ul>
          </main>
     )
}