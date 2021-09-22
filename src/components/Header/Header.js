import logo from "../../assets/logo.svg"
import './Header.css'

export default function Header() {
    return (
        <header>
            <nav>
                <img className="logo" src={logo} alt="logo"></img>
                <a href="/">Accueil</a>
                <a href="/">Profil</a>
                <a href="/">Réglage</a>
                <a href="/">Communauté</a>
            </nav>
        </header>
    )
}