'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const AccountDetails = () => {
    const [userAccountInfo, setUserAccountInfo] = useState(null);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const userInfoHandler = (data) => {
        setUserAccountInfo(data);
    }

    return ( 
        <div className="axil-dashboard-account">
            <form className="account-details-form" onSubmit={handleSubmit(userInfoHandler)}>
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
                    <div className="col-12">
                        <div className="form-group mb--40">
                            <label>Country/ Region</label>
                            <select className="select2" {...register('country', { required: true })}>
                                <option value={1}>United Kindom (UK)</option>
                                <option value={1}>United States (USA)</option>
                                <option value={1}>United Arab Emirates (UAE)</option>
                                <option value={1}>Australia</option>
                            </select>
                            {errors.country && <p className="error">Country Name is required.</p>}
                            <p className="b3 mt--10">This will be how your name will be displayed in the account section and in reviews</p>
                        </div>
                    </div>
                    <div className="col-12">
                        <h5 className="title">Password Change</h5>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" defaultValue={1201112131415} />
                        </div>
                        <div className="form-group">
                            <label>New Password</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Confirm New Password</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div className="form-group mb--0">
                            <input type="submit" className="axil-btn" defaultValue="Save Changes" />
                        </div>
                    </div>
                </div>
            </form>
        </div>

     );
}
 
export default AccountDetails;