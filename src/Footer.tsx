export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__main-content-section">
        <div>
          <img src="public/logo.svg" alt="logo"></img>
        </div>
        <div className="footer__main-content-section__contacts">
          <h4 className="footer__main-content-section__header">CONTATO</h4>
          <div className="contact">
            <p className="footer__info">+55 22 99999-9999</p>
            <p className="footer__info">contato@bikcraft.com</p>
          </div>
          <div className="adress">
            <p className="footer__info">Rua Ali Perto, 42 - Botafogo</p>
            <p className="footer__info">Rio de Janeiro - RJ</p>
          </div>
          <div className="social-media">
            <img src="public/instagram.svg" alt="instagram"></img>
            <img src="public/facebook.svg" alt="facebook"></img>
            <img src="public/youtube.svg" alt="youtube"></img>
          </div>
        </div>
        <div className="footer__main-content-section__information">
          <h4 className="footer__main-content-section__header">INFORMAÇÕES</h4>
          <div>
            <p className="footer__info">Bicicletas</p>
            <p className="footer__info">Seguros</p>
            <p className="footer__info">Contato</p>
            <p className="footer__info">Termos e Condições</p>
          </div>
        </div>
      </div>
      <p className="firm-c">Bikcraft © Alguns rireitos reservados.</p>
    </div>
  );
}
