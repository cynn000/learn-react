
import chefClaudeIcon from "/src/assets/chef-claude-icon.png"

export default function Header() {
     return (
          <header className="header">
               <img className="chef-icon" src={chefClaudeIcon} alt="Chef Claude"/>
               <h1 className="header-text">Chef Claude</h1>
          </header>
     )
}