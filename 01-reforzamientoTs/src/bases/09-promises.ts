const myPromise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        //resolve(100);
        reject('Mi amigo se perdio')
    }, 2000) //2 segundos



})

myPromise.then((money) => {
    console.log(`My money is back ${money}`);
}).catch((reason) => {
    console.warn(reason)
})
    .finally(() => {
        console.log('Pues a seguir con mi vida')
    })