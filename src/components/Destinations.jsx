import DestinationCard from "./DestinationCard"
import sao from "../assets/sao-paulo.jpg"
import rio from "../assets/rio-de-janeiro.jpg"
import gramdo from "../assets/gramado.jpg"
import ubatuba from "../assets/ubatuba.jpg"
import floria from "../assets/florianopolis.jpg"
import salvador from "../assets/salvador.jpg"
import "../styles/Destinations.css"

const destinations = [
    {
        name: "São Paulo",
        hotels: 128,
        image: sao
    },
    {
        name: "Rio de janeiro",
        hotels: 96,
        image: rio
    },
    {
        name: "Gramado",
        hotels: 84,
        image: gramdo
    },
    {
        name: "Ubatuba",
        hotels: 72,
        image: ubatuba
    },
    {
        name: "Florianópolis",
        hotels: 68,
        image: floria
    },
    {
        name: "Salvador",
        hotels: 55,
        image: salvador
    },
]

function Destinations(){
    return(
        <section className="destinations" id="destinos">
            <div className="destinations-conatiner">
                <div className="section-header">
                    <h2>Destinos populares</h2>

                    <button className="see-all">
                        Ver todos
                        <span>→</span>
                    </button>
                </div>

                <div className="destions-grid">
                    {destinations.map((destination) => (
                        <DestinationCard 
                        key={destination.name}
                        image={destination.image}
                        name={destination.name}
                        hotels={destination.hotels}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Destinations