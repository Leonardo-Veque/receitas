import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export const Adicionar = () => {
  const navigate = useNavigate();

  const [nome, setNome] = useState();
  const [informacoes, setInformacoes] = useState();
  const [ing, setIng] = useState();

  const criar = async (e) => {
    e.preventDefault();

    const receita = { nome, informacoes, ing, idMeal: 1 };

    await api.get("search.php?s=Cake", {
      Meals: receita,
    });
  };

  return (
    <div>
      <form onSubmit={(e) => criar(e)}>
        <label htmlFor="">Nome</label>
        <input
          type="text"
          name="nome"
          placeholder="Digite o nome da receita"
          id="nome"
          onChange={(e) => setNome(e.target.value)}
        />
        <label htmlFor="">Informações</label>
        <input
          type="text"
          name="informacoes"
          placeholder="digite as informacoes"
          id="informacoes"
          onChange={(e) => setInformacoes(e.target.value)}
        />
        <label htmlFor="">Ingredientes</label>
        <input
          type="text"
          name="informacoes"
          placeholder="digite as informacoes"
          id="ingredientes"
          onChange={(e) => setIng(e.target.value)}
        />
        <input type="submit" value="criar receita" />
      </form>
    </div>
  );
};
export default Adicionar;
