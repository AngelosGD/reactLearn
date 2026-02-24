import type { Welcome,  } from "../data/giphy.response";

const API_KEY = 'XXys76UFC1WXb3lwBtQP4oZi5HQskz61';




const createImageInsideDOM = (url: string) => {
    const img = document.createElement('img');
    img.src = url;

    document.body.append(img)
}

const getRandomGifUrL = async () => {

    const response = await fetch(
        `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    );

    const {data}:Welcome  = await response.json()

    

    return data.images.original.url;
}

getRandomGifUrL().then(
    url => createImageInsideDOM(url)
)