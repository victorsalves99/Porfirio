import "./Perfil.css";
import Carrosel from "../../components/Carrosel/Carrosel.jsx";
import { useEffect, useState } from "react";
import { url } from "../../helpers/variables.jsx";
import { useParams } from "react-router-dom";
import axios from "axios";

const Perfil = () => {
  const [caminhao, setCaminhao] = useState();
  const { id } = useParams();

  async function getTrucks() {
    const res = await axios
      .get(`${url}caminhao/${id}`)
      .then((data) => data.data)
      .catch((err) => console.log(err));
    setCaminhao(res);
  }

  useEffect(() => {
    getTrucks();
  }, []);

  return (
    <section className="perfil">
      <div className="perfil_content">
        <p>{caminhao && caminhao.nome}</p>
        <p>R${caminhao && caminhao.preco}</p>
      </div>
      <div className="box_carrosel">
        {caminhao && <Carrosel key={caminhao._id} lista={caminhao.fotos}/>}
      </div>
      <p className="perfil_title_description">Descrição e Especificações</p>

      <div className="perfil_description">
        {caminhao && caminhao.descricao.replace(/\\n/g, '\n')}
      </div>
    </section>
  );
};

export default Perfil;
