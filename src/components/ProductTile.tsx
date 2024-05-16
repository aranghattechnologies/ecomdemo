import { Product } from "../types/Product";

type TileProps = {
    product: Product;
    showDiscount?: boolean;
}

export default function ProductTile({product,showDiscount = false}:TileProps){

    return (
        <>
            <div className="card my-2">
                <img src={product.thumbnail} className="card-img-top" alt={product.title} />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <h2>Rs. {product.price}</h2>
                    {showDiscount && <p>Discount: {product.discountPercentage}%</p>}
                </div>
            </div>
        </>
    )

}