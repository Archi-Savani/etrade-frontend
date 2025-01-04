'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const ResetPassword = () => {
    const [resetPassword, setResetPassword] = useState(null);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const onSubmit = (data) => {
        setResetPassword(data);
    }

    return ( 
        <div className="axil-signin-form">
        <h3 className="title">Reset Password?</h3>
        <form className="singin-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label>New password</label>
                <input type="password" className="form-control" {...register('password', { required: true, minLength: 4})} />
                {errors.password && <p className="error">Password is required.</p>}
            </div>
            <div className="form-group">
                <label>Confirm password</label>
                <input type="password" className="form-control" {...register('cpassword', { required: true, minLength: 4})} />
                {errors.cpassword && <p className="error">Password is required.</p>}
            </div>
            <div className="form-group">
                <button type="submit" className="axil-btn btn-bg-primary submit-btn">Reset Password</button>
                {resetPassword && <p className="success">Password Reset successfully</p>}
            </div>
        </form>
    </div>
    );
}
 
export default ResetPassword;