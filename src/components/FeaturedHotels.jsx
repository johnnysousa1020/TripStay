import HotelCard from "./HotelCard";
import "../styles/FeaturedHotels.css"
import aurora from "../assets/hotel-gramado.jpg"
import azul from "../assets/hotel-ubatuba.jpg"
import skyline from "../assets/hotel-rio.jpg"
import villa from "../assets/hotel-sao.jpg"
import floripa from "../assets/hotel-floria.jpg"
import salvador from "../assets/hotel-salvador.jpg"

const hotels = [
    {
        id: "aurora",
        name: "Hotel Aurora",
        image: aurora,
        rating: "4,8",
        reviews: 512,
        location: "Gramado, RS",
        badge: "Mais reservado",
        badgeType: "blue",
        price: "389",
        amenities: ["📶 Wi-Fi", "☕ Café da manhã", "🚗 Estacionamento"]
    },
    {
        id: "costa-azul",
        name: "Costa Azul Hotel",
        image: azul,
        rating: "4,6",
        reviews: 412,
        location: "Ubatuba, SP",
        badge: "Ofertas",
        badgeType: "green",
        price: "299",
        amenities: ["📶 Wi-Fi", "🏊‍♀️ Piscina", "☕ Café da manhã"]
    },
    {
        id: "skyline-rio",
        name: "Skyline Rio Hotel",
        image: skyline,
        rating: "4,7",
        reviews: 823,
        location: "Rio de Janeiro, RJ",
        badge: "Mais reservado",
        badgeType: "blue",
        price: "459",
        amenities: ["📶 Wi-Fi", "🏊‍♀️ Piscina", "🏋️‍♀️ Academia"]
    },
    {
        id: "villa-sao-paulo",
        name: "Villa São Paulo",
        image: villa,
        rating: "4,5",
        reviews: 305,
        location: "São Paulo, SP",
        badge: "Novo",
        badgeType: "purple",
        price: "349",
        amenities: ["📶 Wi-Fi", "☕ Café da manhã", "🏋️‍♀️ Academia"]
    },
    {        
        id: "floripa-beach",
        name: "Floria Beach Resort",
        image: floripa,
        rating: "4,7",
        reviews: 638,
        location: "Florianópolis, SC",
        badge: "Destaque",
        badgeType: "blue",
        price: "429",
        amenities: ["📶 Wi-Fi", "🏊‍♀️ Piscina", "☕ Café da manhã", "🌊 Acesso à praia" ]
    },
    {
        id: "salvador-mare",
        name: "Salvador Maré Resolt",
        image: salvador,
        rating: "4,8",
        reviews: 728,
        location: "Salvador, BH",
        badge: "Destaque",
        badgeType: "purple",
        price: "419",
        amenities: ["📶 Wi-Fi", "🏊‍♀️ Piscina", "☕ Café da manhã", "🌊 Vista para o mar" ]
    },
]

function FeaturedHotels({ onChooseHotel, selectedHotel }){
    return(
        <section className="featured-hotels" id="hospedagens">
            <div className="featured-hotels-container">
                <div className="section-header">
                    <h2>Hospedagens em destaque</h2>

                    <button className="see-all">
                        Ver todos
                        <span>→</span>
                    </button>
                </div>

                <div className="hotel-gridds">
                    {hotels.map((hotel) => (
                        <HotelCard 
                        key={hotel.name}
                        id={hotel.id}
                        image={hotel.image}
                        name={hotel.name}
                        rating={hotel.rating}
                        reviews={hotel.reviews}
                        location={hotel.location}
                        badge={hotel.badge}
                        badgeType={hotel.badgeType}
                        price={hotel.price}
                        amenities={hotel.amenities}
                        onChooseHotel={onChooseHotel}/>
                    ))}
                </div>

                {selectedHotel && (
                    <div className="selected-hotel-featured">
                        <div className="selected-hotel-header-featured">
                            <span>✓</span>

                            <div>
                                <h3>Hospedagem selecionada</h3>
                                <p>Confira os detalhes da sua escolha.</p>
                            </div>
                        </div>

                        <div className="selected-hotel-content-featured">
                            <img src={selectedHotel.image} alt={selectedHotel.name} />

                            <div className="selected-hotel-info-featured">
                                <h3>{selectedHotel.name}</h3>

                                <p>
                                    📍 {selectedHotel.location}
                                </p>

                                <strong>
                                    R$ {selectedHotel.price} <span>/ noite</span>
                                </strong>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default FeaturedHotels;