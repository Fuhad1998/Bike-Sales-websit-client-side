import React, { useEffect, useState } from 'react';
import RecentSale from '../../RecentSale/RecentSale';

const RecentSales = () => {
    const [sales, setSales] = useState([])

    useEffect(()=>{
        fetch('https://boiling-falls-05013.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setSales(data?.slice(3, 7)))
    },[])
    return (
        <div className="container" >
            <h1 className="text-center p-4">RECENT PRODUCTS SALES</h1>
            <div className="row">
            {
                sales.map(sale => <RecentSale
                key={sale._id}
                sale={sale}
                ></RecentSale>)
            }
            </div>
            
        </div>
    );
};

export default RecentSales;