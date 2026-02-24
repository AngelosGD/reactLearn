import { useState } from "react"

// import './ItemCounter.css'
import cesese from './ItemCounter.module.css'

interface Props{
    name: string,
    quantity?: number
}

export const ItemCounter = ({name, quantity}:Props) => {

  const [count,setCount] = useState(Number)



  const handleAdd = () =>{
    setCount(count+1)
  }

  const handleSub = () =>{
    if(count===0) return;
    setCount(count-1)

  }

  const handleClick = ()  =>{
    console.log(`homero homero homero ${name}`)
  }
  return (
    <section 
    className={cesese['item-row']}
    // style={{
    //     display:'flex',
    //     alignItems: 'center',
    //     gap: 10,
    //     margin: 10
    // }}
    >
        <span 
        className="item-text"
        style={{
            color: count === 0 ? 'red'  : 'black',
        }}>{name}</span>
        <button
          onClick={(event) =>{
            handleAdd();
          }}
        >+1</button>
        <span>{count}</span>
        <button
        onClick={handleSub}
        >-1</button>
    </section>
  ) 
}
