import { useState } from "react";
import FlightResults from "./FlightResults";
import "../styles/FlightSearch.css"

function FlighSearch({ onSearch, onSelectFlight, selectedFlight }){
    const [tripType, setTripType] = useState("roundTrip")
    const [origin, setOrigin] = useState("")
    const [destination, setDestination] = useState("")
    const [departure, setDeparture] = useState("")
    const [returnDate, setReturDate] = useState("")
    const [passangers, setPassangers] = useState("1")
    const [cabinClass, setCabinClass] = useState("Economy")
    const [error, setError] = useState("")
    const [searchCompleted, setSerachCompleted] = useState(false)
    const [searchData, setSearchData] = useState(null)

    const swapLocations = () => {
        const currentOrigin = origin

        setOrigin(destination)
        setDestination(currentOrigin)
    }

    const handleSearch = (event) => {
        event.preventDefault()

        setError("")
        setSerachCompleted(false)

        if(!origin.trim()){
            setError("Informe a cidade ou aeroporto de origem.")
            return
        }

        if(!destination.trim()){
            setError("Informe a cidade ou aeroporto de destino.")
            return
        }

        if(!departure){
            setError("Selecione a data de ida.")
            return
        }

        if(tripType === "roundTrip" && !returnDate){
            setError("Selecione a data de volta.")
            return
        }

        if(tripType === "roundTrip" && returnDate < departure){
            setError("A data de volta não pode ser anterior à data de ida.")
            return
        }

        setSerachCompleted(true)

        const data = {
            tripType,
            origin,
            destination,
            departure,
            returnDate,
            passangers,
            cabinClass
        }

        setSearchData(data)
        setSerachCompleted(true)
        onSearch(data)
    }

    return(
        <>
        <section className="flight-search">
            <div className="flight-search-container">
                <div className="flight-search-header">
                    <div className="flight-search-icon">
                        ✈️
                    </div>

                    <div>
                        <h2>
                            Encontre seu próximo voo
                        </h2>

                        <p>
                            Compare opções e planeja sua viagem.
                        </p>
                    </div>
                </div>

                <form className="flight-search-form" onSubmit={handleSearch}>
                    <div className="trip-type">
                        <label>
                            <input 
                            type="radio"
                            name="tripType"
                            value="roundTrip"
                            checked={tripType === "roundTrip"}
                            onChange={(e) => setTripType(e.target.value)} />

                            <span>
                                Ida e volta
                            </span>
                        </label>

                        <label>
                            <input 
                            type="radio"
                            name="tripType"
                            value="oneWay"
                            checked={tripType === "oneWay"}
                            onChange={(e) => setTripType(e.target.value)} />

                            <span>
                                Só ida
                            </span>
                        </label>
                    </div>

                    <div className="flight-routess">
                        <div className="flight-field">
                            <label>
                                De
                            </label>

                            <div className="flight-input-wrapper">
                                <span>
                                    ✈️
                                </span>

                                <input 
                                type="text"
                                placeholder="Cidade ou aeroporto"
                                value={origin}
                                onChange={(e) => setOrigin(e.target.value)} />
                            </div>
                        </div>

                        <button 
                        type="buttton"
                        className="swap-button"
                        onClick={swapLocations}
                        aria-label="Trocar origem e destino">
                            ⇄
                        </button>

                        <div className="flight-field">
                            <label>
                                Para
                            </label>

                            <div className="flight-input-wrapper">
                                <span>
                                    ✈️
                                </span>

                                <input 
                                type="text"
                                placeholder="Cidade ou aeroporto"
                                value={destination}
                                onChange={(e) => setDestination(e.target.value)} />
                            </div>
                        </div>
                    </div>

                    <div className="flight-details">
                        <div className="flight-field">
                            <label>
                                Ida
                            </label>

                            <input 
                            type="date"
                            value={departure}
                            onChange={(e) => setDeparture(e.target.value)} />
                        </div>

                        {tripType === "roundTrip" && (
                            <div className="flight-field">
                                <label>
                                    Volta
                                </label>

                                <input 
                                type="date"
                                value={returnDate}
                                min={departure}
                                onChange={(e) => setReturDate(e.target.value)} />
                            </div>
                        )}

                        <div className="flight-field">
                            <label>
                                Passageiros
                            </label>

                            <select 
                            value={passangers} 
                            onChange={(e) => setPassangers(e.target.value)}>
                                <option value="1">
                                    1 passageiro
                                </option>

                                <option value="2">
                                    2 passageiro
                                </option>

                                <option value="3">
                                    3 passageiro
                                </option>

                                <option value="4">
                                    4 passageiro
                                </option>

                                <option value="5">
                                    5 passageiro
                                </option>

                                <option value="6">
                                    6 passageiro
                                </option>
                            </select>
                        </div>

                        <div className="flight-field">
                            <label>
                                Classe
                            </label>

                            <select 
                            value={cabinClass} 
                            onChange={(e) => setCabinClass(e.target.value)}>
                                <option value="Economy">
                                    Economy
                                </option>

                                <option value="Premium Economy">
                                    Premium Economy
                                </option>

                                <option value="Business">
                                    Business
                                </option>

                                <option value="First Class">
                                    First Class
                                </option>
                            </select>
                        </div>
                    </div>

                    <button 
                    type="submit"
                    className="flight-search-button">
                        🔎 Buscar voos
                    </button>
                    {error && (
                        <p className="flight-search-error">
                            ⚠️ {error}
                        </p>
                    )}

                    {searchCompleted && (
                        <p className="flight-search-success">
                            ✈️ Pesquisa realizada com sucesso!
                        </p>
                    )}
                </form>
            </div>
        </section>

        {searchData && (
            <FlightResults searchData={searchData} onSelectFlight={onSelectFlight} selectedFlight={selectedFlight}/>
        )}
        </>
    )
}

export default FlighSearch