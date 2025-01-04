'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const BillingAddress = () => {
    const [userBillingInfo, setUserBillingInfo] = useState(null);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const userBillingInfoHandler = (data) => {
        setUserBillingInfo(data);
    }
    return ( 
        <>
        <h4 className="title">Billing Address</h4>
        <form className="account-details-form" onSubmit={handleSubmit(userBillingInfoHandler)}>
        <div className="row">
            <div className="col-lg-6">
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" className="form-control" {...register('firstName', { required: true })} defaultValue="Annie" />
                    {errors.firstName && <p className="error">First Name is required.</p>}
                </div>
            </div>
            <div className="col-lg-6">
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" className="form-control" {...register('lastName', { required: true })} defaultValue="Mario" />
                    {errors.lastName && <p className="error">Last Name is required.</p>}
                </div>
            </div>
            <div className="col-lg-6">
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" {...register('email', { required: true })} defaultValue="abc@email.com" />
                    {errors.email && <p className="error">Email Name is required.</p>}
                </div>
            </div>
            <div className="col-lg-6">
                <div className="form-group">
                    <label>Phone</label>
                    <input type="tel" className="form-control" {...register('phone', { required: true })} defaultValue="58585858" />
                    {errors.phone && <p className="error">Phone Number is required.</p>}
                </div>
            </div>
            <div className="col-lg-12">
                <div className="form-group">
                    <label>Address</label>
                    <input type="text" className="form-control" {...register('address1', { required: true })} defaultValue="Address Line 1" />
                    {errors.address1 && <p className="error">Last Name is required.</p>}
                </div>
            </div>
            <div className="col-lg-12">
                <div className="form-group mb--0">
                    <input type="submit" className="axil-btn" defaultValue="Save Changes" />
                </div>
            </div>
        </div>
        </form>
    </>
     );
}
 
export default BillingAddress;