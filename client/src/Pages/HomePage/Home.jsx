import React from "react";
import CardList from "../../Componentes/CardList/CardsList";
import NavBar from "../../Componentes/NavBar/NavBar";
import { useState } from "react";
import Paginado from "../../Componentes/Paginado/Paginado";
import { useSelector } from "react-redux";
import './Home.css'
import { useNavigate } from "react-router-dom";

export default function Home() {

  const allPokemons = useSelector((state) => state.allPokemons);

  const navigate = useNavigate();

  function handleClick(){
      navigate('/pokemon/create')
  };

  //ESTADOS LOCALES.
  const [currentPage, setCurrentPage] = useState(1); //PAGINA ACTUAL.
  const [perPage] = useState(12); //CUANTO POKEMONS POR PAG.

   //FUNCION PARA MANEJAR EL CAMBIO DE PAGINA
  const indexLastPoke = currentPage * perPage;//PageNumbers es el número de página al que se desea cambiar
  const indexFirstPoke = indexLastPoke - perPage;
  const currentPoke = allPokemons.slice(indexFirstPoke, indexLastPoke); //lista de pokemons por pagina

  const paginado = (pageNumber) => { // pageNumbre es el numero de la pagina a la que quiero cambiar.
      setCurrentPage(pageNumber)//se actualiza el estado de currentPage utilizando setCurrentPage con el valor de pageNumber. Esto cambia la página actual a la página seleccionada
     }

  return (
    <div>
      <NavBar setCurrentPage={setCurrentPage}/>
      <button onClick={handleClick} className="botonCreat">Crear pokemon</button>
      <CardList currentPoke={currentPoke}/>
      <Paginado perPage={perPage} totalPoke={allPokemons.length} paginado={paginado} currentPage={currentPage} />
    </div>
  );
}
