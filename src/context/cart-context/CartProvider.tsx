import { useState } from 'react'

import CartContext from "./cartContext"
interface ICartProviderProps {
    children: React.ReactNode
}

function CartProvider({ children }: ICartProviderProps) {

    const [count, setCount] = useState(0);

    const cartCtx = {
        count,
        setCount
    }

    return (
        <CartContext.Provider value={cartCtx}>
            {children}
        </CartContext.Provider>
    )
};

export default CartProvider;
