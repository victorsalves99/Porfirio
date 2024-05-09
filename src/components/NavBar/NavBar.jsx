// importação de css
import "./NavBar.css";
// importação de imagem
import logo from "../../assets/img/logo.png";
// importação de router dom
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="header">
      <NavLink to={"/"} className={"box_logo"}>
        <img src={logo} alt="Logo porfirio" className="img_logo" />
      </NavLink>
      <nav className="navigation">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/portifolio"}>Portifolio</NavLink>
        <NavLink to={"/sobre"}>Sobre</NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
