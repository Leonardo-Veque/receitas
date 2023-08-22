import { useEffect, useState } from "react";
import api from ".././services/api";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [receitas, setReceitas] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const pegarIng = () => (
    <div>
      {receitas.map((item) => (
        <div className="receitas" key={item.idMeal}>
          <h2>{item.strMeal}</h2>
          <img src={item.strMealThumb} alt={item.strMeal} />
          <p>{item.strInstructions}</p>
          <Link to={`/detalhes/${item.idMeal}`}>Ver detalhes</Link>
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
