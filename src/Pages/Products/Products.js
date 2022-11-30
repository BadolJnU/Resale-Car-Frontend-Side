import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductDetails from './ProductDetails'

const Products = () => {
    const products = useLoaderData();
    return (
        <div>
            {
                products.map(product => <ProductDetails key={product._id} product={product}></ProductDetails>)
            }
        </div>
    );
};

export default Products;