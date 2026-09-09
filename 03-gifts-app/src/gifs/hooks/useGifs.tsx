import { useRef, useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";

// const gifsCache: Record<string, Gif[]>={}

export const useGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([
  ]);

  const gifsCache = useRef<Record<string, Gif[]>>({})

  const handleTermClicked = async(term: string) => {

    if(gifsCache.current[term]){
      setGifs(gifsCache.current[term])
      return
    }

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

    gifsCache.current[query] = gifs

    console.log(gifsCache)

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
