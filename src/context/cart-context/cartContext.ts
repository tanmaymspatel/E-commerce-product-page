import { createContext } from "react";
import { ICartContext } from "./cartInterface";

const CartContext = createContext<ICartContext>({
    count: 0,
    setCount: () => { }
});

export default CartContext;