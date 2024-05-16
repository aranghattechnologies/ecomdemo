import React, { useEffect, useState } from "react";
import ProductTile from "../components/ProductTile";
import useProducts from "../hooks/useProducts"

export default function Products() {

    let products = useProducts();
    let [category, setCategory] = React.useState<string[]>([]);
    let [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);

    useEffect(() => {
        if(category.length === 0) {
            let categories = products.map(product => product.category);
            categories = Array.from(new Set(categories));
            setCategory(categories);
        }
    }, [products]);


    return (<>
        <h1>Products</h1>
        {category.map(cat => <button key={cat} className="btn btn-primary m-2" onClick={()=> setSelectedCategory(cat)}>{cat}</button>)}
        {products.filter(d =>  selectedCategory ? d.category == selectedCategory : d).map(product => <ProductTile key={product.id} product={product} />)}
    </>)
}