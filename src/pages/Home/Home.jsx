import Banner from '../../components/Banner/Banner'
import './Home.css'

const Home = () => {
  return (
    <section className='home'>
        <Banner 
          position={"center"}
          simpleContent={true}
          banner={'banner1'}
          slogan={'Mais que caminhõs\n vendemos sonhos!'}
        
        />
    </section>
  )
}

export default Home