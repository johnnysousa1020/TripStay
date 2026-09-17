import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/HotelCard.css"

function HotelCard({ id, image, name, rating, reviews, location, badge, badgeType = "blue", price, amenities = [], onChooseHotel }){
    const navigate = useNavigate()

    const [isFavorite, setIsFavorite] = useState(() => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || []

        return favorites.some((favorite) => favorite.id === id)
    })

    const toggleFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || []

        if(isFavorite){
            const updatedFavorites = favorites.filter(
                (favorite) => favorite.id !== id
            )

            localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
            setIsFavorite(false)

            return
        }

        const updatedFavorites = [
            ...favorites,
            {
                id,
                image,
                name,
                rating,
                reviews,
                location,
                badge,
                badgeType,
                price,
                amenities
            }
        ]

        localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
        setIsFavorite(true)
    }

    return(
        <article className="hotel-cardd">
            <div className="hotel-card-imagee">
                <img src={image} alt={name} />
                {badge && (
                    <span className={`hotel-badgee ${badgeType}`}>
                        {badge}
                    </span>
                )}

                <button 
                className={`favorite-buttonn ${isFavorite ? "active" : ""}`}
                aria-label={
                    isFavorite
                    ? `Remover ${name} dos favoritos`
                    : `Adicionar ${name} aos favoritos`}
                    onClick={toggleFavorite}>
                    {isFavorite ? "❤️" : "🤍"}
                </button>
            </div>

            <div className="hotel-card-cotentt">
                <h3>{name}</h3>

                <div className="hotel-locations">
                    <span className="ratingg">
                        ⭐ {rating}
                    </span>

                    <span className="reviewss">
                        ({reviews})
                    </span>

                    <span className="locationn">
                        📍 {location}
                    </span>
                </div>

                <div className="hotel-amenitiess">
                    {amenities.map((amenity, index) => (
                        <span key={index}>
                            {amenity}
                        </span>
                    ))}
                </div>

                <div className="hotel-card-footerr">
                    <div className="hotel-pricee">
                        <strong>R$ {price}</strong>
                        <span>/ noite</span>
                    </div>

                    <div className="hotel-card-actions">

                    <button 
                    type="button" 
                    onClick={() => navigate(`/hotel/${id}`)} 
                    className="details-buttonn">
                        Ver detalhes
                    </button>

                    <button 
                    type="button"
                    className="choose-hotel-button" 
                    onClick={() => onChooseHotel({
                        id,
                        name,
                        image,
                        location,
                        price
                    })}>
                        Escolher hotel
                    </button>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default HotelCard;