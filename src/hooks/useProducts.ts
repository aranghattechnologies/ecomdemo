import React, { useEffect } from "react";
import { Product } from "../types/Product";
import { httpBaseUrl } from "../common/constants";

export default function useProducts(filter = (p:any) => true){

    let [products,setProducts] = React.useState<Product[]>([]);

     useEffect(() => {
        fetch(`${httpBaseUrl}/products`)
        .then(response => response.json())
        .then(data => setProducts(data));
     }, []);

     return products.filter(filter);

}