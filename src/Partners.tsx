export default function Partners() {
  const partners = [
    "public/partners/ranek.svg",
    "public/partners/caravan.svg",
    "public/partners/dogs.svg",
    "public/partners/handel.svg",
    "public/partners/surfbot.svg",
    "public/partners/wildbeast.svg",
    "public/partners/flexblog.svg",
    "public/partners/lescone.svg",
  ];
  return (
    <div className="partners-section">
      <h2 className="partners-section__title">Nossos parceiros.</h2>
      <div className="partners-section__partners">
        {partners.map((partner, index) => {
          return (
            <div
              className="partners-section__partners__partner"
              id={"partner" + (index + 1).toString()}
            >
              <img src={partner} alt="partner"></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}
