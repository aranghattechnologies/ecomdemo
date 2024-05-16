import { useEffect, useState } from "react";
import { Product } from "../types/Product";
import { httpBaseUrl } from "../common/constants";

export default function useProduct({id} : {id : string | undefined}) {

    let [product,setProduct] = useState<Product | null>(null);

    useEffect(() => {
        fetch(`${httpBaseUrl}/products?id=${id}`)
        .then(response => response.json())
        .then(data => setProduct(data[0]));
    }, [id]);

    return product;

}