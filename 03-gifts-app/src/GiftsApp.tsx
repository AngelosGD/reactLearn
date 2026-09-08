import CustomHeader from "./shared/components/CustomHeader";
import SearchBar from "./shared/components/SearchBar";
import PreviousSearches from "./gifs/components/PreviousSearches";
import { GifList } from "./gifs/components/GifList";
import { useGifs } from "./gifs/hooks/useGifs";

export const GiftsApp = () => {

  const {gifs, handleSearch, handleTermClicked, previousTerms} = useGifs()

  

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
