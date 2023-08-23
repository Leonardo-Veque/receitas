import { useEffect, useState } from "react";
import api from ".././services/api";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [receitas, setReceitas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [minhaRec, SetMinhaRec] = useState([]);

  useEffect(() => {
    async function load() {
      const response = await api.get("search.php?s=Cake");

      const data = response.data;

      console.log(data);
      setReceitas(data.meals);
      setLoading(false);
    }
    load();
  }, []);

  useEffect(() => {
    const listAdd = localStorage.getItem("receitaAdd");
    SetMinhaRec(JSON.parse(listAdd) || []);
    console.log(JSON.parse(listAdd) || []);
  }, []);

  const excluirRec = (id) => {
    let filtrar = minhaRec.filter((item) => {
      return item.id !== id;
    });
    SetMinhaRec(filtrar);
    localStorage.setItem("receitaAdd", JSON.stringify(filtrar));
  };

  const pegarIng = () => (
    <div>
      {receitas.map((item) => (
        <div className="receitas" key={item.idMeal}>
          <h2>{item.strMeal}</h2>
          <img src={item.strMealThumb} alt={item.strMeal} />
          <p>{item.strInstructions}</p>
          <Link className="link" to={`/detalhes/${item.idMeal}`}>
            Ver detalhes
          </Link>
        </div>
      ))}
      {minhaRec.map((item) => (
        <div className="receitas" key={item.id}>
          <h2>Suas proprias receitas</h2>
          <h2>{item.nome}</h2>
          <p>{item.instrucoes}</p>
          <ul>{item.ingrediente}</ul>
          <button onClick={() => excluirRec(item.id)}>Excluir Receita</button>
        </div>
      ))}
    </div>
  );

  if (loading) {
    return (
      <div>
        <h2>Carregando</h2>
      </div>
    );
  }
  return <div>{pegarIng()}</div>;
}

export default Home;
