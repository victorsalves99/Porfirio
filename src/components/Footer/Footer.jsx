import "./Footer.css";
import logo from "../../assets/img/logo.png"

const Footer = () => {
  return (
    <>
      <footer className="footer">
         <img src={logo} alt="" className="img_logo"/>
          <p>
            adm@porfirio.com.br
            <br />
            Vendedor: Jóse Arthur
          </p>
      </footer>
      
    </>
  );
};

export default Footer;
