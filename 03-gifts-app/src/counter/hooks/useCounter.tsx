import { useState } from "react";



export const useCounter = (initialValue: number = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSub = () => {
    setCounter((prevState) => prevState - 1);
  };

  const handleReset = () => {
    setCounter(initialValue);
  };

  return {
    // Props - values
    counter: counter,
    // actions - methods
    handleAdd,
    handleSub,
    handleReset
  };
};
