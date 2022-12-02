import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contextApi/AuthProvider';
import './ProductDetails.css'

const ProductDetails = ({product}) => {
    const {user} = useContext(AuthContext);
    function formatTime (time) {
        return time.toString().slice(0, 24);
    }
    const { name, used, running, condition, description, buyingPrice, sellingPrice, image, time,  userName} = product;

    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const userName = form.userName.value;
        const email = form.email.value;
        const productName = form.name.value;
        const price = form.sellingPrice.value;
        const mobileNumber = form.phoneNumber.value;
        const location = form.location.value;
        const bookingProduct = {
            userName,
            email,
            productName,
            price,
            mobileNumber,
            location
        }
        fetch('https://server-side-flame.vercel.app/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingProduct)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('Booking Confiremd');
            }
            else {
                toast.error(data.message);
            }
        })
    }
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
                            <label htmlFor="bookingModal" className="preview-card__button btn-outline btn-primary">Book Now</label>
                        </div>
                    </div>

                </div>
            </div>
            <input type="checkbox" id="bookingModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="bookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-xl font-bold text-center">Booking</h3>
                    <form className='grid grid-cols-1 gap-3 mt-10' onSubmit={handleBooking}>
                        <input type="text" name='userName' defaultValue={user?.displayName} disabled placeholder="Type here Name" className="input input-bordered w-full" />
                        <input type="text" name='email' defaultValue={user?.email} disabled placeholder="Type here Name" className="input input-bordered w-full" />
                        <input type="text" name='name' defaultValue={name} disabled placeholder="Type here Name" className="input input-bordered w-full" />
                        <input type="text" name='sellingPrice' defaultValue={sellingPrice} disabled placeholder="Type here Name" className="input input-bordered w-full" />
                        <input type="text" name='phoneNumber' placeholder="Type here Mobile Number" className="input input-bordered w-full" />
                        <input type="text" name='location' placeholder="Type here meeting location" className="input input-bordered w-full" />
                        <br/>
                        <input type="submit" value="Submit" className="input input-bordered w-full btn btn-outline btn-primary" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default ProductDetails;