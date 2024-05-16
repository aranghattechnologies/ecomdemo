import { useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";

export default function ProductDetails() {
    
    let {id}    = useParams<{id : string}>();
    let product = useProduct({id});
    
    return(<>
        {product ? <>
            <h1>{product?.title}</h1>
        </> : "Sorry product not found"}
    </>)
}