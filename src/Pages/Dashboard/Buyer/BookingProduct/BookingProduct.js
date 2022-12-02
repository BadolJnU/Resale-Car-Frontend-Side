import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../contextApi/AuthProvider';

const BookingProduct = () => {
    const { user } = useContext(AuthContext);
    const url = `https://server-side-flame.vercel.app/booking?email=${user?.email}`;
    const { data: products = [], refetch } = useQuery({
        queryKey: ['email', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data;
        }
    })
    const handleDelete = (product) => {
        const agree = window.confirm(`Are you sure you want to delete: ${product.productName}`);
        if (agree) {
            fetch(`https://server-side-flame.vercel.app/booking/${product._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast('Booking Product deleted successfully')
                        refetch();
                    }
                })
        }
    }
    return (
        <div>
            <div className="overflow-x-auto my-10 mx-10">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Model Name</th>
                            <th>Selling Price</th>
                            <th>Seller Number</th>
                            <th>Meeting Place</th>
                            <th>Pay</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products &&
                            products?.map((product, i) => <tr className="hover" key={product._id}>
                                <th>{i + 1}</th>
                                <td>{product.productName}</td>
                                <td>{product.price}</td>
                                <td>{product.mobileNumber}</td>
                                <td>{product.location}</td>
                                
                                <td><button className='btn btn-outline btn-primary'>Pay Now</button></td>
                                <td><button className='btn btn-primary' onClick={() => handleDelete(product)}>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookingProduct;