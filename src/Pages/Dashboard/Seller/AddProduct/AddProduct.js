import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [addProductError, setaddProductError] = useState('');
    const imageHostKey = "bf5aa6d374778e1de5b7592aee5336d6";
    console.log(imageHostKey)
    const navigate = useNavigate();

    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            return data;
        }
    })

    const handleAddProduct = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const product = {
                        name: data.name,
                        location: data.location,
                        used: data.used,
                        running: data.running,
                        condition: data.condition,
                        description: data.description,
                        buyingPrice: data.b_price,
                        sellingPrice: data.s_price,
                        category: data.categoryName,
                        image: imgData.data.url,
                        time: Date().toLocaleString()
                    }
                    console.log(product)

                    // save doctor information to the database
                    fetch('http://localhost:5000/addProduct', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name} is added successfully`);
                            //navigate('/')
                        })
                }
            })
    }
    return (
        <div className='h-[1000px] flex justify-center items-center'>
            <div className='w-100 p-7'>
                <h2 className='text-xl font-bold text-primary text-center'>Add Product</h2>
                <form onSubmit={handleSubmit(handleAddProduct)}>
                    {/* register your input into the hook by invoking the "register" function */}

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Model Name</span>
                        </label>
                        <input {...register("name", {
                            required: "Full Name is Required"
                        })} type="name" className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input {...register("location", {
                            required: "Address is Required"
                        })} type="address" className="input input-bordered w-full max-w-xs" />
                        {errors.location && <p className='text-red-600'>{errors.location?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Used</span>
                        </label>
                        <input {...register("used", {
                            required: "How many years used is Required",
                        })} type="number" className="input input-bordered w-full max-w-xs" />
                        {errors.used && <p className='text-red-600'>{errors.used?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Running (km)</span>
                        </label>
                        <input {...register("running", {
                            required: "How many kilo meter running used is Required",
                        })} type="number" className="input input-bordered w-full max-w-xs" />
                        {errors.running && <p className='text-red-600'>{errors.running?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Condition</span></label>
                        <select
                            {...register('condition')}
                            className="select input-bordered w-full max-w-xs">
                            <option value="Excellent">Excellent</option>
                            <option value="good">Good</option>
                            <option value="fair">Fair</option>
                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input {...register("description", {
                            required: "Description is Required",
                        })} type="text" className="input input-bordered w-full max-w-xs" />
                        {errors.description && <p className='text-red-600'>{errors.description?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Buying Price</span>
                        </label>
                        <input {...register("b_price", {
                            required: "Buying Price is Required",
                        })} type="number" className="input input-bordered w-full max-w-xs" />
                        {errors.b_price && <p className='text-red-600'>{errors.b_price?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Selling Price</span>
                        </label>
                        <input {...register("s_price", {
                            required: "Selling Price is Required",
                        })} type="number" className="input input-bordered w-full max-w-xs" />
                        {errors.s_price && <p className='text-red-600'>{errors.s_price?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Category</span></label>
                        <select
                            {...register('categoryName')}
                            className="select input-bordered w-full max-w-xs">
                            {
                                categories.map(category => <option
                                    key={category._id}
                                    value={category.categoryName}
                                >{category.categoryName}</option>)
                            }
                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Photo</span></label>
                        <input type="file" {...register("image", {
                            required: "Photo is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                    </div>
                    <br />
                    <input type="submit" className='btn btn-primary w-full' value="Submit" />
                    {
                        addProductError && <p className='text-danger-600'>{setaddProductError}</p>
                    }
                </form>
            </div>
        </div>
    );
};

export default AddProduct;