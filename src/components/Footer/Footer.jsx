import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="contatos">
        <h4 className="footer_contatos">Contatos:</h4>
        <div className="grid_contados">
          <p className="footer_title">E-mails</p>
          <p>
            <span>Administração:</span>
            adm@porfirio.com.br
          </p>
          <p>
            <span>Vendedor:</span>
            Arthur@porfirio.com.br
          </p>
        </div>
        <div className="grid_contados">
          <p className="footer_title">Telefones</p>
          <p>
            <span>Administração:</span>
            (11) 4002-8922
          </p>
          <p>
            <span>Vendedor:</span>
            (11) 91234-5678
          </p>
        </div>
        <div className="grid_contados">
          <p className="footer_title">Whatsapp</p>
          <p>
            <span>Vendedor</span>
            (11) 91234-5678
          </p>
        </div>
      </div>
      <div className="contatos">
        <h4 className="footer_contatos">Endereço:</h4>
        <p>
          Av. Salim Farah Maluf, 2100 - Água Rasa, São Paulo - SP, 03332-000
        </p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.445790057104!2d-46.577676!3d-23.552427699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5ebc1f8a617d%3A0x9cdb5b168550db27!2sAv.%20Salim%20Farah%20Maluf%2C%202100%20-%20%C3%81gua%20Rasa%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003332-000!5e0!3m2!1spt-BR!2sbr!4v1715271597335!5m2!1spt-BR!2sbr" width="600" height="270" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};

export default Footer;
