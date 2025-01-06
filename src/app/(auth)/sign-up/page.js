'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation'; // Import useRouter from Next.js
import axios from 'axios'; // Import Axios

const SignUp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const router = useRouter(); // Initialize the router

    const onSubmit = async (data) => {
        setError(null);
        setLoading(true);
        try {
            const response = await axios.post(
                'https://etrade-kils.onrender.com/api/user/register',
                data,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                }
            );

            if (response.status === 200 || response.status === 201) {
                console.log('Success:', response.data);
                router.push('/sign-in');
            } else {
                throw new Error(`Unexpected response: ${response.status}`);
            }
        } catch (err) {
            console.error('Error:', err.response?.data || err.message);
            setError(err.response?.data?.message || 'Failed to register. Please try again.');
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="axil-signin-form">
            <h3 className="title">I&apos;m New Here</h3>
            <p className="b2 mb--55">Enter your detail below</p>
            <form className="signin-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label>User Name</label>
                    <input
                        type="text"
                        className="form-control"
                        {...register('name', { required: true })}
                        placeholder="admin"
                    />
                    {errors.name && <p className="error">User Name is required.</p>}
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                        placeholder="annie@example.com"
                    />
                    {errors.email && <p className="error">Email is required and must be valid.</p>}
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        {...register('password', { required: true, minLength: 4 })}
                    />
                    {errors.password && (
                        <p className="error">Password is required (min length: 4).</p>
                    )}
                </div>
                <div className="form-group">
                    <button
                        type="submit"
                        className="axil-btn btn-bg-primary submit-btn"
                        disabled={loading}
                    >
                        {loading ? 'Creating Account...' : 'Create Account'}
                    </button>
                    {error && <p className="error">{error}</p>}
                </div>
            </form>
        </div>
    );
};

export default SignUp;






