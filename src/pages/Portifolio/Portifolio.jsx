import Card from '../../components/Card/Card'
import './Portifolio.css'

const Portifolio = () => {
  return (
    <section className='portifolio'>
        <h2 className='title'>Bem vindo a nossa forta!</h2>

        <div className='box_fillter'>
            <div className='box_fillter_selection'>
                <p>Marcas</p>
                <select>
                    <option value="all"  selected>Todos</option>
                    <option value="Mercedes bens" >Mercedes bens</option>
                    <option value="Volvo" >Volvo</option>
                </select>
            </div>
            <div className='box_fillter_selection'>
                <p>Preço</p>
                <select>
                    <option value="menor" selected>Menor Preço</option>
                    <option value="maior">Maior Preço</option>
                </select>
            </div>
        </div>

        <div className='card_list'>
            <Card 
                id={1}
                name={"MB R3565"}   
                price={"223.000,00"}      
                url={"https://img.olx.com.br/images/70/708308752221521.webp"}   
            />
             <Card 
                id={2}
                name={"MB R3565"}   
                price={"223.000,00"}      
                url={"https://img.olx.com.br/images/70/708308752221521.webp"}   
            />
            <Card 
                id={2}
                name={"MB R3565"}   
                price={"223.000,00"}      
                url={"https://img.olx.com.br/images/70/708308752221521.webp"}   
            />
            <Card 
                id={2}
                name={"MB R3565"}   
                price={"223.000,00"}      
                url={"https://img.olx.com.br/images/70/708308752221521.webp"}   
            />
            <Card 
                id={2}
                name={"MB R3565"}   
                price={"223.000,00"}      
                url={"https://img.olx.com.br/images/70/708308752221521.webp"}   
            />
            <Card 
                id={2}
                name={"MB R3565"}   
                price={"223.000,00"}      
                url={"https://img.olx.com.br/images/70/708308752221521.webp"}   
            />
            <Card 
                id={2}
                name={"MB R3565"}   
                price={"223.000,00"}      
                url={"https://img.olx.com.br/images/70/708308752221521.webp"}   
            />
            
        </div>

    </section>
  )
}

export default Portifolio