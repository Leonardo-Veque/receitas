import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./adicionar.css";

export const Adicionar = () => {
  const [nome, setNome] = useState("");
  const [instrucoes, setInstrucoes] = useState("");
  const [ingrediente, setIngrediente] = useState("");
  const navigate = useNavigate();
  let id = uuidv4();

  const criar = (e) => {
    e.preventDefault();
    let receita = { nome, instrucoes, ingrediente, id };

    let receitas = getReceitas();

    receitas.push(receita);

    localStorage.setItem("receitaAdd", JSON.stringify(receitas));

    return navigate("/");
  };

  const getReceitas = () => {
    let receitas = localStorage.getItem("receitaAdd");

    receitas = JSON.parse(receitas);

    return receitas || [];
  };

  return (
    <form id="form">
      <label htmlFor="">Nome da receita</label>
      <input
        className="input"
        type="text"
        name="nome"
        id="nome"
        onChange={(e) => setNome(e.target.value)}
      />
      <label>Instruções</label>
      <textarea
        className="input"
        cols="30"
        rows="10"
        type="text"
        name="instrucoes"
        onChange={(e) => setInstrucoes(e.target.value)}
        id="inst"
      />
      <label htmlFor="">Ingredientes</label>
      <textarea
        className="input"
        cols="30"
        rows="10"
        type="text"
        name="ingrediente"
        id="Ing"
        onChange={(e) => setIngrediente(e.target.value)}
      />
      <button onClick={criar}>Criar</button>
    </form>
  );
};
export default Adicionar;
