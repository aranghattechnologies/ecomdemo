import { useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import useProducts from "../hooks/useProducts";
import ProductTile from "../components/ProductTile";
import useCurrentProfile from "../hooks/useCurrentProfile";
import { Product } from "../types/Product";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartState";

export default function ProductDetails() {
    
    let {id}     = useParams<{id : string}>();
    let dispacher = useDispatch();
    let product  = useProduct({id});
    let {isLoggedIn} = useCurrentProfile();
    let products = useProducts(d => d.category === product?.category && d.id !== product?.id)
               
    function handleAddToCart(product:Product|null){
        if(product)
         dispacher(addToCart(product));
    }
    
    return(<>
        {product ? <>

            <div className="row">
                <div className="col">
                    <img src={product.thumbnail} alt={product.title} className="img-fulid" />
                </div>
                <div className="col">
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <h2>Rs. {product.price}</h2>
                    <p>Discount: {product.discountPercentage}%</p>
                    <button className="btn btn-primary" onClick={()=> handleAddToCart(product)} disabled={!isLoggedIn} >Add to Cart</button>
                    <button className="btn btn-secondary ms-4" disabled={!isLoggedIn}>Buy Now</button>
                    {!isLoggedIn && <p className="text-danger">Please login to buy this product</p>}
                </div>
            </div>

            <h4 className="my-4">Similar Products</h4>
            <div>
                {products.map(product => <ProductTile key={product.id} product={product} />)}
            </div>

        </> : "Sorry product not found"}
    </>)
}