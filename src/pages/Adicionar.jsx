import React from "react";
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
};
export default Adicionar;
