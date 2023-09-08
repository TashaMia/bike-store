export default function TechnologyDescription() {
  return (
    <div className="tech-description-section">
      <div className="tech-description-section-text-block">
        <h3 className="tech-description-section-text-block__pretitle">
          TECNOLOGIA AVANCADA
        </h3>
        <p className="tech-description-section-text-block__title">
          Você escolhe as suas cores e componentes.
        </p>
        <p className="tech-description-section-text-block__text">
          Cada Bikcraft é única e possui a sua identidade. As medidas serão
          exatas para o seu corpo e altura, garantindo maior conforto e
          ergonomia na sua pedalada. Você pode também personalizar completamente
          as suas cores.
        </p>

        <p className="tech-description-section-text-block__link">
          ESCOLHA UM MODELO
        </p>
        <div className="our-plus-block">
          <div className="our-plus">
            <img
              src="public/electrobike.svg"
              alt="elecric bike"
              width={24}
              height={24}
            ></img>
            <h4 className="our-plus__title">Motor Elétrico</h4>
            <p className="our-plus__text">
              Toda Bikcraft é equipada com um motor elétrico que possui duração
              de até 120h. A bateria é recarregada com a sua energia gasta ao
              pedalar.
            </p>
          </div>
          <div className="our-plus">
            <img
              src="public/rastreador.svg"
              alt="rastreador"
              width={24}
              height={24}
            ></img>
            <h4 className="our-plus__title">Rastreador</h4>
            <p className="our-plus__text">
              Sabemos o quão preciosa é a sua Bikcraft, por isso adicionamos
              rastreadores e sistemas anti-furto para garantir o seu sossego.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
