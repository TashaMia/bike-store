export default function SubscriptionSection() {
  const subscriptionTypes = [
    {
      header: "PRATA",
      price: "R$ 199",
      options: [
        " Duas trocas por ano",
        " Assistência técnica",
        " Suporte 08h às 18h",
        " Cobertura estatual",
      ],
    },
    {
      header: "OURO",
      price: "R$ 299",
      options: [
        " Cinco trocas por ano",
        " Assistência especial",
        " Suporte 24h",
        " Cobertura nacional",
        " Descontos em parceiros",
        " Acesso ao Clube Bikecraft",
      ],
    },
  ];
  return (
    <div className="subscription-section">
      <h3 className="subscription-section__header">seguros.</h3>
      <div className="subscription-types">
        {subscriptionTypes.map((type, index) => {
          return (
            <div className="subscription-types__type" id={"type" + (index + 1)}>
              <div className="subscription-types__type__head">
                <h4 className="subscription-types__type__header">
                  {type.header}
                </h4>
                <p className="subscription-types__type__price">{type.price}</p>
              </div>
              <ul className="list">
                {type.options.map((option) => {
                  return (
                    <li className="list-item">
                      <img src="public/list-item.svg" alt="list item"></img>
                      {option}
                    </li>
                  );
                })}
              </ul>
              <button className="subscription-section__button">
                INSCREVA-SE
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
