import React from "react";
<<<<<<< HEAD
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
=======
import { useState, useEffect } from "react";

export const Adicionar = () => {
  const [receita, setReceita] = useState({});
  const [nome, setNome] = useState("");
  const [instrucoes, setInstrucoes] = useState("");
  const [ingrediente, setIngrediente] =  useState("");

  function criar (e){
    setReceita([nome,instrucoes,ingrediente]);
    e.preventDefeault()
  }
  useEffect(()=>{
    localStorage.setItem("receita",JSON.stringify([receita]))

  },[receita])

  return(
    <form>
      <label htmlFor="">Nome da receita</label>
      <input type="text" name="nome" id="nome"  onChange={(e)=>setNome(e.target.value)}/>
      <label>Instruções</label>
      <input type="text" name="instrucoes" onChange={(e)=>setInstrucoes(e.target.value)} id="inst" />
      <label htmlFor="">Ingredientes</label>
      <input type="text" name="ingrediente" id="Ing" onChange={(e)=>setIngrediente(e.target.value)} />
      <button onClick={criar}>Criar</button>
    </form>
  )
>>>>>>> 21e4b596b0b11543784061945cf0ee38cf857acd
};
export default Adicionar;
