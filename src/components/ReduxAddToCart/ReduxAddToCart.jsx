import { useSelector, useDispatch } from "react-redux";
import "./ReduxAddToCart.css";
import React from 'react';

function ReduxAddToCart({ product }) {
    console.log("add to cart", product.id);
    let dispatch = useDispatch();

    function increase() {
        dispatch({ type: "ADD_TO_CART", payload: product });
    }

    function decrease() {
        dispatch({ type: "REMOVE_FROM_CART", payload: product });
    }

    let quantity = useSelector((state) => {
        return state.items[product.id]?.quantity || 0;
    });

    return (
        <div className="redux-add-to-cart">
            {quantity === 0 ? (
                <button onClick={increase} className="add-to-cart-btn">
                    <span>ADD TO CART</span>
                </button>
            ) : (
                <div className="quantity-controls">
                    <button onClick={decrease} className="decrease-btn">
                        <span>-</span>
                    </button>
                    <span className="quantity">{quantity}</span>
                    <button onClick={increase} className="increase-btn">
                        <span>+</span>
                    </button>
                </div>
            )}
        </div>
    );
}

export default ReduxAddToCart;
