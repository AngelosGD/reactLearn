import { useRef } from "react"

export const FocusScreen = () => {


    // ? el useRef no causan re-render, son mutables
    const inputRef = useRef<HTMLInputElement>(null)

    const handleClick = () =>{
        console.log(inputRef.current?.value)
        }

    return (
    <div className='bg-gradient flex flex-col gap-4'>
        <h1 className='text-2xl font-thin text-white'>Focus pantalla</h1>

        <input  ref={inputRef} autoFocus  type='text' className='bg-white text-black px-4 py-2 rounded-md' />


        <button 
        onClick={handleClick}
        className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'
        >
            set focus
        </button>
    </div>
  )
}
