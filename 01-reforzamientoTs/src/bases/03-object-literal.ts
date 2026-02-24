interface Person {
    firstName: string;
    lastname: string;
    age: number;

    address?: Address;

}

interface Address {

    postalCode: string,
    city: string

}




const ironman: Person = {
    firstName: 'Tony',
    lastname: 'Stark',
    age: 45,
    // address:  {
    //     postalCode: 'xda',
    //     city: 'New York'
    // }
}


const spiderman: Person = {
    firstName: 'Peter',
    lastname: 'Parker',
    age: 22
}

console.log(ironman)




// const spiderman = structuredClone (ironman;

// spiderman.lastname = 'Parker';
// spiderman.firstname = 'Peter';
// spiderman.age = 22;
// spiderman.address.city = 'San jose';



// console.log(ironman, spiderman)
