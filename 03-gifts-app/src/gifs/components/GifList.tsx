import { type FC } from 'react'
import type { Gif } from "../../mock-data/gifs.mock";

interface GiftListProps {
  gifs: Gif[];
}

export const GifList: FC<GiftListProps> = ({ gifs }) => {


  return (
    <>
      <div className="gifts-container">
        {gifs.map((gif) => (
          <div key={gif.id} className="gif-card">
            <img src={gif.url} alt={gif.title}></img>
            <h3>{gif.title}</h3>
            <p>
              {gif.height}x{gif.width} (1.5mb)
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
