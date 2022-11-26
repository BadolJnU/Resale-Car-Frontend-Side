import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contextApi/AuthProvider';
import useToken from '../../../Hooks/useToken';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError ] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    if(token){
        navigate(from, {replace: true});
    }

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
        .then(res => {
            const user = res.user;
            setLoginUserEmail(data.email);
            console.log(user)
        })
        .catch(error => {
            setLoginError(error.message);
        })
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl font-bold text-primary text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    {/* register your input into the hook by invoking the "register" function */}

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
                        })} type="password" className="input input-bordered w-full max-w-xs"/>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text">Forget Password</span>
                        </label>
                    </div>
                    <br/>
                    <input type="submit" className='btn btn-primary w-full' value="login" />
                    {
                        loginError && <p className='text-red-600'>{loginError}</p>
                    }
                </form>
                <br/>
                <p>New to Doctors Portal <Link to='/register' className='text-blue-700'>Create new Account</Link></p>
                <div className='divider'>Or</div>
                <button className='btn btn-outline w-full'>Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;