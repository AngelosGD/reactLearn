import { mockGifs } from "./mock-data/gifs.mock";

export const GiftsApp = () => {
  return (
    <>
      {/* header */}
      <div className="content-center">
        <h1 className=""> Buscador de gifts</h1>
        <p>descubre y comparte el gift perfecto</p>
      </div>

      {/* search */}

      <div className="search-container">
        <input type="text" placeholder="buscar gifts" />
        <button>Buscar</button>
      </div>

      {/* Busquedas preview */}
      <div className="previous-searches">
        <h2>busquedas previas</h2>
        <ul className="previous-searches-list">
            <li>goku</li>
            <li>gede</li>
            <li>deku</li>
            <li>saitama</li>
        </ul>
      </div>

      {/* Mostra los gifts */}
      <div className="gifts-container">
        {
            mockGifs.map((gif) =>(
                <div key={gif.id} className="gif-card">
                    <img src={gif.url} alt={gif.title}></img>
                    <h3>{gif.title}</h3>
                    <p>
                        {gif.height}x{gif.width} (1.5mb)
                    </p>
                </div>
            ))
        }
      </div>
    </>
  );
};
