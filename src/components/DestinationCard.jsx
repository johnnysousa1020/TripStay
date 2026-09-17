import "../styles/DestinationCard.css"

function DestinationCard({ image, name, hotels }){
    return(
        <article className="destination-card">
            <img src={image} alt={`Destino ${name}`} className="destination-image" />

            <div className="destination-overlay"></div>

            <div className="destination-info">
                <h3>{name}</h3>
                <span>{hotels} hospedagens</span>
            </div>
        </article>
    )
}

export default DestinationCard