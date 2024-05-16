import { useParams } from "react-router-dom";

export default function ProductDetails() {
    
    let {id} = useParams<{id : string}>();
    
    return(<>
        <h1>{id}</h1>
    </>)
}