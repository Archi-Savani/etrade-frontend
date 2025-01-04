'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const ForgotPassword = () => {
    const [forgotEmail, setForgotEmail] = useState(null);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const onSubmit = (data) => {
        setForgotEmail(data);
    }
    return ( 
        <div className="axil-signin-form">
        <h3 className="title">Forgot Password?</h3>
        <p className="b2 mb--55">Enter the email address you used when you joined and we’ll send you instructions to reset your password.</p>
        <form className="singin-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" {...register('email', { required: true, pattern: /^\S+@\S+$/i})} placeholder="annie@example.com" />
                {errors.email && <p className="error">Email is required.</p>}
            </div>
            <div className="form-group">
                <button type="submit" className="axil-btn btn-bg-primary submit-btn">Send Reset Instructions</button>
                {forgotEmail && <p className="success">Reset Instruction Send successfully</p>}
            </div>
        </form>
    </div>
    );
}
 
export default ForgotPassword;