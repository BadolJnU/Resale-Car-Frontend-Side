import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';

import toast from 'react-hot-toast';
import useToken from '../../../Hooks/useToken';
import { AuthContext } from '../../../contextApi/AuthProvider';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const [createUserEmail, setCreateUserEmail] = useState('');
    const [token] = useToken(createUserEmail)
    const navigate = useNavigate();

    if(token){
        navigate('/');
    }
    const handleRegister = data => {
        //console.log(data)
        setSignUpError('');
        createUser(data.email, data.password)
        .then(res => {
            const user = res.user;
            toast('user created successfully');
            const userInfo = {
                displayName: data.name
            }
            updateUser(userInfo)
            .then(() => {
                saveUser(data.email, data.name, data.role)
            })
            .catch(error => console.log(error))
        })
        .catch(error => setSignUpError(error.message));
    }

    const saveUser = (email, name, role) => {
        const savingUser = {email, name, role};
        console.log(savingUser)
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(savingUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log("data working")
            setCreateUserEmail(email);
        })
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl font-bold text-primary text-center'>Register</h2>
                <form onSubmit={handleSubmit(handleRegister)}>
                    {/* register your input into the hook by invoking the "register" function */}

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input {...register("name", {
                            required: "Full Name is Required"
                        })} type="name" className="input input-bordered w-full max-w-xs"/>
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email", {
                            required: "Email Address is Required"
                        })} type="email" className="input input-bordered w-full max-w-xs"/>
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password", {
                            required: "Password is Required",
                            minLength: {value: 6, message: "Password must be contain six characters or longer"},
                            pattern: {value: /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{10,16}$/, message: "Password should be contain at least one uppercase letter, one special character character and one digit"}
                        })} type="password" className="input input-bordered w-full max-w-xs"/>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Role</span></label>
                    <select 
                    {...register('role')}
                    className="select input-bordered w-full max-w-xs">
                        <option name='buyer'>Buyer</option>
                        <option name='seller'>Seller</option>
                    </select>
                </div>
                    <br/>
                    <input type="submit" className='btn btn-primary w-full' value="Register" />
                    {
                        signUpError && <p className='text-danger-600'>{setSignUpError}</p>
                    }
                </form>
                <br/>
                <p>Already have an account in Doctors Portal <Link to='/login' className='text-blue-700'>Login</Link></p>
                <div className='divider'>Or</div>
                <button className='btn btn-outline w-full'>Continue with Google</button>
            </div>
        </div>
    );
};

export default Register;