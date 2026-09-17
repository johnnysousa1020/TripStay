import "../styles/Benefits.css"

const benefits = [
    {
        icon: "🛡️",
        title: "Reservas seguras",
        description: "Seus dados protegidos do início ao fim da viagem."
    },
    {
        icon: "🎧",
        title: "Atendimento 24/7",
        description: "Estamos sempre prontos para te ajudar."
    },
    {
        icon: "🏷️",
        title: "Melhores preçõs",
        description: "Ofertas exclusivas e o melhor custo-benefício."
    },
    {
        icon: "📅",
        title: "Cancelamento fácil",
        description: "Flexibilidade para mudar os seus planos."
    },
]

function Benefits(){
    return(
        <section className="benefits">
            <div className="benefits-container">
                {benefits.map((benefit) => (
                    <div className="benefit-item" key={benefit.title}>
                        <div className="benefit-icon">
                            {benefit.icon}
                        </div>

                        <div className="benefit-content">
                            <h3>{benefit.title}</h3>
                            <p>{benefit.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Benefits;