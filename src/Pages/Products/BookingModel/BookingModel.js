import React from 'react';

const BookingModel = () => {
    const handleBooking = () => {
        
    }
    return (
        <div>
            <input type="checkbox" id="bookingModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="bookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-xl font-bold text-center">Booking</h3>
                    <form className='grid grid-cols-1 gap-3 mt-10' onSubmit={handleBooking}>
                        <input type="text" name='name' disabled placeholder="Type here Name" className="input input-bordered w-full" />
                        <input type="text" name='email' placeholder="Type here Email" className="input input-bordered w-full" />
                        <input type="text" name='phone' placeholder="Type here Phone Number" className="input input-bordered w-full" />
                        <br/>
                        <input type="submit" value="Submit" className="input input-bordered w-full btn btn-accent" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModel;