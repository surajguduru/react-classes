import { useSelector } from "react-redux";
import './Cart.css';

function Cart() {
    const items = useSelector((state) => state.items);

    return (
        <div className='cart'>
            <h2>Cart</h2>
            {Object.keys(items).map((id) => (
                <div key={id}>
                    <span>Product ID: {id}</span>
                    <span> &nbsp; Quantity: {items[id].quantity}</span>
                </div>
            ))}
        </div>
    );
}

export default Cart;
