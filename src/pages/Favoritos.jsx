import { useEffect, useState, useParams } from "react";
import { Link } from "react-router-dom";

function Favoritos() {
  const [receitas, setReceitas] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem("idMeal");
    setReceitas(JSON.parse(minhaLista) || []);
  }, []);

  function excluirReceita(idMeal) {
    let filtrar = receitas.filter((item) => {
      return item.idMeal !== idMeal;
    });
    setReceitas(filtrar);
    localStorage.setItem("idMeal", JSON.stringify(filtrar));
    console.log("Filme Removido");
  }

  return (
    <div>
      <h2>Suas Receitas</h2>
      {receitas.length === 0 && <span>Num tem receitas</span>}

      <ul>
        {receitas.map((item) => {
          return (
            <li key={item.idMeal}>
              <div className="receitas" key={item.idMeal}>
                <h2>{item.strMeal}</h2>
                <img src={item.strMealThumb} alt={item.strMeal} />
                <p>{item.strInstructions}</p>
                <Link to={`/detalhes/${item.idMeal}`}>Ver detalhes</Link>
                <button onClick={() => excluirReceita(item.idMeal)}>
                  Excluir Receita
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Favoritos;
