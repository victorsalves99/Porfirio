import "./Card.css"
import { Link } from "react-router-dom"

const Card = ({id,url,name,price}) => {
  return (
    <>
        <Link to={`/perfil/${id}`} className="card">
            <img src={url} alt="" className="card_img"/>
            <p className="card_name">
                {name}
            </p>
            <p className="card_price">
                R${price}
            </p>
        </Link>
    </>
    
  )
}

export default Card