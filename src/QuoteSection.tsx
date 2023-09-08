export default function QuoteSection() {
  return (
    <div className="quote-section">
      <img src="public/adv.png" alt="advertisement picture"></img>
      <div className="quote-block">
        <div className="quote">
          <img
            src="public/“.svg"
            id="quote-open"
            alt="quotation marks open"
          ></img>
          <p className="quote-text">
            Pedalar sempre foi a minha paixão, o que o pessoal da Bikcraft fez
            foi intensificar o meu amor por esta atividade. Recomendo à todos
            que amo.
          </p>
          <img
            src="public/”.svg"
            id="quote-close"
            alt="quotation marks close"
          ></img>
        </div>
        <p className="quote-author">Ana Júlia</p>
      </div>
    </div>
  );
}
