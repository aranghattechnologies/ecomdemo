import useProducts from "../hooks/useProducts"

export default function Products() {

    let products = useProducts();

    return (<>
        <h1>Products</h1>
        {products.map(product => <h1>{product.title}</h1>)}
    </>)
}