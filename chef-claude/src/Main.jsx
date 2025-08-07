
export default function Main() {
     return (
          <main className="main">
               <form className="add-ingredient-form">
                    <input className="add-ingredient-input"
                         type="text"
                         placeholder="e.g. oregano"
                         aria-label="Add ingredient"
                    />
                    <button className="add-ingredient-button">Add ingredient</button>
               </form>
          </main>
     )
}