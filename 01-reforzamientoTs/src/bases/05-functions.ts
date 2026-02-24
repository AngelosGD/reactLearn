function greet(name : string) : string{
    return `hola ${name}`;
}

const greet2 = (name: string):string => `hola ${name}`; 


const message = greet2('vegeta');

console.log(message)

interface User{
    uid: string;
    username: string;
}


function getUser():User{
    return {
        uid:'112d',
        username: 'angelosgd',
    }
}

const getUser2 = () =>({
        uid: '12sd',
        username: 'marianayt',
    });


const user = getUser()
const user2 = getUser2()

console.log(user)
console.log(user2)


const myNumbers : number[] = [1,2,3,4,5];

myNumbers.forEach((value) =>{console.log(value)})