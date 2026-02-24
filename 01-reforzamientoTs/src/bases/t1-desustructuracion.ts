const useState: string|Function = (name:string, setName:Function) =>{
    return [name, setName=(name:string)=>{
        console.log(name)
    }] as const
}


const [name, setName] = useState('Goku')
console.log(name)
setName('Vegeta')
