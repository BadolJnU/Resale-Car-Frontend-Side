import React, { useState } from 'react';
import axios from "axios";

const CategoryOptions = () => {

    const [categories, setCategories] = useState([]);

    axios
        .get("http://localhost:5000/categories")
        .then(data => setCategories(data.data))
        .catch(error => console.log(error));
    return (
        <div>
            <h2 className='text-3xl font-bold text-primary text-center my-20'>Find your Car</h2>
            <div className='grid grid-cols-3 justify-items-center gap'>
                {
                    categories.map(category => <button className='btn btn-outline btn-primary w-96 bg-base-100 shadow-xl mb-10 py-20 text-2xl' key={category._id}>{category.categoryName}</button>)
                    
                }
            </div>
        </div>
    );
};

export default CategoryOptions;