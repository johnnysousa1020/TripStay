import "../styles/FlightResults.css"

function FlightResults({ searchData, onSelectFlight, selectedFlight, setSelectesFlight }){

    const flights = [
        {
            id: 1,
            airline: "LATAM",
            logo: "✈️",
            departaureTime: "08:30",
            arrivalTime: "09:35",
            duration: "1h 05min",            
            origin: "GRU",
            destination: "GIG",
            price: 489
        },
        {
            id: 2,
            airline: "AZUL",
            logo: "✈️",
            departaureTime: "10:15",
            arrivalTime: "11:25",
            duration: "1h 10min",            
            origin: "GRU",
            destination: "GIG",
            price: 529
        },
        {
            id: 3,
            airline: "GOL",
            logo: "✈️",
            departaureTime: "14:40",
            arrivalTime: "15:45",
            duration: "1h 05min",            
            origin: "GRU",
            destination: "GIG",
            price: 449
        }
    ]

    return(
        <section className="flight-results-pesquisar">
            <div className="flight-results-header-pesquisar">
                <div>
                    <h2>
                        Voos encontrados
                    </h2>
                    <p>
                        {searchData.origin} → {searchData.destination}
                    </p>
                </div>

                <span>
                    {flights.length} opções encontradas
                </span>
            </div>

            <div className="flight-results-list">
                {flights.map((flight) => (
                    <article className="flight-card-result" key={flight.key}>
                        <div className="flight-airline-results">
                            <span className="flight-airline-logo">
                                {flight.logo}
                            </span>

                            <strong>{flight.airline}</strong>
                        </div>

                        <div className="flight-route-info">
                            <div>
                                <strong>{flight.departaureTime}</strong>

                                <span>{flight.origin}</span>
                            </div>

                            <div className="flight-duration">
                                <span>{flight.duration}</span>
                                <span>Direto</span>
                            </div>

                            <div>
                                <strong>{flight.arrivalTime}</strong>
                                <span>{flight.destination}</span>
                            </div>
                        </div>

                        <div className="flight-price-results">
                            <span>A partir de</span>

                            <strong> R$ {flight.price.toLocaleString("pt-BR")}</strong>

                            <small>por passageiro</small>

                            <button type="button" onClick={() => onSelectFlight(flight)}>
                                Selecionar voo
                            </button>
                        </div>
                    </article>
                ))}
            </div>

            {selectedFlight && (
                <div className="selected-flight">
                    <div className="selected-flight-header">
                        <span>✓</span>

                        <div>
                            <h3>Voo selecionado</h3>
                            <p>Confira os detalhes da sua escolha.</p>
                        </div>
                    </div>

                    <div className="selected-flight-content">
                        <div className="selected-flight-airline">
                            <span>✈️</span>
                            <strong>{selectedFlight.airline}</strong>
                        </div>

                        <div className="selected-flight-route">
                            <div>
                                <strong>{selectedFlight.departaureTime}</strong>
                                <span>{selectedFlight.duration}</span>
                            </div>

                            <div>
                                <span>{selectedFlight.duration}</span>
                                <span>Direto</span>
                            </div>

                            <div>
                                <span>{selectedFlight.arrivalTime}</span>
                                <span>{selectedFlight.destination}</span>
                            </div>
                        </div>

                        <div className="selected-flight-price">
                            <span>Valor por passageiro</span>

                            <strong>
                                R$ {selectedFlight.price.toLocaleString("pt-BR")}
                            </strong>
                        </div>
                    </div>

                    <div className="selected-flight-actions">
                    <button 
                    type="button" 
                    className="change-flight-button"
                    onClick={() => setSelectesFlight(null)}>
                        Escolher outro voo
                    </button>

                    <button 
                    type="button"
                    className="continue-flight-button"
                    onClick={() => {
                        document
                        .getElementById("hospedagens")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }}>
                        Continuar para hospedagens
                    </button>
                    </div>
                </div>
            )}
        </section>
    )
}

export default FlightResults