import ProductTile from "../components/ProductTile";
import useProducts from "../hooks/useProducts"

export default function Products() {

    let products = useProducts();

    return (<>
        <h1>Products</h1>
        {products.map(product => <ProductTile key={product.id} product={product} />)}
    </>)
}