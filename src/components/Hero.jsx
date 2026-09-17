import "../styles/Hero.css"

function Hero(){
    return(
        <section className="hero">
            <div className="hero-overlay"></div>

            <div className="hero-container">
                <div className="hero-content">
                    <h1>
                        Encontre seu
                        <br />
                        próximo destino.
                    </h1>

                    <p>
                        Hospedagens incríveis para
                        <br />
                        experiências inesquecíveis.
                    </p>
                </div>

                <div className="search-box">

                    <div className="search-field">
                        <span className="search-icon">📍</span>

                        <div>
                            <span className="field-label">
                                Para onde você quer ir?
                            </span>

                            <span className="field-value">
                                Ex: Gramado, Rio de janeiro...
                            </span>
                        </div>
                    </div>

                    <div className="search-field">
                        <span className="search-icon">📅</span>

                        <div>
                            <span className="field-label">
                                Check-in
                            </span>

                            <span className="field-value">
                                Escolha a data
                            </span>
                        </div>
                    </div>

                    <div className="search-field">
                        <span className="search-icon">📅</span>

                        <div>
                            <span className="field-label">
                                Check-out
                            </span>

                            <span className="field-value">
                                Escolha a data
                            </span>
                        </div>
                    </div>

                    <div className="search-field">
                        <span className="search-icon">👤</span>

                        <div>
                            <span className="field-label">
                                Hóspedes
                            </span>

                            <span className="field-value">
                                2 hóspedes
                            </span>
                        </div>
                    </div>

                    <button className="search-button">
                        🔍
                        <span>Buscar</span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero;