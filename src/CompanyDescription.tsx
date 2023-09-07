export default function CompanyDescription() {
  return (
    <div className="company-description-section">
      <div className="text-of-description">
        <h1 className="text-of-description__title">
          bicicletas feitas sob medida.
        </h1>
        <p>
          Bicicletas elétricas de alta precisão e qualidade, feitas sob medida
          para o cliente. Explore o mundo na sua velocidade com a Bikcraft.
        </p>
        <button>SELECIONE A SUA</button>
      </div>
      <img
        src="public/bikes/bicicleta2.jpg"
        alt="bike"
        width={"640px"}
        height={"800px"}
        className="intro-img"
      ></img>
    </div>
  );
}
