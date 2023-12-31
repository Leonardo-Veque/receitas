import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";
import "./favoritos.css";

function Detalhes() {
  const ingredientes = new Array(20).fill(0);
  const { id } = useParams();
  const navigate = useNavigate();
  const navigate2 = useNavigate();

  const [receita, setReceita] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const response = await api.get(`/lookup.php?i=${id}`);

      const data = response.data;
      if (data.meals == null) {
        return navigate2("/");
      }
      setReceita(data.meals[0]);
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
    <div className="receitas">
      <h2>{receita.strMeal}</h2>
      <p>{receita.strInstructions}</p>
      <img src={receita.strMealThumb} alt="" />
      {ingredientes.map((_v, i) => (
        <>
          <div key={`ingrediente_${i}`}>
            <ul>
              {receita[`strIngredient${i + 1}`]} {receita[`strMeasure${i + 1}`]}
            </ul>
          </div>
        </>
      ))}
      <button onClick={salvarReceitas}>Salvar</button>
    </div>
  );
}

export default Detalhes;
