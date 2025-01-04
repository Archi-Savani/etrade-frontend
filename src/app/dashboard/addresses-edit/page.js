'use client';
import Link from "next/link";
import { UserLists } from "@/data/Users";

const UserAddress = () => {
    const userAddress = UserLists[0];

    return ( 
        <div className="axil-dashboard-address">
            <p className="notice-text">The following addresses will be used on the checkout page by default.</p>
            <div className="row row--30">
                <div className="col-lg-6">
                    <div className="address-info mb--40">
                        <div className="addrss-header d-flex align-items-center justify-content-between">
                            <h4 className="title mb-0">Shipping Address</h4>
                            <Link href="/dashboard/addresses-edit/shipping" className="address-edit"><i className="far fa-edit" /></Link>
                        </div>
                        <ul className="address-details">
                            <li>Name: {userAddress.shippingAddress.name}</li>
                            <li>Email: {userAddress.shippingAddress.email}</li>
                            <li>Phone: {userAddress.shippingAddress.phone}</li>
                            <li className="mt--30">{userAddress.shippingAddress.street} <br />{`${userAddress.shippingAddress.state}, ${userAddress.shippingAddress.city} ${userAddress.shippingAddress.postCode}` }</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="address-info">
                        <div className="addrss-header d-flex align-items-center justify-content-between">
                            <h4 className="title mb-0">Billing Address</h4>
                            <Link href="/dashboard/addresses-edit/billing" className="address-edit"><i className="far fa-edit" /></Link>
                        </div>
                        <ul className="address-details">
                            <li>Name: {userAddress.billingAddress.name}</li>
                            <li>Email: {userAddress.billingAddress.email}</li>
                            <li>Phone: {userAddress.billingAddress.phone}</li>
                            <li className="mt--30">{userAddress.billingAddress.street} <br /> {`${userAddress.billingAddress.state}, ${userAddress.billingAddress.city} ${userAddress.billingAddress.postCode}` }</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default UserAddress;