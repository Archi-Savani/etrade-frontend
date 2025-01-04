'use client';
import Link from "next/link";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useDispatch } from "react-redux";
import AuthLayout from "../layout";
import { logIn } from "@/store/slices/authSlice";

const SignIn = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [signInData, setSignInData] = useState(null);
    const [loginError, setLoginError] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const loginInfo = {
        email: "admin@email.com",
        password: "1234"
    }
    
    const onSubmit = (data) => {
        if (data.email === loginInfo.email &&  data.password === loginInfo.password) {
            setSignInData(data);
            dispatch(logIn(data.email));
            router.push('/dashboard');
        }else {
            setLoginError(true);
        }
    }

    return ( 
        <AuthLayout bgImage="bg_image--9">
            <div className="axil-signin-form">
                <h3 className="title">Sign in to eTrade.</h3>
                <p className="b2 mb--55">Enter your detail below</p>
                <form className="singin-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" {...register('email', { required: true })} defaultValue="admin@email.com" />
                        {errors.email && <p className="error">Email is required.</p>}
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" {...register('password', { required: true, minLength: 4})} defaultValue={1234} />
                        {errors.password && <p className="error">Password is required.</p>}
                    </div>
                    <div className="form-group d-flex align-items-center justify-content-between">
                        <button type="submit" className="axil-btn btn-bg-primary submit-btn">Sign In</button>
                        <Link href="/forgot-password" className="forgot-btn">Forget password?</Link>
                    </div>
                    {loginError && <p className="error">User and Password doesn&apos;t match</p>}
                </form>
            </div>
        </AuthLayout>
     );
}
 
export default SignIn;