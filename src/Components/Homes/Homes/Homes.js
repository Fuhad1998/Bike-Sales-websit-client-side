import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import RecentSales from './RecentSales/RecentSales';

const Homes = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://boiling-falls-05013.herokuapp.com/products')
        .then(res =>res.json())
        .then(data => setProducts(data?.slice(0, 6)))
    }, [])
    return (
        <div>
            
           <div>
           <Banner></Banner>
            
           </div>
            <div className="row">
                <h1 className="text-center p-2">Our Services</h1>
                {
                    products.map(product =><Products
                    key={product.id}
                    product={product}
                    ></Products>)
                }
            </div>
            <RecentSales></RecentSales>
            <Reviews></Reviews>
         
            
        </div>
    );
};

export default Homes;