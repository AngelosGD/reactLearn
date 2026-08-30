import CustomHeader from "./shared/components/CustomHeader";
import SearchBar from "./shared/components/SearchBar";
import PreviousSearches from "./gifs/components/PreviousSearches";
import { GifList } from "./gifs/components/GifList";
import { mockGifs } from "./mock-data/gifs.mock";
import { useState } from "react";

export const GiftsApp = () => {
  const [previousTerms, setPreviousTerms] = useState(["dbz", "dying light"]);

  const handleTermClicked = (term: string)=>{
    console.log({term})
  }

  const handleSearch = (query: string) =>{
    console.log({query})
  }

  return (
    <>
      {/* header */}

      <CustomHeader
        title="Buscador de gifts"
        description="busca los mejores gifts"
      />

      {/* search */}
      <SearchBar placeholder="Busca el gift que quieras caon" onHandleSearch={handleSearch}/>

      {/* Busquedas preview */}
      <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClicked}/>

      {/* Mostra los gifts */}
      <GifList gifs={mockGifs} />
    </>
  );
};
