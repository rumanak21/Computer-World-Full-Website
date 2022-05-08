import { useEffect, useState } from "react";

const useItemDetails = (itemId) =>{
    const [products, setProducts] = useState([]);

    useEffect( ()=>{
        fetch(`http://localhost:5000/product/${itemId}`)
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [itemId]);
    return [products]
}

export default useItemDetails;