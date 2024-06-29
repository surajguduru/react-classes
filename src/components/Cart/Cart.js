import { useSelector } from "react-redux";

function Cart() {
    let cart = useSelector((state) => state.items);

    return (
        <div>
            <ul>
                {Object.values(cart).map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default Cart;
