import "./Sobre.css";
import imgDaPorfirio from "../../assets/img/img1.png";
import imgFamilia from "../../assets/img/img2.png";

const Sobre = () => {
  return (
    <section className="sobre">
        <h2>O que é a Porfirio Camilhões?</h2>
      <div className="box_content_sobre">
        <div className="box_text">
          <p>
            Fundada há mais de 25 anos, a Porfírio Caminhões é uma empresa
            familiar portuguesa que tem como princípio fundamental a satisfação
            do cliente. Desde o início de nossa jornada, cultivamos valores que
            nos tornaram referência no mercado, combinando a tradição portuguesa
            com um profundo amor pelo Brasil.
          </p>
          <p>
            Nossa empresa é reconhecida pela qualidade excepcional de nossos
            produtos e pelos preços competitivos que oferecemos. Cada caminhão
            que vendemos é cuidadosamente selecionado para garantir desempenho e
            durabilidade, atendendo às exigências dos nossos clientes mais
            exigentes
          </p>
          <p>
            Mais do que apenas vender caminhões, construímos relacionamentos
            baseados no respeito, na confiança e no carinho. Nosso compromisso
            com a satisfação do cliente vai além da transação comercial,
            estendendo-se a um suporte contínuo e atencioso ao longo de toda a
            vida útil do veículo.
          </p>
          <p>
            Apesar de nossas raízes portuguesas, nutrimos um amor profundo pelo
            Brasil e pela sua gente. É uma honra fazer parte da jornada de
            tantos empreendedores brasileiros, contribuindo para o crescimento e
            o desenvolvimento do país.
          </p>
          <p>
            Na Porfírio Caminhões, somos mais do que uma empresa, somos uma
            família que se orgulha em servir com excelência, dedicação e um
            toque especial de carinho. Estamos aqui para ajudá-lo a alcançar
            seus objetivos, fornecendo os melhores caminhões, os melhores preços
            e o melhor atendimento possível. Venha fazer parte da nossa história
            e descubra por que somos a escolha preferida de tantos clientes em
            todo o Brasil.
          </p>
        </div>
        <div className="box_img">
          <img src={imgDaPorfirio} alt="" />
          <img src={imgFamilia} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Sobre;
