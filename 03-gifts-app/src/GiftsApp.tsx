import CustomHeader from "./shared/components/CustomHeader";
import SearchBar from "./shared/components/SearchBar";
import PreviousSearches from "./gifs/components/PreviousSearches";
import { useState } from "react";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";
import type { Gif } from "./gifs/interfaces/gif.interface";
import { GifList } from "./gifs/components/GifList";

export const GiftsApp = () => {

  const [gifs,setGifs] = useState<Gif[]>([])
  const [previousTerms, setPreviousTerms] = useState<string[]>(["dbz", "dying light"]);

  const handleTermClicked = (term: string) => {
    console.log({ term });
  };

  const handleSearch = async (query: string = "") => {
    query = query.trim().toLowerCase();
    // validar si el query esta vacio
    if (query.length === 0) return;

    // evitar busqueda duplicadas
    if (previousTerms.includes(query)) return;

    //  actualziar previousTermn agregando nuevo termino al inicio, y limtandolo a 8 elemetnos
    setPreviousTerms([query, ...previousTerms].splice(0, 6));

    const gifs = await getGifsByQuery(query);
    setGifs(gifs)
  };

  

  return (
    <>
      {/* header */}

      <CustomHeader
        title="Buscador de gifts"
        description="busca los mejores gifts"
      />

      {/* search */}
      <SearchBar
        placeholder="Busca el gift que quieras caon"
        onHandleSearch={handleSearch}
      />

      {/* Busquedas preview */}
      <PreviousSearches
        searches={previousTerms}
        onLabelClicked={handleTermClicked}
      />

      {/* Mostra los gifts */}
      <GifList gifs={gifs}></GifList>
    </>
  );
};
