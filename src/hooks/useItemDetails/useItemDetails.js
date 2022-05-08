import { useEffect, useState } from "react";

const useItemDetails = (itemId) =>{
    const [products, setProducts] = useState([]);

    useEffect( ()=>{
        fetch(`https://immense-taiga-82894.herokuapp.com/product/${itemId}`)
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [itemId]);
    return [products]
}

export default useItemDetails;