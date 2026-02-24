import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
    productName:string;
    quantity: number;
}

const itemsInCart: ItemInCart[] =[
    {productName:'Nintendo swtich2xdd', quantity:10},
    {productName:'exbos', quantity:0},
    {productName:'diyin light 3 :000', quantity:2},

]

export function FirstSteps() {
    return (
        <>
            <h1>Carrito de compras</h1>

            {itemsInCart.map(({productName, quantity})  =>(
                <ItemCounter key={productName} name={productName} quantity={quantity}/>
            ))}

            {/* <ItemCounter name="Nintendo xdnt" quantity={2}/>
            <ItemCounter name="exbox" quantity={0}/>
            <ItemCounter name="nuse xddddd equisde" quantity={10}/> */}


        </>
    )
}