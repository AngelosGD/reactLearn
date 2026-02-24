import type { Welcome } from "../data/giphy.response";

const API_KEY = 'XXys76UFC1WXb3lwBtQP4oZi5HQskz61';


const myRequest = fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
);


const createImageInsideDOM = (url: string) =>{
    const img = document.createElement('img');
    img.src = url;

    document.body.append(img)
}

myRequest
.then((response) => response.json() )
.then(({data}: Welcome)=> {

    const imageUrl = data.images.original.url;
    createImageInsideDOM(imageUrl)


})
.catch((error) => {
    console.error(error)
})