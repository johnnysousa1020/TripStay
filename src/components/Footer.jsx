import "../styles/Footer.css"

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                <div className="footer-brand">

                    <h2>
                        <span>✈</span> TripStay
                    </h2>

                    <p>
                        Sua próxima viagem começa aqui.
                    </p>

                    <div className="footer-social">
                        <a href="#" aria-label="Instagram">Instagram</a>
                        <a href="#" aria-label="Facebook">Facebook</a>
                        <a href="#" aria-label="LinkedIn">LinkedIn</a>
                    </div>

                </div>


                <div className="footer-column">

                    <h3>Descubra</h3>

                    <a href="#destinos">Destinos</a>
                    <a href="#hospedagens">Hospedagens</a>
                    <a href="#">Ofertas</a>
                    <a href="#">Favoritos</a>

                </div>


                <div className="footer-column">

                    <h3>Suporte</h3>

                    <a href="#">Central de ajuda</a>
                    <a href="#">Contato</a>
                    <a href="#">FAQ</a>
                    <a href="#">Cancelamento</a>

                </div>


                <div className="footer-column">

                    <h3>TripStay</h3>

                    <a href="#">Sobre nós</a>
                    <a href="#">Termos de uso</a>
                    <a href="#">Política de privacidade</a>
                    <a href="#">Seja nosso parceiro</a>

                </div>

            </div>


            <div className="footer-bottom">

                <p>
                    © 2026 TripStay. Todos os direitos reservados.
                </p>

                <p>
                    Feito para tornar suas viagens inesquecíveis.
                </p>

            </div>

        </footer>
    )
}

export default Footer