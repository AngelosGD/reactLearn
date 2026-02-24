const person  = {
    name: 'Tony',
    age: 45,
    key: 'IronMan',
}
const { name: ironmanName, age, key } = person;

console.log({ironmanName, age, key})


interface Hero {
    name: string,
    age: number,
    key: string,
    rank?: string
}

const useContext = ({key, name, rank, age}: Hero) =>{


    return{
        keyName:key,
        user:{
            name: name,
            age: age,
        },
        rank: rank
    }
}


const {rank, keyName, user:{ name }} = useContext(person);


console.log({rank, keyName, name})