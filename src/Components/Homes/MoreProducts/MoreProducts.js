import React, { useEffect, useState } from 'react';
import Moreproduct from '../MoreProduct/MoreProduct';


const MoreProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('https://boiling-falls-05013.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        
      
            <div className="row">
                <h1 className="text-center mt-2">MORE PRODUCTS</h1>
            {
                products.map(product =><Moreproduct
                product={product}
                key={product.id}
                ></Moreproduct>)
            }
            </div>
       
    );
};

export default MoreProducts;