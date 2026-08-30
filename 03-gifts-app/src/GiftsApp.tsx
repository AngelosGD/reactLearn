import CustomHeader from "./shared/components/CustomHeader"; 
import SearchBar from "./shared/components/SearchBar";
import PreviousSearches from "./gifs/components/PreviousSearches";
import { GifList } from "./gifs/components/GifList";
import { mockGifs } from "./mock-data/gifs.mock";

export const GiftsApp = () => {
  return (
    <>
      {/* header */}

      <CustomHeader title="Buscador de gifts" description="busca los mejores gifts"/>

      {/* search */}
      <SearchBar placeholder="Busca el gift que quieras caon"/>

      {/* Busquedas preview */}
      <PreviousSearches searches={['goku','saitama']}/>

      {/* Mostra los gifts */}
      <GifList gifs={mockGifs}/>
      
    </>
  );
};
