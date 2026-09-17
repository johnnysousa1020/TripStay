import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/Favorites.css"

function Favorites(){
    const [favorites, setFavorites] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || []

        setFavorites(savedFavorites)
    }, [])

    const removeFavorite = (id) => {
        const updatedFavorites = favorites.filter(
            (favorite) => favorite.id !== id
        )

        localStorage.setItem(
            "favorites",
            JSON.stringify(updatedFavorites)
        )

        setFavorites(updatedFavorites)
    }


    return(
        <main className="favorites-page">
            <section className="favorites-container">
                <div className="favorites-header">
                    <span>❤️</span>

                    <div>
                        <h1>Meus favoritos</h1>
                        <p>
                            Confira os hotéis que você salvou para sua próximo viagem.
                        </p>
                    </div>
                </div>

                <button
                type="button"
                className="back-home-button-favorites"
                onClick={() => navigate("/")}>
                    ← Voltar ao início
                </button>

                {favorites.length === 0 ? (
                    <div className="favorites-empty">
                        <div className="favorites-empty-icon">
                            🤍
                        </div>

                        <h2>
                            Você ainda não tem favoritos
                        </h2>

                        <p>
                            Quando encontrar um hotel que gostar, clique no coração para salvá-lo aqui.
                        </p>

                        <button type="button" onClick={() => navigate("/")}>
                            Explorar hospedagens
                        </button>
                    </div>

                ) : (

                    <div className="favorites-grid">
                        {favorites.map((hotel) => (
                            <article className="favorite-card" key={hotel.id}>
                                <div className="favorite-card-image">
                                    <img src={hotel.image} alt={hotel.name} />

                                    <button 
                                    type="button"
                                    className="favorite-remove"
                                    aria-label={`Remover ${hotel.name} dos favoritos`}
                                    onClick={() => removeFavorite(hotel.id)}>
                                        ❤️
                                    </button>
                                </div>

                                <div className="favorite-card-content">
                                    <h2>
                                        {hotel.name}
                                    </h2>

                                    <div className="favorite-card-info">
                                        <span>
                                            ⭐ {hotel.rating}
                                        </span>

                                        <span>
                                            ({hotel.reviews})
                                        </span>

                                        <span>
                                            📍 {hotel.location}
                                        </span>
                                    </div>

                                    <div className="favorite-card-amenities">
                                        {hotel.amenities?.map(
                                            (amenity, index) => (
                                                <span key={index}>
                                                    {amenity}
                                                </span>
                                            )
                                        )}
                                    </div>

                                    <div className="favorite-card-footer">
                                        <div className="favorite-price">
                                            <strong>
                                                R$ {hotel.price}
                                            </strong>

                                            <span>
                                                / noite
                                            </span>
                                        </div>

                                        <button
                                        type="button"
                                        onClick={() => navigate(`/hotel/${hotel.id}`)}>
                                            Ver detalhes
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </section>
        </main>
    )
}

export default Favorites