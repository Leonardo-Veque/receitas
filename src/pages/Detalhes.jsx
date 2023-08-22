import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

function Detalhes() {
  const ingredientes = new Array(20).fill(0);
  const { id } = useParams();
  const navigate = useNavigate();

  const [receita, setReceita] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const response = await api.get(`/lookup.php?i=${id}`);

      const data = response.data;

      setReceita(data);
      setLoading(false);
    }
    load();
  }, [navigate, id]);

  if (loading) {
    return (
      <div>
        <h1>Carregando receitas</h1>
      </div>
    );
  }

  return (
    <div>
      <div>{receita.strMeal}</div>
      <h3>{receita.strInstructions}</h3>
      {ingredientes.map((_v, i) => (
        <div key={`ingrediente_${i}`}>{receita[`strIngredient${i + 1}`]}</div>
      ))}
    </div>
  );
}

export default Detalhes;
