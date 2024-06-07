import "./Portifolio.css";
import CardComponente from "../../components/Card/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { marcas, filtro, url } from "../../helpers/variables";
import Select from "../../components/Select/Select";

const Portifolio = () => {
  const [truksList, setTruksList] = useState([]);
  const [trucks, setTrucks] = useState([]);
  const [listMarca, setListMarca] = useState([]);
  const [listPreco, setListPreco] = useState([]);

  async function getTrucks() {
    const res = await axios
      .get(`${url}caminhao`)
      .then((data) => {
        console.log(data)
        setTrucks(data.data)
        setTruksList(data.data)
        console.log(trucks)
        console.log(truksList)
       return data.data
      })
      .catch((err) => console.log(err));
  }
  function filtrarCaminhoesPorMarca(valor) {
    if (valor == "all") {
      setTrucks(truksList);
    } else {
      const res = truksList.filter((item) => item.marca == valor);
      setTrucks(res);
    }
  }
  function filtrarCaminhoesPorPreco(valor) {
    console.log(valor);
    if (valor === "menor") {
      let caminhoesFiltrados = trucks
        .slice()
        .sort((a, b) => parseInt(a.preco) - parseInt(b.preco));
      console.log(caminhoesFiltrados);
      setTrucks(caminhoesFiltrados);
    } else if (valor === "maior") {
      let caminhoesFiltrados = trucks
        .slice()
        .sort((a, b) => parseInt(b.preco) - parseInt(a.preco));
      console.log(caminhoesFiltrados);
      setTrucks(caminhoesFiltrados);
    }
  }

  useEffect(() => {
    getTrucks();
    setListMarca(marcas);
    setListPreco(filtro);
  }, []);

  return (
    <section className="portifolio">
      <h2 className="title">Bem vindo a nossa forta!</h2>

      <div className="box_fillter">
        <div className="box_fillter_selection">
          {listMarca && (
            <Select lista={listMarca} funcao={filtrarCaminhoesPorMarca} />
          )}
        </div>
        <div className="box_fillter_selection">
          {listPreco && (
            <Select lista={listPreco} funcao={filtrarCaminhoesPorPreco} />
          )}
        </div>
      </div>

      <div className="card_list">
        {trucks &&
          trucks.map((item) => (
            <CardComponente
              key={item._id}
              id={item._id}
              name={item.nome}
              price={item.preco}
              url={url + item.fotos[0].url}
              descricaoDoCard={"arroz com farinha e feijão"}
            />
          ))}
      </div>
    </section>
  );
};

export default Portifolio;
