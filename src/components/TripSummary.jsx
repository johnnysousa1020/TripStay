import { useState } from "react"
import "../styles/TripSummary.css"

function TripSummary({ selectedFlight, selectedHotel, searchData }) {
    const [confirmed, setConfirmed] = useState(false)

    const confirmTrip = () => {
        const trip = {
            id: Date.now(),

            flight: {
            airline: selectedFlight.airline,
            origin: selectedFlight.origin,
            destination: selectedFlight.destination,
            departureTime: selectedFlight.departureTime,
            arrivalTime: selectedFlight.arrivalTime,
            price: flightPrice
            },

            hotel: {
                id: selectedHotel.id,
                name: selectedHotel.name,
                image: selectedHotel.image,
                location: selectedHotel.location,
                pricePerNight: hotelPrice,
                nights: nights,
                total: hotelTotal
            },

            total: totalTrip,

            dates: {
                departure: searchData.departure,
                returnDate: searchData.returnDate || searchData.returnDate
            }
        }

        const savedTrips = JSON.parse(
            localStorage.getItem("tripReservations")
        ) || []

        savedTrips.push(trip)

        localStorage.setItem(
            "tripReservations",
            JSON.stringify(savedTrips)
        )

        setConfirmed(true)
    }

    if (!selectedFlight || !selectedHotel || !searchData) {
        return null
    }

    let nights = 0

    const departureDate = searchData.departure
    const returnDate = searchData.returnDate || searchData.returnDate

    if(departureDate && returnDate){

        const start = new Date(departureDate)
        const end = new Date(returnDate)

        const difference = end - start

        nights = Math.ceil(
        difference / (1000 * 60 * 60 * 24)
        )
    }

    const hotelPrice = Number(selectedHotel.price)
    const flightPrice = Number(selectedFlight.price)

    const hotelTotal = nights * hotelPrice
    const totalTrip = flightPrice + hotelTotal

    return (
        <section className="trip-summary">

            <div className="trip-summary-container">

                <div className="trip-summary-header">
                    <div className="trip-summary-icon">
                        🧳
                    </div>

                    <div>
                        <h2>Resumo da sua viagem</h2>
                        <p>
                            Confira os detalhes antes de continuar.
                        </p>
                    </div>
                </div>

                <div className="trip-summary-content">

                    {/* VOO */}

                    <div className="summary-section">

                        <div className="summary-section-title">
                            <span>✈️</span>
                            <h3>Voo</h3>
                        </div>

                        <div className="summary-flight">

                            <div>
                                <strong>
                                    {selectedFlight.airline}
                                </strong>

                                <p>
                                    {selectedFlight.origin} → {selectedFlight.destination}
                                </p>
                            </div>

                            <div className="summary-flight-times">
                                <strong>
                                    {selectedFlight.departureTime}
                                </strong>

                                <span>
                                    →
                                </span>

                                <strong>
                                    {selectedFlight.arrivalTime}
                                </strong>
                            </div>

                            <div className="summary-price">
                                <span>Voo</span>

                                <strong>
                                    R$ {flightPrice.toLocaleString("pt-BR")}
                                </strong>
                            </div>

                        </div>

                    </div>

                    {/* HOTEL */}

                    <div className="summary-section">

                        <div className="summary-section-title">
                            <span>🏨</span>
                            <h3>Hospedagem</h3>
                        </div>

                        <div className="summary-hotel">

                            <img
                                src={selectedHotel.image}
                                alt={selectedHotel.name}
                            />

                            <div className="summary-hotel-info">

                                <h3>
                                    {selectedHotel.name}
                                </h3>

                                <p>
                                    📍 {selectedHotel.location}
                                </p>

                                <p>
                                    {nights} {nights === 1 ? "noite" : "noites"}
                                </p>

                            </div>

                            <div className="summary-price">

                                <span>
                                    R$ {hotelPrice.toLocaleString("pt-BR")} / noite
                                </span>

                                <strong>
                                    R$ {hotelTotal.toLocaleString("pt-BR")}
                                </strong>

                            </div>

                        </div>

                    </div>

                </div>

                {/* TOTAL */}

                <div className="trip-summary-total">

                    <div>
                        <span>Total da viagem</span>
                        <small>
                            Voo + hospedagem
                        </small>
                    </div>

                    <strong>
                        R$ {totalTrip.toLocaleString("pt-BR")}
                    </strong>

                </div>

                <button
                    type="button"
                    className="confirm-trip-button"
                    onClick={confirmTrip}
                >
                    Confirmar viagem
                </button>

                {confirmed && (
                    <div className="trip-confirmation">
                        <div className="trip-connfirmation-icon">
                            ✔︎
                        </div>

                        <h2>Viagem confirmada!</h2>

                        <p>
                            Sua viagem foi planejada com sucesso.
                        </p>

                        <div className="confirmation-info">
                            <div>
                                <span>✈️ Voo</span>
                                <strong>
                                    {selectedFlight.airline}
                                </strong>
                                <small>
                                    {selectedFlight.origin} → {selectedFlight.destination}
                                </small>
                            </div>

                            <div>
                                <span>🏨 Hospedagem</span>
                                <strong>
                                    {selectedHotel.name}
                                </strong>
                                <small>
                                    {selectedHotel.location}
                                </small>
                            </div>

                            <div>
                                <span>🌙 Estadia</span>
                                <strong>
                                    {nights} {nights === 1 ? "noite" : "noites"}
                                </strong>
                            </div>

                            <div>
                                <span>💰 Total</span>
                                <strong>
                                    R$ {totalTrip.toLocaleString("pt-BR")}
                                </strong>
                            </div>
                        </div>

                        <div className="trip-code">
                            Código da viagem:
                            <strong>
                                TS-{Date.now().toString().slice(-5)}
                            </strong>
                        </div>
                    </div>
                )}

            </div>

        </section>
    )
}

export default TripSummary