import Banner from "../../components/Banner/Banner";
import "./Home.css";

const Home = () => {
  return (
    <section className="home">
      <Banner
        position={"center"}
        simpleContent={true}
        banner={"banner1"}
        slogan={`Mais que caminhõs\n vendemos sonhos!`}
        chave={true}
      />
      <Banner
        position={"end"}
        simpleContent={false}
        banner={"banner2"}
        title={"Baús com os melhores preços do mercado!"}
        description={
          "Oferecemos os caminhões  mais confiáveis do mercado por mais de 25 anos.\n Com uma história sólida e compromisso com a excelência, nossos produtos são a escolha preferida para quem busca qualidade e eficiência"
        }
        btn={"Nossa Frota"}
        btnPosition={"btnEnd"}
        caminho={"/portifolio"}
        chave={true}
      />

      <Banner
        position={"start"}
        simpleContent={false}
        banner={"banner3"}
        title={"Baús com os melhores preços do mercado!"}
        description={`Nossa trajetória de 25 anos é marcada por um compromisso inabalável com a excelência e a confiança dos nossos clientes.\n
        Como líderes no mercado de caminhões, conquistamos a fidelidade de inúmeras empresas graças à qualidade superior dos nossos produtos e ao suporte excepcional que oferecemos.\n`}
        btn={"Nossos Vendedores"}
        btnPosition={"btnStart"}
        caminho={"/portifolio"}
      />
    </section>
  );
};

export default Home;
