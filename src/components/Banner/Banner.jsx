import './Banner.css'
import { Link } from 'react-router-dom'

const Banner = ({position,simpleContent,banner, slogan="",title="",description="",btn="", caminho=""}) => {
  return (
    <>
        {simpleContent ? (
            
            <div className={`banner ${position} ${banner}`}>
                <p>{slogan}</p>
            </div>
        ):(
            <div className={`banner ${position} ${banner}`}>
                <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <Link to={caminho}>
                        {btn}
                    </Link>
                </div>
            </div>
        )

        }

    
    </>
   
  )
}

export default Banner