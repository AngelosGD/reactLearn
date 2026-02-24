const characterNames = ['goku', 'vegeta','trunks']



const [,,p3] = characterNames;

console.log(p3)

const returnsArrayFn= () =>{
    return ['ABC', 123] as const;
}

const [letras, numeros] = returnsArrayFn();

console.log(letras, numeros)

