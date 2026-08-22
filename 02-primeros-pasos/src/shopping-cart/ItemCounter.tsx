import { useState } from "react";

// import './ItemCounter.css'
import cesese from "./ItemCounter.module.css";

interface Props {
  name: string;
  quantity?: number;
}

export const ItemCounter = ({ name, quantity = 1 }: Props) => {
  const [count, setCount] = useState(quantity);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSub = () => {
    if (count === 1) return;
    setCount(count - 1);
  };

  return (
    <section
      className={cesese["item-row"]}
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
          color: count === 0 ? "red" : "black",
        }}
      >
        {name}
      </span>
      <button onClick={handleAdd}>+1</button>
      <span>{count}</span>
      <button onClick={handleSub}>-1</button>
    </section>
  );
};
