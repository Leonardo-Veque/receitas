import React from "react";
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

  function salvarReceitas() {
    const lista = localStorage.getItem("idMeal");
    if (lista == null) {
      localStorage.setItem("idMeal", JSON.stringify([receita]));
      return;
    }
    let receitaSalva = JSON.parse(lista);
    const hasRe = receitaSalva.some(
      (receitaSalva) => receitaSalva.idMeal == receita.idMeal
    );
    console.log(hasRe);
    if (hasRe) {
      console.log("Essa receita já foi adicionada");
      return;
    }
    receitaSalva.push(receita);
    localStorage.setItem("idMeal", JSON.stringify(receitaSalva));
  }

  return (
    <div>
      <h2>{receita.strMeal}</h2>
      <p>{receita.strInstructions}</p>
      <button onClick={salvarReceitas}>Salvar</button>
      {ingredientes.map((_v, i) => (
        <>
          <div key={`ingrediente_${i}`}>
            <p>
              {receita[`strIngredient${i + 1}`]} {receita[`strMeasure${i + 1}`]}
            </p>
          </div>
        </>
      ))}
    </div>
  );
}

export default Detalhes;
