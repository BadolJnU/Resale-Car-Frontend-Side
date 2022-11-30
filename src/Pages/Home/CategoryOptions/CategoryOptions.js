import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CategoryOptions = () => {

    const categories = useLoaderData();
    return (
        <div>
            <h2 className='text-3xl font-bold text-primary text-center my-20'>Find your Car</h2>
            <div className='grid grid-cols-3 justify-items-center gap'>
                {
                    categories.map(category => <Link key={category._id} to={`/products/${category._id}`}><button className='btn btn-outline btn-primary w-96 bg-base-100 shadow-xl mb-10 py-20 text-2xl'>{category.categoryName}</button></Link>)  
                }
            </div>
        </div>
    );
};

export default CategoryOptions;