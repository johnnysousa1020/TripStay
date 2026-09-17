import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/MyReservations.css"

function MyReservations(){
    const [reservations, setReservations] = useState([])
    const [reservationToCancel, setReservationToCancel] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const savedReservations = JSON.parse(localStorage.getItem("reservations")) || []

        const savedTrips = JSON.parse(localStorage.getItem("tripReservations")) || []

        const tripsWithType = savedTrips.map((trip) => ({
            ...trip,
            type: "trip"
        }))

        const reservationsWithType = savedReservations.map((reservation) => ({
            ...reservation,
            type: "hotel"
        }))

        setReservations([
            ...reservationsWithType,
            ...tripsWithType
        ])

    }, [])

    const cancelReservation = () => {
        if(!reservationToCancel){
            return
        }

        if(reservationToCancel.type === "trip"){
            const savedTrips = JSON.parse(localStorage.getItem("tripReservations")) || []

            const updatedTrips = savedTrips.filter(
                (trip) => trip.id !== reservationToCancel.id
            )

            localStorage.setItem(
                "tripReservations",
                JSON.stringify(updatedTrips)
            )
        }else{
            const savedHotels = JSON.parse(localStorage.getItem("reservations")) || []

            const updatedHotels = savedHotels.filter(
                (reservation) => reservation.id !== reservationToCancel.id
            )

            localStorage.setItem(
                "reservations",
                JSON.stringify(updatedHotels)
            )
        }

        setReservations((currentReservations) => 
        currentReservations.filter(
            (reservation) => reservation.id !== reservationToCancel.id
        )
      )

      setReservationToCancel(null)
    }

    return(
        <main className="my-reservations">
            <div className="my-reservations-container">

                <button className="reservations-back-button" onClick={() => navigate(-1)}>
                    ⇦ Voltar
                </button>

                <div className="reservations-header">
                    <h1>Minhas Reservas</h1>
                    <p>
                        Confira suas hospedagens reservadas.
                    </p>
                </div>

                {reservations.length === 0 ? (
                    <div className="empty-reservations">
                        <span>🏩</span>

                        <h2>
                            Você ainda não possui reservas
                        </h2>

                        <p>
                            Encontre um hotel e faça sua primeira reserva.
                        </p>

                        <button onClick={() => navigate("/")}>
                            Explorar hotéis
                        </button>
                    </div>

                ) : (

                    <div className="reservations-list">

                        {reservations.map((reservation) => (

                            reservation.type === "trip" ? (

                            <article className="reservation-card trip-reservation-card" key={reservation.id}> 

                            <div className="trip-reservation-header">
                                <span>🧳</span>

                                <div>
                                    <h2>Viagem completa</h2>
                                    <p>Voo + hospedagem</p>
                                </div>
                            </div>

                            <div className="trip-reservation-content">
                                <div className="trip-reservation-flight">
                                    <span>✈️ Voo</span>

                                    <strong>
                                        {reservation.flight.airline}
                                    </strong>

                                    <p>
                                        {reservation.flight.origin}
                                        {"→"}
                                        {reservation.flight.destination}
                                    </p>

                                    <small>
                                        {reservation.flight.departureTime}
                                        {"←"}
                                        {reservation.flight.arrivalTime}
                                    </small>
                                </div>

                                <div className="trip-reservation-hotel">
                                    <img src={reservation.hotel.image} alt={reservation.name} />

                                    <div>
                                        <span>🏨 Hospedagem</span>

                                        <h3>
                                            {reservation.hotel.name}
                                        </h3>

                                        <p>
                                            📍 {reservation.hotel.location}
                                        </p>

                                        <small>
                                            {reservation.hotel.nights}{""}
                                            {reservation.hotel.nights === 1
                                            ? "noite" : "noites"}
                                        </small>
                                    </div>
                                </div>

                                <div className="reservations-price">
                                    <span>
                                        Total da viagem
                                    </span>

                                    <strong>
                                        R$ {reservation.total.toLocaleString("pt-BR")}
                                    </strong>
                                </div>
                            </div>

                            <div className="trip-reservation-dates">
                                <div>
                                    <span>Ida</span>

                                    <strong>
                                        {reservation.dates.departure}
                                    </strong>
                                </div>

                                <div>
                                    <span>Volta</span>

                                    <strong>
                                        {reservation.dates.returnDate}
                                    </strong>
                                </div>

                                <div>
                                    <span>Código</span>

                                    <strong>
                                        TS-{String(reservation.id).slice(-5)}
                                    </strong>
                                </div>
                            </div>

                            <button 
                            className="cancel-reservationsy-button"
                            onClick={() => setReservationToCancel(reservation)}>
                                Cancelar viagem
                            </button>
                            </article>

                            ) : (

                            <article className="reservation-card" key={reservation.id}>

                                <img src={reservation.hotelImge} alt={reservation.hotelName} />

                                <div className="resevation-info">
                                    <h2>{reservation.hotelImage}</h2>

                                    <p>
                                        📍 {reservation.location}
                                    </p>

                                    <div className="reservation-details">
                                        <div>
                                            <span>Check-in</span>
                                            <strong>
                                                {reservation.checkIn}
                                            </strong>
                                        </div>

                                        <div>
                                            <span>Check-out</span>
                                            <strong>
                                                {reservation.checkOut}
                                            </strong>
                                        </div>

                                        <div>
                                            <span>Hóspedes</span>
                                            <strong>
                                                {reservation.guests}
                                            </strong>
                                        </div>

                                        <div>
                                            <span>Noites</span>
                                            <strong>
                                                {reservation.nights}
                                            </strong>
                                        </div>
                                    </div>
                                </div>

                                <div className="reservations-price">
                                    <span>
                                        Total
                                    </span>

                                    <strong>
                                        R$ {reservation.total.toLocaleString("pt-BR")}
                                    </strong>
                                </div>

                                <button className="view-reservation-button"
                                onClick={() => navigate(`/hotel/${reservation.hotelId}`)}>
                                    Ver detalhes
                                </button>

                                <button className="cancel-reservationsy-button" 
                                onClick={() => setReservationToCancel(reservation)}>
                                    Cancelar reserva
                                </button>
                            </article>
                            )
                        ))}
                    </div>
                )}
            </div>

            {reservationToCancel && (
                <div className="cancel-modall-overlay">
                    <div className="cancel-modall">
                        <div className="cancel-modall-icon">
                            ⚠️
                        </div>

                        <h2>
                            {reservationToCancel.type === "trip"
                            ? "Cancelar viagem?"
                            : "Cancelar reserva?"}
                        </h2>

                        <p>
                            {reservationToCancel.type === "trip"
                             ? "Tem certeza que deseja cancelar esta viagem?"
                             : "Tem certeza que deseja cancelar esta reserva?"}
                        </p>

                        <span className="cancel-modall-warning">
                            Esta ação não poderá ser desfeita.
                        </span>

                        <div className="cancel-modall-actions">
                            <button
                            type="button"
                            className="cancel-modall-back"
                            onClick={() => setReservationToCancel(null)}>
                                Voltar
                            </button>

                            <button
                            type="button"
                            className="cancel-modall-confirm"
                            onClick={cancelReservation}>
                                {reservationToCancel.type === "trip"
                                ? "Cancelar viagem"
                                : "Cancelar reserva"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    )
}

export default MyReservations