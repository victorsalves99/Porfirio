import "./Banner.css";
import { Link } from "react-router-dom";
import seta from "../../assets/img/seta.png";

const Banner = ({
  position,
  simpleContent,
  banner,
  slogan = "",
  title = "",
  description = "",
  btn = "",
  caminho = "",
  btnPosition,
  chave = false
}) => {
  return (
    <div className="bannner_main">
      {simpleContent ? (
        <div className={`banner ${position} ${banner}`}>
          <p className="slogan">{slogan}</p>
          {chave && <img src={seta} alt="seta de indicação " className="seta" />}
        </div>
      ) : (
        <div className={`banner ${position} ${banner}`}>
          <div className="box_content">
            <h3 className="title">{title}</h3>
            <p className="description">{description}</p>
            <Link to={caminho} className={`btn ${btnPosition}`}>
              {btn}
            </Link>
            {chave && <img src={seta} alt="seta de indicação " className="seta" />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
