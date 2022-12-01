import React from 'react';
import { Link } from 'react-router-dom';
import './ProductDetails.css'

const ProductDetails = ({product}) => {
    function formatTime (time) {
        return time.toString().slice(0, 24);
    }
    const {name, location, used, running, condition, description, buyingPrice, sellingPrice, image, time, email, userName} = product
    return (
        <div className="row mt-5 container mx-auto">
            <div className="preview-card">
                <div className="preview-card__wrp">
                    <div className="preview-card__item">
                        <div className="preview-card__img">
                            <img src={image} alt="" />
                        </div>
                        <div className="preview-card__content">
                            <div>Posted by: {userName}</div>
                            <div>Posted on: {formatTime(time)}</div>
                            <div className="preview-card__title">{name}</div>
                            <div>
                                <p className='font-semibold'>Condition: {condition}</p>
                            </div>
                            <div>
                                <p className='text-xl font-semibold'>Used: {used} years & running {running} km</p>
                            </div>
                            <div>
                                <p className='font-semibold'>Selling Price: $ <span className='text-red-500'>{sellingPrice}</span> & Buying Price: $ {buyingPrice}</p>
                            </div>
                            {description.length > 300 ?
                                <p>{description.slice(0, 300) + '....'} </p>
                                : <p>{description}</p>}
                            <Link to='/' className="preview-card__button btn-outline btn-primary">Book Now</Link>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ProductDetails;