import CustomHeader from "./shared/components/CustomHeader"; 
import SearchBar from "./shared/components/SearchBar";
import PreviousSearches from "./gifs/components/PreviousSearches";

export const GiftsApp = () => {
  return (
    <>
      {/* header */}

      <CustomHeader title="Buscador de gifts" description="busca los mejores gifts"/>

      {/* search */}
      <SearchBar placeholder="Busca el gift que quieras caon"/>

      {/* Busquedas preview */}
      <PreviousSearches/>

      {/* Mostra los gifts */}

      
    </>
  );
};
