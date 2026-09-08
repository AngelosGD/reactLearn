import { useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";

export const useGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([
    "dbz",
    "dying light",
  ]);

  const handleTermClicked = async(term: string) => {
    const gifs = await getGifsByQuery(term);
    setGifs(gifs)
  };

  const handleSearch = async (query: string = "") => {
    query = query.trim().toLowerCase();
    // validar si el query esta vacio
    if (query.length === 0) return;

    // evitar busqueda duplicadas
    if (previousTerms.includes(query)) return;

    //  actualziar previousTermn agregando nuevo termino al inicio, y limtandolo a 8 elemetnos
    setPreviousTerms([query, ...previousTerms].splice(0, 6));

    setGifs(gifs);
  };
  return {
    // props
    gifs,
    previousTerms,
    // methods
    handleSearch,
    handleTermClicked,
  };
};
