// src/context/CartContext.js
import { createContext } from "react";

const CartContext = createContext({
    cart: {},
    increaseQuantity: () => { },
    decreaseQuantity: () => {}
})

export default CartContext;