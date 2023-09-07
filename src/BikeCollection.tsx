export default function BikeCollection(props: {
  bikes: { [index: string]: string }[];
}) {
  return (
    <div className="bike-collection-section">
      <h2 className="bike-collection-section__title">escolha a sua.</h2>
      <div className="collection">
        {props.bikes.map((bike: { [index: string]: string }) => {
          return (
            <div key={bike.name} className="bike-section">
              <img src={bike.image} alt="bike" width={460} height={520}></img>
              <div className="bike-section__name-section">
                <div className="bike-section__name-section__yelow-line"></div>
                <p className="bike-section__name-section__name">{bike.name}</p>
              </div>
              <p className="bike-section__price">{bike.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
