import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../contextApi/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/products?email=${user?.email}`;
    const { data: products = [], refetch, isLoading } = useQuery({
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
    
   function fomatTime (time) {
        return time.toString().slice(0, 24);
    }

    const handleDelete = (product) => {
        const agree = window.confirm(`Are you sure you want to delete: ${product.name}`);
        if (agree) {
            fetch(`http://localhost:5000/products/${product._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast('Seller profile deleted successfully')
                        refetch();
                    }
                })
        }
    }

    const handleAdvertise = (product) => {
        const agree = window.confirm(`Are you sure you want to advertise: ${product.name}`);
        if (agree) {
            fetch(`http://localhost:5000/products/advertise/${product._id}`, {
                method: 'PUT',
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(product)
            })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount > 0){
                    toast.success(`${product.name} advertised successfully`);
                    refetch();
                }
            })
        }
    }
    const handleRemoveAdvertise = (product) => {
        const agree = window.confirm(`Are you sure you want to remove advertise: ${product.name}`);
        if (agree) {
            fetch(`http://localhost:5000/products/removeAdvertise/${product._id}`, {
                method: 'PUT',
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(product)
            })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount > 0){
                    toast.success(`${product.name} advertised remove successfully`);
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
                            <th>Category</th>
                            <th>Posting Time</th>
                            <th>Selling Price</th>
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
                                <td>{fomatTime(product.time)}</td>
                                <td>{product.sellingPrice}</td>
                                <td>
                                {
                                    product?.action === 'advertise' ? <button className='btn btn-outline btn-primary' onClick={() => handleRemoveAdvertise(product)}>X</button>
                                    :
                                    <button className='btn btn-outline btn-primary' onClick={() => handleAdvertise(product)}>Advertise</button>
                                }
                                </td>
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