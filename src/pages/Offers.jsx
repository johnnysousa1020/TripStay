import { useNavigate } from "react-router-dom"
import "../styles/Offers.css"

import aurora from "../assets/hotel-gramado.jpg"
import azul from "../assets/hotel-ubatuba.jpg"
import skyline from "../assets/hotel-rio.jpg"
import villa from "../assets/hotel-sao.jpg"
import floripa from "../assets/hotel-floria.jpg"
import salvador from "../assets/hotel-salvador.jpg"

const hotelOffers = [
    {
        id: "aurora",
        name: "Hotel Aurora",
        image: aurora,
        location: "Gramado, RS",
        rating: "4,8",
        oldPrice: "459",
        price: "389",
        discount: "15%"
    },
    {
        id: "costa-azul",
        name: "Costa Azul Hotel",
        image: azul,
        location: "Ubatuba, SP",
        rating: "4,6",
        oldPrice: "399",
        price: "299",
        discount: "25%"
    },
    {
        id: "skyline-rio",
        name: "Skyline Rio Hotel",
        image: skyline,
        location: "Rio de Janeiro, RJ",
        rating: "4,7",
        oldPrice: "549",
        price: "459",
        discount: "16%"
    },
    {
        id: "villa-sao-paulo",
        name: "Villa São Paulo",
        image: villa,
        location: "São Paulo, SP",
        rating: "4,5",
        oldPrice: "429",
        price: "349",
        discount: "19%"
    },
    {
        id: "floripa-beach",
        name: "Floripa Beach Resolt",
        image: floripa,
        location: "Florianópolis, SC",
        rating: "4,7",
        oldPrice: "499",
        price: "429",
        discount: "14%"
    },
    {
        id: "salvador-mare",
        name: "Salvador Maré Resolt",
        image: salvador,
        location: "Salvador, BH",
        rating: "4,7",
        oldPrice: "489",
        price: "419",
        discount: "14%"
    }
]

const flightOffers = [
    {
        id: 1,
        airline: "LATAM",
        origin: "São Paulo",
        destination: "Rio de Janeiro",
        departureTime: "08:30",
        arrivalTime: "09:35",
        oldPrice: "599",
        price: "489",
        discount: "18%"
    },
    {
        id: 2,
        airline: "Azul",
        origin: "São Paulo",
        destination: "Salvador",
        departureTime: "10:15",
        arrivalTime: "12:45",
        oldPrice: "749",
        price: "599",
        discount: "20%"
    },
    {
        id: 3,
        airline: "GOL",
        origin: "São Paulo",
        destination: "Florianópolis",
        departureTime: "14:40",
        arrivalTime: "15:45",
        oldPrice: "499",
        price: "399",
        discount: "20%"
    }
]

function Offers() {

    const navigate = useNavigate()

    return (
        <main className="offers-page">

            <section className="offers-container">

                <div className="offers-header">

                    <span className="offers-header-icon">
                        🏷️
                    </span>

                    <div>
                        <h1>Ofertas especiais</h1>

                        <p>
                            Aproveite nossas melhores ofertas para sua próxima viagem.
                        </p>
                    </div>

                </div>

                <button
                    type="button"
                    className="back-home-button"
                    onClick={() => navigate("/")}
                >
                    ← Voltar ao início
                </button>


                {/* OFERTAS DE VOOS */}

                <section className="offers-section">

                    <div className="offers-section-header">

                        <div>
                            <span>✈️</span>

                            <div>
                                <h2>Ofertas de voos</h2>

                                <p>
                                    Encontre passagens com preços especiais.
                                </p>
                            </div>
                        </div>

                    </div>


                    <div className="flight-offers-grid">

                        {flightOffers.map((flight) => (

                            <article
                                className="flight-offer-card"
                                key={flight.id}
                            >

                                <div className="offer-card-top">

                                    <strong>
                                        ✈️ {flight.airline}
                                    </strong>

                                    <span>
                                        -{flight.discount}
                                    </span>

                                </div>


                                <div className="flight-route">

                                    <div>
                                        <strong>
                                            {flight.origin}
                                        </strong>

                                        <span>
                                            {flight.departureTime}
                                        </span>
                                    </div>

                                    <div className="flight-line">
                                        ✈️ ───────── ✈️
                                    </div>

                                    <div>
                                        <strong>
                                            {flight.destination}
                                        </strong>

                                        <span>
                                            {flight.arrivalTime}
                                        </span>
                                    </div>

                                </div>


                                <div className="offer-price">

                                    <span>
                                        De R$ {flight.oldPrice}
                                    </span>

                                    <strong>
                                        R$ {flight.price}
                                    </strong>

                                </div>


                                <button
                                    type="button"
                                    onClick={() => navigate("/")}
                                >
                                    Escolher voo
                                </button>

                            </article>

                        ))}

                    </div>

                </section>


                {/* OFERTAS DE HOTÉIS */}

                <section className="offers-section">

                    <div className="offers-section-header">

                        <div>
                            <span>🏨</span>

                            <div>
                                <h2>Ofertas de hospedagem</h2>

                                <p>
                                    Hotéis selecionados com preços especiais.
                                </p>
                            </div>
                        </div>

                    </div>


                    <div className="hotel-offers-grid">

                        {hotelOffers.map((hotel) => (

                            <article
                                className="hotel-offer-card"
                                key={hotel.id}
                            >

                                <div className="hotel-offer-image">

                                    <img
                                        src={hotel.image}
                                        alt={hotel.name}
                                    />

                                    <span>
                                        -{hotel.discount}
                                    </span>

                                </div>


                                <div className="hotel-offer-content">

                                    <h3>
                                        {hotel.name}
                                    </h3>

                                    <div className="hotel-offer-info">

                                        <span>
                                            ⭐ {hotel.rating}
                                        </span>

                                        <span>
                                            📍 {hotel.location}
                                        </span>

                                    </div>


                                    <div className="offer-price">

                                        <span>
                                            De R$ {hotel.oldPrice}
                                        </span>

                                        <strong>
                                            R$ {hotel.price}
                                        </strong>

                                        <small>
                                            / noite
                                        </small>

                                    </div>


                                    <button
                                        type="button"
                                        onClick={() =>
                                            navigate(`/hotel/${hotel.id}`)
                                        }
                                    >
                                        Ver detalhes
                                    </button>

                                </div>

                            </article>

                        ))}

                    </div>

                </section>

            </section>

        </main>
    )
}

export default Offers