import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../contextApi/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/products?email=${user?.email}`;
    const {data: products = [], refetch, isLoading} = useQuery({
        queryKey: ['email', user?.email],
        queryFn: async() => {
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

    }
    return (
        <div>
            <div className="overflow-x-auto my-10 mx-10">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Model Name</th>
                            <th>Category</th>
                            <th>Posting Time</th>
                            <th>Advertise</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products &&
                            products?.map((product, i) => <tr className="hover" key={product._id}>
                                <th>{i + 1}</th>
                                <td>{product.name}</td>
                                <td>{product.category}</td>
                                <td>{product.time}</td>
                                <td><button className='btn btn-outline btn-primary' onClick={() => handleDelete(product)}>Advertise</button></td>
                                <td><button className='btn btn-primary' onClick={() => handleDelete(product)}>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;