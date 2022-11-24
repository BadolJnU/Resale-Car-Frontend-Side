import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
         <div className='h-[500px] banner rounded-md'>
            <div className='absolute transform translate-y-1/2 ml-20 top-1/4'>
                <h2 className='text-4xl font-bold text-white'>Buy from Home</h2>
                <p className='text-xl text-white my-5'>Browse through thousands of cars, trucks, and other vehicles anytime, anywhere.</p>
                <Link><button className='btn btn-primary text-xl font-bold text-white animate-bounce mt-5'>Discover</button></Link>
            </div>
         </div>
    );
};

export default Banner;