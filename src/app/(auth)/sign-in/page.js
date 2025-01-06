'use client';
import Link from "next/link";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useDispatch } from "react-redux";
import axios from "axios";
import AuthLayout from "../layout";
import { logIn } from "@/store/slices/authSlice";

const SignIn = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [loginError, setLoginError] = useState(null); // To handle login errors
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        setLoginError(null); // Clear any previous errors
        try {
            // Make POST request to the login API
            const response = await axios.post(
                'https://etrade-kils.onrender.com/api/user/login',
                data,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true, // Include credentials for cookies/auth
                }
            );

            if (response.status === 200) {
                // Save user info in Redux store or local storage
                dispatch(logIn(response.data)); // Assuming `logIn` takes user data

                // Redirect to the dashboard
                router.push('/home/electronics');
            } else {
                throw new Error('Unexpected server response.');
            }
        } catch (err) {
            // Handle errors from the server or network
            setLoginError(
                err.response?.data?.message ||
                'Invalid credentials. Please try again.'
            );
        }
    };

    return (
        <AuthLayout bgImage="bg_image--9">
            <div className="axil-signin-form">
                <h3 className="title">Sign in to eTrade.</h3>
                <p className="b2 mb--55">Enter your detail below</p>
                <form className="signin-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            {...register('email', { required: true })}
                            placeholder="admin@email.com"
                        />
                        {errors.email && <p className="error">Email is required.</p>}
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            {...register('password', { required: true, minLength: 4 })}
                            placeholder="Enter your password"
                        />
                        {errors.password && <p className="error">Password is required (min length: 4).</p>}
                    </div>
                    <div className="form-group d-flex align-items-center justify-content-between">
                        <button
                            type="submit"
                            className="axil-btn btn-bg-primary submit-btn"
                        >
                            Sign In
                        </button>
                        <Link href="/forgot-password" className="forgot-btn">Forgot password?</Link>
                    </div>
                    {loginError && <p className="error">{loginError}</p>}
                </form>
            </div>
        </AuthLayout>
    );
};

export default SignIn;