import { useSelector } from "react-redux";

export default function Cart(){

    let cartItems = useSelector((state:any) => state.cart);

    return (
        <div>
            <h2>Cart</h2>
            <ul className="list-group mt-4">
                {cartItems.items.map((item:any) => (
                    <li className="list-group-item" key={item.product.id}>
                       <div className="row">
                            <div className="col-auto">
                                <img src={item.product.thumbnail} alt={item.product.title} style={{width:100}} 
                                   className="rounded"
                                />
                            </div>
                            <div className="col">
                                <h3>{item.product.title}</h3>
                                <p>{item.product.price}</p>
                            </div>
                            <div className="col">
                                {item.quantity}
                            </div>
                            <div className="col">
                                {item.product.price * item.quantity}
                            </div>
                       </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}