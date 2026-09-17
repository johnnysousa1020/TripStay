import { useState } from "react"
import { Link } from "react-router-dom"
import "../styles/Header.css"

function Header(){
    const [menuOpen, setMenuOpen] = useState(false)
    const [profileOpen, setProfileOpen] = useState(false)

    return(
        <header className="header">
            <div className="header-container">
                <a href="/" className="logo">
                  <span className="logo-icon">✈️</span>
                  <div className="logo-content">
                    <span className="logo-name">TripStay</span>
                    <span className="logo-slogan">
                        Sua  próxima viagem começa aqui
                    </span>
                  </div>
                </a>

                <nav className={`nav ${menuOpen ? "menu-open" : ""}`}>
                    <a href="#destinos" onClick={() => setMenuOpen(false)}>Destinos</a>
                    <a href="#hospedagens" onClick={() => setMenuOpen(false)}>Hospedagens</a>
                    <Link to="/ofertas" onClick={() => setMenuOpen(false)}>Ofertas</Link>
                    <Link to="/favorites" onClick={() => setMenuOpen(false)}>Favoritos</Link>
                    <Link to="/minhas-resevas" onClick={() => setMenuOpen(false)}>Minhas Reservas</Link>
                </nav>

                <div className="header-actions-header">

                <div className="profile-wrapper-header">
                    
                <button 
                type="button" 
                className="profile-button" 
                aria-label="Perfil"
                onClick={() => setProfileOpen(!profileOpen)}>
                    👤
                </button>

                {profileOpen && (
                    <div className="profile-dropdown-header">
                        <div className="profile-header-header">
                            <div className="profile-avatar-header">
                                👤
                            </div>

                            <div>
                                <strong>Johnny</strong>
                                <span>Viajante TripStay</span>
                            </div>
                        </div>

                        <div className="profile-divider-header">
                            <Link to="/minhas-resevas" onClick={() => setProfileOpen(false)}>
                               📋 Minhas reservas
                            </Link>

                            <Link to="/favorites" onClick={() => setProfileOpen(false)}>
                               ❤️ Meus favoritos
                            </Link>
                        </div>
                    </div>
                )}

                </div>

                <button 
                type="button" 
                className={`menu-bottom ${menuOpen ? "active" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}>
                    {menuOpen ? "X" : "☰"}
                </button>
                </div>
            </div>
        </header>
    )
}

export default Header