import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import "../styles/HotalDetails.css"

// ===============================
// HOTEL AURORA - GRAMADO
// ===============================

import hotelAurora from "../assets/hotel-gramado.jpg"
import quartoAurora from "../assets/quarto-aurora.jpg"
import banheiroAurora from "../assets/banhe-gra.jpg"
import jardimAurora from "../assets/jardim-gra.jpg"
import lobbyAurora from "../assets/lobby-gra.jpg"
import restauranteAurora from "../assets/res-aurora.jpg"

// ===============================
// COSTA AZUL - UBATUBA
// ===============================

import hotelUbatuba from "../assets/hotel-ubatuba.jpg"
import quartoUbatuba from "../assets/quarto-uba.jpg"
import banheiroUbatuba from "../assets/banhe-uba.jpg"
import lobbyUbatuba from "../assets/lobby-uba.jpg"
import vistaUbatuba from "../assets/vista-uba.jpg"
import restauranteUbatuba from "../assets/res-uba.jpg"

// ===============================
// SKYLINE RIO
// ===============================

import hotelRio from "../assets/hotel-rio.jpg"
import quartoRio from "../assets/quarto-rio.jpg"
import banheiroRio from "../assets/banhe-rio.jpg"
import lobbyRio from "../assets/lobby-rio.jpg"
import restauranteRio from "../assets/res-rio.jpg"
import academiaRio from "../assets/aca-rio.jpg"

// ===============================
// VILLA SÃO PAULO
// ===============================

import hotelSaoPaulo from "../assets/hotel-sao.jpg"
import quartoSaoPaulo from "../assets/quarto-sao.jpg"
import banheiroSaoPaulo from "../assets/banhe-sao.jpg"
import lobbySaoPaulo from "../assets/lobby-sao.jpg"
import restauranteSaoPaulo from "../assets/res-sao.jpg"
import restauranteSaoPauloDois from "../assets/res-sao-dois.jpg"


// ===============================
// FLORIPA BEACH RESORT - FLORIANÓPOLIS
// ===============================

import hotelFloripa from "../assets/hotel-floria.jpg"
import quartoFloripa from "../assets/quarto-floripa.jpg"
import banheiroFloripa from "../assets/banhe-floripa.jpg"
import piscinaFloripa from "../assets/piscina-floripa.jpg"
import vistaFloripa from "../assets/vista-floripa.jpg"
import restauranteFloripa from "../assets/res-floripa.jpg"

// ===============================
// Salvador Maré Resolt - Salvador
// ===============================

import hotelSalvador from "../assets/hotel-salvador.jpg"
import quartoSalvador from "../assets/quarto-salvador.jpg"
import banheiroSalvador from "../assets/banheiro-salvador.jpg"
import piscinaSalvador from "../assets/piscina-salvador.jpg"
import vistaSalvador from "../assets/vista-salvador.jpg"
import restauranteSalvador from "../assets/restaurante-salvador.jpg"


const hotels = {

    // ========================================
    // HOTEL AURORA
    // ========================================

    "aurora": {

        name: "Hotel Aurora",

        location: "Gramado, Rio Grande do Sul",

        rating: "4,8",

        reviews: "512",

        price: "389",

        badge: "🔥 Mais reservado",


        images: [

            {
                src: hotelAurora,
                title: "Fachada do hotel"
            },

            {
                src: quartoAurora,
                title: "Quarto"
            },

            {
                src: banheiroAurora,
                title: "Banheiro"
            },

            {
                src: jardimAurora,
                title: "Jardim"
            },

            {
                src: lobbyAurora,
                title: "Lobby"
            },

            {
                src: restauranteAurora,
                title: "Restaurante"
            }

        ],


        description:
            "Uma experiência aconchegante e sofisticada no coração de Gramado. Perfeito para quem busca conforto, charme e momentos inesquecíveis.",


        amenities: [

            ["📶", "Wi-Fi gratuito"],

            ["☕", "Café da manhã"],

            ["🚗", "Estacionamento gratuito"],

            ["🍽️", "Restaurante"],

            ["🛎️", "Recepção 24h"],

            ["❄️", "Ar-condicionado"]

        ],


        nearby: [

            ["📍", "Centro de Gramado", "5 min de carro"],

            ["📍", "Rua Coberta", "6 min de carro"],

            ["📍", "Lago Negro", "7 min de carro"]

        ],


        about:
            "O Hotel Aurora é inspirado na hospitalidade europeia, oferecendo uma atmosfera acolhedora e sofisticada. Localizado no coração de Gramado, próximo aos principais pontos turísticos, o hotel conta com suítes confortáveis, gastronomia de excelência e uma estrutura completa para tornar sua estadia inesquecível.",


        reviewText: [

            [
                "Mariana Alves",
                "Hotel incrível! Atendimento excelente, café da manhã delicioso e localização perfeita."
            ],

            [
                "João Ferreira",
                "Quarto muito confortável e limpo. Voltaremos com certeza!"
            ],

            [
                "Carla Mendes",
                "Experiência maravilhosa! Tudo impecável, desde o check-in até o check-out."
            ]

        ]

    },


    // ========================================
    // COSTA AZUL
    // ========================================

    "costa-azul": {

        name: "Costa Azul Hotel",

        location: "Ubatuba, São Paulo",

        rating: "4,6",

        reviews: "412",

        price: "299",

        badge: "🏷️ Oferta",


        images: [

            {
                src: hotelUbatuba,
                title: "Fachada do hotel"
            },

            {
                src: quartoUbatuba,
                title: "Quarto"
            },

            {
                src: banheiroUbatuba,
                title: "Banheiro"
            },

            {
                src: lobbyUbatuba,
                title: "Lobby"
            },

            {
                src: vistaUbatuba,
                title: "Vista para o mar"
            },

            {
                src: restauranteUbatuba,
                title: "Restaurante"
            }

        ],


        description:
            "Um refúgio sofisticado à beira-mar em Ubatuba, perfeito para quem busca conforto, tranquilidade e uma experiência inesquecível junto à natureza.",


        amenities: [

            ["📶", "Wi-Fi gratuito"],

            ["🏊", "Piscina"],

            ["☕", "Café da manhã"],

            ["🅿️", "Estacionamento gratuito"],

            ["🛎️", "Recepção 24h"],

            ["❄️", "Ar-condicionado"]

        ],


        nearby: [

            ["📍", "Praia de Ubatuba", "3 min de carro"],

            ["📍", "Centro de Ubatuba", "8 min de carro"],

            ["📍", "Praia do Tenório", "10 min de carro"]

        ],


        about:
            "O Costa Azul Hotel combina conforto, sofisticação e a beleza natural do litoral de Ubatuba. Com ambientes modernos, áreas de lazer e uma localização privilegiada, é uma excelente opção para descansar e aproveitar a praia.",


        reviewText: [

            [
                "Lucas Martins",
                "Lugar incrível! O quarto tem uma vista maravilhosa para o mar."
            ],

            [
                "Fernanda Costa",
                "Hotel muito bonito, confortável e com atendimento excelente."
            ],

            [
                "Rafael Souza",
                "A localização é perfeita. Com certeza voltaria novamente."
            ]

        ]

    },


    // ========================================
    // SKYLINE RIO
    // ========================================

    "skyline-rio": {

        name: "Skyline Rio Hotel",

        location: "Rio de Janeiro, Rio de Janeiro",

        rating: "4,7",

        reviews: "631",

        price: "459",

        badge: "🔥 Mais reservado",


        images: [

            {
                src: hotelRio,
                title: "Fachada do hotel"
            },

            {
                src: quartoRio,
                title: "Quarto"
            },

            {
                src: banheiroRio,
                title: "Banheiro"
            },

            {
                src: lobbyRio,
                title: "Lobby"
            },

            {
                src: restauranteRio,
                title: "Restaurante"
            },

            {
                src: academiaRio,
                title: "Academia"
            }

        ],


        description:
            "Uma experiência sofisticada no coração do Rio de Janeiro, com ambientes modernos, vista privilegiada e uma atmosfera perfeita para aproveitar a cidade.",


        amenities: [

            ["📶", "Wi-Fi gratuito"],

            ["🏊", "Piscina"],

            ["🍽️", "Restaurante"],

            ["🍸", "Rooftop"],

            ["🏋️", "Academia"],

            ["🛎️", "Recepção 24h"]

        ],


        nearby: [

            ["📍", "Pão de Açúcar", "12 min de carro"],

            ["📍", "Copacabana", "15 min de carro"],

            ["📍", "Cristo Redentor", "20 min de carro"]

        ],


        about:
            "O Skyline Rio Hotel oferece uma experiência contemporânea com ambientes sofisticados e uma vista espetacular do Rio de Janeiro. Ideal para quem deseja combinar conforto, gastronomia e uma localização privilegiada.",


        reviewText: [

            [
                "Gabriel Lima",
                "A vista do hotel é simplesmente espetacular. Experiência incrível!"
            ],

            [
                "Ana Beatriz",
                "Quarto muito bonito e atendimento excelente."
            ],

            [
                "Pedro Henrique",
                "O rooftop é maravilhoso, principalmente durante o pôr do sol."
            ]

        ]

    },


    // ========================================
    // VILLA SÃO PAULO
    // ========================================

    "villa-sao-paulo": {

        name: "Villa São Paulo",

        location: "São Paulo, São Paulo",

        rating: "4,5",

        reviews: "503",

        price: "349",

        badge: "✨ Novo",


        images: [

            {
                src: hotelSaoPaulo,
                title: "Fachada do hotel"
            },

            {
                src: quartoSaoPaulo,
                title: "Quarto"
            },

            {
                src: banheiroSaoPaulo,
                title: "Banheiro"
            },

            {
                src: lobbySaoPaulo,
                title: "Lobby"
            },

            {
                src: restauranteSaoPaulo,
                title: "Restaurante"
            },

            {
                src: restauranteSaoPauloDois,
                title: "Restaurante - área externa"
            }

        ],


        description:
            "Um hotel contemporâneo e sofisticado em São Paulo, com ambientes elegantes, conforto e uma vista impressionante da cidade.",


        amenities: [

            ["📶", "Wi-Fi gratuito"],

            ["🍽️", "Restaurante"],

            ["🍸", "Rooftop"],

            ["🏊", "Piscina"],

            ["🏋️", "Academia"],

            ["🛎️", "Recepção 24h"]

        ],


        nearby: [

            ["📍", "Avenida Paulista", "10 min de carro"],

            ["📍", "Parque Ibirapuera", "12 min de carro"],

            ["📍", "Faria Lima", "15 min de carro"]

        ],


        about:
            "O Villa São Paulo Hotel combina sofisticação, conforto e a energia da maior cidade do Brasil. Seus ambientes contemporâneos e sua localização estratégica tornam a hospedagem ideal para viagens de lazer ou negócios.",


        reviewText: [

            [
                "Camila Rocha",
                "Hotel moderno, elegante e com uma vista incrível da cidade."
            ],

            [
                "Bruno Almeida",
                "Quarto muito confortável e excelente atendimento."
            ],

            [
                "Juliana Martins",
                "O rooftop é lindo e a localização é excelente."
            ]

        ]

    },


// ========================================
// FLORIPA BEACH RESORT
// ========================================

"floripa-beach": {

    name: "Floripa Beach Resort",

    location: "Florianópolis, Santa Catarina",

    rating: "4,7",

    reviews: "638",

    price: "429",

    badge: "🌴 Destaque",

    images: [

        {
            src: hotelFloripa,
            title: "Fachada do hotel"
        },

        {
            src: quartoFloripa,
            title: "Quarto"
        },

        {
            src: banheiroFloripa,
            title: "Banheiro"
        },

        {
            src: piscinaFloripa,
            title: "Piscina"
        },

        {
            src: vistaFloripa,
            title: "Vista para o mar"
        },

        {
            src: restauranteFloripa,
            title: "Restaurante"
        }

    ],

    description:
        "Um resort sofisticado à beira-mar em Florianópolis, perfeito para quem busca conforto, tranquilidade e uma experiência inesquecível cercada pelas belezas naturais de Santa Catarina.",

    amenities: [

        ["📶", "Wi-Fi gratuito"],

        ["🏊", "Piscina"],

        ["☕", "Café da manhã"],

        ["🌊", "Acesso à praia"],

        ["🍽️", "Restaurante"],

        ["🛎️", "Recepção 24h"]

    ],

    nearby: [

        ["📍", "Praia dos Ingleses", "8 min de carro"],

        ["📍", "Jurerê Internacional", "15 min de carro"],

        ["📍", "Lagoa da Conceição", "20 min de carro"]

    ],

    about:
        "O Floripa Beach Resort combina sofisticação, conforto e a beleza do litoral de Florianópolis. Com ambientes modernos, piscina, acesso à praia, gastronomia e uma vista privilegiada para o mar, o resort foi pensado para proporcionar uma experiência completa de descanso e lazer.",

    reviewText: [

        [
            "Marina Oliveira",
            "O hotel é maravilhoso! O quarto é confortável e a vista para o mar é incrível."
        ],

        [
            "Lucas Mendes",
            "A estrutura do resort é excelente. Piscina linda, restaurante muito bom e atendimento impecável."
        ],

        [
            "Beatriz Santos",
            "Uma das melhores experiências que já tive. O hotel é lindo e muito tranquilo."
        ]

    ]

},

"salvador-mare": {

    name: "Salvador Maré Resort",

    location: "Salvador, Bahia",

    rating: "4,7",

    reviews: "721",

    price: "419",

    badge: "🌴 Destaque",

    images: [

        {
            src: hotelSalvador,
            title: "Fachada do hotel"
        },

        {
            src: quartoSalvador,
            title: "Quarto"
        },

        {
            src: banheiroSalvador,
            title: "Banheiro"
        },

        {
            src: piscinaSalvador,
            title: "Piscina"
        },

        {
            src: vistaSalvador,
            title: "Vista para o mar"
        },

        {
            src: restauranteSalvador,
            title: "Restaurante"
        }

    ],

    description:
        "Um resort sofisticado em Salvador, perfeito para quem busca conforto, lazer e uma experiência inesquecível junto ao litoral baiano.",

    amenities: [

        ["📶", "Wi-Fi gratuito"],

        ["🏊", "Piscina"],

        ["☕", "Café da manhã"],

        ["🌊", "Acesso à praia"],

        ["🍽️", "Restaurante"],

        ["🛎️", "Recepção 24h"]

    ],

    nearby: [

        ["📍", "Farol da Barra", "8 min de carro"],

        ["📍", "Pelourinho", "20 min de carro"],

        ["📍", "Praia do Porto da Barra", "10 min de carro"]

    ],

    about:
        "O Salvador Maré Resort combina conforto, sofisticação e a energia do litoral baiano. O resort oferece ambientes modernos, piscina, gastronomia, acesso à praia e uma vista privilegiada para o mar de Salvador.",

    reviewText: [

        [
            "Rafael Oliveira",
            "Hotel maravilhoso! O quarto é muito confortável e a vista para o mar é incrível."
        ],

        [
            "Mariana Santos",
            "A estrutura é excelente, principalmente a piscina e o restaurante. Voltaria novamente."
        ],

        [
            "Gabriel Almeida",
            "Um lugar muito bonito e tranquilo. O atendimento também foi excelente."
        ]

    ]

},

}


function HotelDetails() {

    const { id } = useParams()
    const navigate = useNavigate()

    const [checkIn, setCheckIn] = useState("")
    const [checkOut, setCheckOut] = useState("")
    const [guests, setGuests] = useState("2")
    const [showConfirmation, setShowConfirmation] = useState(false)
    const [showSuccessModel, setShowSuccessModel] = useState(false)

    const today = new Date().toISOString().split("T")[0]


    // Hotel selecionado

    const hotel = hotels[id]

    let nights = 0

    if(checkIn && checkOut){
        const start = new Date(checkIn)
        const end = new Date(checkOut)

        const difference = end - start

        nights = Math.ceil(
            difference / (1000 * 60 * 60 * 24)
        )

        if(nights < 1){
            nights = 0
        }
    }

    const total = nights * Number(hotel.price)


    // Controla a galeria

    const [showGallery, setShowGallery] = useState(false)


    // Imagem selecionada dentro da galeria

    const [selectedImage, setSelectedImage] = useState(0)

    const handleReservation = () => {
        if(!checkIn || !checkOut){
            alert("Selecione as datas de check-in e check-out.")
            return
        }

        if(nights < 1){
            alert("Selecione um periodo válido para sua hospedagem.")
            return
        }

        setShowConfirmation(true)
    }

    const confirmReservation = () => {
        const resevation = {
            id: Date.now(),
            hotelId: id,
            hotelName: hotel.name,
            hotelImge: hotel.images[0].src,
            location: hotel.location,
            checkIn,
            checkOut,
            guests: Number(guests),
            nights,
            pricePerNight: Number(hotel.price),
            total
        }

        const existingResevations = JSON.parse(localStorage.getItem("reservations")) || []

        const updatedReservations = [
            ...existingResevations,
            resevation
        ]

        localStorage.setItem(
            "reservations",
            JSON.stringify(updatedReservations)
        )
        
        setShowConfirmation(false)
        setShowSuccessModel(true)
    }


    if (!hotel) {

        return (

            <main className="hotel-not-found">

                <h1>Hotel não encontrado</h1>

                <p>
                    Não encontramos a hospedagem que você está procurando.
                </p>

                <button onClick={() => navigate("/")}>
                    Voltar para hotéis
                </button>

            </main>

        )

    }


    return (

        <main className="hotel-details">


            {/* =====================================
                VOLTAR
            ===================================== */}

            <div className="hotel-details-container">

                <button
                    className="back-button"
                    onClick={() => navigate(-1)}
                >
                    ← Voltar para hotéis
                </button>

            </div>


            {/* =====================================
                GALERIA PRINCIPAL
            ===================================== */}

            <section className="hotel-gallery hotel-details-container">


                {/* Imagem principal */}

                <div className="gallery-main">

                    <img
                        src={hotel.images[0].src}
                        alt={`${hotel.name} - ${hotel.images[0].title}`}
                    />

                </div>


                {/* Imagens secundárias */}

                <div className="gallery-secondary">


                    <img
                        src={hotel.images[1].src}
                        alt={`${hotel.name} - ${hotel.images[1].title}`}
                    />


                    <div className="gallery-last">


                        <img
                            src={hotel.images[2].src}
                            alt={`${hotel.name} - ${hotel.images[2].title}`}
                        />


                        <button
                            className="gallery-button"
                            onClick={() => {

                                setSelectedImage(0)

                                setShowGallery(true)

                            }}
                        >
                            ▧ Ver todas as fotos
                        </button>


                    </div>

                </div>

            </section>


            {/* =====================================
                MODAL - TODAS AS FOTOS
            ===================================== */}

            {showGallery && (

                <div
                    className="gallery-modal"
                    onClick={() => setShowGallery(false)}
                >


                    <div
                        className="gallery-modal-content"
                        onClick={(event) => event.stopPropagation()}
                    >


                        {/* Cabeçalho */}

                        <div className="gallery-modal-header">

                            <div>

                                <h2>
                                    Fotos do {hotel.name}
                                </h2>

                                <p>
                                    {hotel.images.length} fotos
                                </p>

                            </div>


                            <button
                                className="gallery-close"
                                onClick={() => setShowGallery(false)}
                            >
                                ✕
                            </button>

                        </div>


                        {/* Imagem grande */}

                        <div className="gallery-preview">

                            <img
                                src={hotel.images[selectedImage].src}
                                alt={`${hotel.name} - ${hotel.images[selectedImage].title}`}
                            />

                        </div>


                        {/* Miniaturas */}

                        <div className="gallery-thumbnails">

                            {hotel.images.map(
                                (image, index) => (

                                    <button
                                        key={index}
                                        className={
                                            selectedImage === index
                                                ? "gallery-thumbnail active"
                                                : "gallery-thumbnail"
                                        }
                                        onClick={() =>
                                            setSelectedImage(index)
                                        }
                                    >

                                        <img
                                            src={image.src}
                                            alt={image.title}
                                        />

                                        <span>
                                            {image.title}
                                        </span>

                                    </button>

                                )
                            )}

                        </div>


                    </div>

                </div>

            )}


            {/* =====================================
                CONTEÚDO PRINCIPAL
            ===================================== */}

            <section className="hotel-content hotel-details-container">


                <div className="hotel-main-info">


                    <span className="hotel-badge">
                        {hotel.badge}
                    </span>


                    <div className="hotel-title-row">

                        <h1>
                            {hotel.name}
                        </h1>


                        <div className="hotel-rating">

                            <span>
                                ★★★★★
                            </span>

                            <strong>
                                {hotel.rating}
                            </strong>

                            <p>
                                ({hotel.reviews} avaliações)
                            </p>

                        </div>

                    </div>


                    <p className="hotel-location">
                        📍 {hotel.location}
                    </p>


                    <p className="hotel-description">
                        {hotel.description}
                    </p>


                    <div className="hotel-highlights">

                        {hotel.amenities
                            .slice(0, 4)
                            .map(
                                ([icon, text], index) => (

                                    <span key={index}>
                                        {icon} {text}
                                    </span>

                                )
                            )}

                    </div>

                </div>


                {/* =====================================
                    CARD DE RESERVA
                ===================================== */}

                <aside className="booking-card">


                    <p>
                        A partir de
                    </p>


                    <div className="booking-price">

                        <strong>
                            R$ {hotel.price}
                        </strong>

                        <span>
                            / noite
                        </span>

                    </div>


                    <div className="booking-field">

                        <label>
                            Check-in
                        </label>

                        <input type="date" min={today} value={checkIn} onChange={(e) => setCheckIn(e.target.value)}/>

                    </div>


                    <div className="booking-field">

                        <label>
                            Check-out
                        </label>

                        <input type="date" min={checkIn || today} value={checkOut} onChange={(e) => setCheckOut(e.target.value)}/>

                    </div>


                    <div className="booking-field">

                        <label>
                            Hóspedes
                        </label>


                        <select value={guests} onChange={(e) => setGuests(e.target.value)}>

                            <option value="1">
                                1 hóspede
                            </option>

                            <option value="2">
                                2 hóspedes
                            </option>

                            <option value="3">
                                3 hóspedes
                            </option>

                            <option value="4">
                                4 hóspedes
                            </option>

                        </select>

                    </div>

                    {nights > 0 && (
                        <div className="booking-summary-noites">
                            <div>
                                <span>{ nights} {nights === 1 ? "noite" : "noites"} </span>

                                <span>
                                    R$ {hotel.price} x {nights}
                                </span>
                            </div>

                            <div className="booking-total-noites">
                                <strong>Total</strong>

                                <strong>
                                    R$ {total.toLocaleString("pt-BR")}
                                </strong>
                            </div>
                        </div>
                    )}


                    <button className="booking-button" onClick={handleReservation}>
                        Reservar agora
                    </button>


                    <small>
                        🛡️ Pagamento seguro
                    </small>

                    <small>
                        Sem taxas de reserva
                    </small>

                </aside>

            </section>


            {/* =====================================
                COMODIDADES
            ===================================== */}

            <section className="amenities hotel-details-container">


                <h2>
                    O que este hotel oferece
                </h2>


                <div className="amenities-grid">

                    {hotel.amenities.map(
                        ([icon, text], index) => (

                            <div
                                className="amenity-card"
                                key={index}
                            >

                                <span>
                                    {icon}
                                </span>

                                <p>
                                    {text}
                                </p>

                            </div>

                        )
                    )}

                </div>


                <button className="all-amenities">
                    Ver todas as comodidades ↓
                </button>

            </section>


            {/* =====================================
                SOBRE O HOTEL
            ===================================== */}

            <section className="about-hotel hotel-details-container">


                <div className="about-hotel-content">

                    <h2>
                        Sobre este hotel
                    </h2>


                    <p>
                        {hotel.about}
                    </p>


                    <button>
                        Ler mais ↓
                    </button>

                </div>


                <img
                    src={hotel.images[0].src}
                    alt={`${hotel.name} à noite`}
                />

            </section>


            {/* =====================================
                LOCALIZAÇÃO
            ===================================== */}

            <section className="location hotel-details-container">


                <h2>
                    Localização
                </h2>


                <p>
                    {hotel.location}
                </p>


                <div className="location-content">


                    <div className="nearby-places">

                        {hotel.nearby.map(
                            ([icon, place, time], index) => (

                                <div key={index}>

                                    <span>
                                        {icon}
                                    </span>

                                    <strong>
                                        {place}
                                    </strong>

                                    <small>
                                        {time}
                                    </small>

                                </div>

                            )
                        )}

                    </div>


                    <div className="map-placeholder">

                        <span>
                            📍
                        </span>

                        <p>
                            Mapa da localização
                        </p>

                    </div>

                </div>

            </section>


            {/* =====================================
                AVALIAÇÕES
            ===================================== */}

            <section className="reviews hotel-details-container">


                <h2>
                    Avaliações dos hóspedes
                </h2>


                <div className="reviews-content">


                    <div className="review-summary">

                        <strong>
                            {hotel.rating}
                        </strong>

                        <span>
                            ★★★★★
                        </span>

                        <p>
                            {hotel.reviews} avaliações
                        </p>

                    </div>


                    {hotel.reviewText.map(
                        ([name, text], index) => (

                            <div
                                className="review-card"
                                key={index}
                            >

                                <h3>
                                    {name}
                                </h3>

                                <span>
                                    ★★★★★
                                </span>

                                <p>
                                    {text}
                                </p>

                            </div>

                        )
                    )}

                </div>


                <button className="all-reviews">
                    Ver todas as avaliações
                </button>

            </section>

            {showConfirmation && (
                <div className="reservation-confirmation">
                    <div className="cofirmation-header">
                        <span className="confirmation-icon">
                            ✔︎
                        </span>

                        <div>
                            <h2>Reserva selecionada</h2>

                            <p>
                                Confira os detalhes daa sua hospedagem
                            </p>
                        </div>
                    </div>

                    <div className="confirmation-hotel">
                        <img src={hotel.images[0].src} alt={hotel.name} />

                        <div>
                            <h3>{hotel.name} </h3>
                            <p>
                                📍 {hotel.location}
                            </p>
                        </div>
                    </div>

                    <div className="confirmation-details">
                        <div>
                            <span>Check-in </span>
                            <strong>{checkIn}</strong>
                        </div>

                        <div>
                            <span>Check-out </span>
                            <strong>{checkOut}</strong>
                        </div>

                        <div>
                            <span>Hóspedes </span>
                            <strong>
                                {guests} {guests === "1" ? "hóspede" : "hópedes"}
                            </strong>
                        </div>

                        <div>
                            <span>Hospedagem </span>
                            <strong>
                                {nights} {nights === 1 ? "noite" : "noites"}
                            </strong>
                        </div>
                    </div>

                    <div className="confirmation-total">
                        <span>Valor-total </span>
                        <strong>
                            R$ {total.toLocaleString("pt-BR")}
                        </strong>
                    </div>

                    <div className="confirmation-actions">
                        <button className="confirm-reservation-button" onClick={confirmReservation}>
                            Confirmar reserva
                        </button>

                        <button className="cancel-reservation-button" onClick={() => setShowConfirmation(false)}>
                            ⇦ Voltar
                        </button>
                    </div>
                </div>
            )}

            {showSuccessModel && (
                <div className="success-modal-overlay-modal">
                    <div className="success-modal-modal">
                        <div className="success-modal-icon-modal">
                            ✓
                        </div>

                        <h2>Reserva confirmada!</h2>

                        <p>
                            Sua hospedagem foi reservada com sucesso.
                        </p>

                        <div className="success-modal-details-modal">
                            <strong>{hotel.name}</strong>

                            <span>
                                🗓️ {checkIn} → {checkOut}
                            </span>

                            <span>
                                🛏️ {nights} {nights === 1 ? "noite" : "noites"}
                            </span>

                            <strong>
                                R$ {total.toLocaleString("pt-BR")}
                            </strong>
                        </div>

                        <div className="success-modal-actions-modal">
                            <button
                            type="button"
                            className="sucess-primary-button-modal"
                            onClick={() => navigate("/minhas-resevas")}>
                                Ver minhas reservas
                            </button>

                            <button
                            type="button"
                            className="success-secondary-button-modal"
                            onClick={() => {
                                setShowSuccessModel(false)
                                navigate("/")
                            }}>
                                Voltar ao inicio
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </main>

    )

}


export default HotelDetails