'use client';
import { useRouter } from 'next/navigation'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from "react-redux";
import Section from "@/components/elements/Section";
import FooterTwo from "@/components/footer/FooterTwo";
import HeaderFive from "@/components/header/HeaderFive";
import ServiceTwo from "@/components/services/ServiceTwo";
import { addToOrder } from '@/store/slices/productSlice';

const Checkout = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [openShippingForm, setopenShippingForm] = useState(false);
    const cartProducts = useSelector((state) => state.productData);

    const ShippingInfoHandler = (e) => {
        setopenShippingForm(e.target.checked)
    }
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const checkoutFormHandler = (data, e) => {
        if (data) {
            router.push('checkout/order-received');
            dispatch(addToOrder({
                billingAddress: {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    companyName: data.companyName,
                    country: data.country,
                    street1: data.street1,
                    street2: data.street2,
                    city: data.city,
                    phone: data.phone,
                    email: data.email,
                    createAccount: data.createAccount,
                    notes: data.notes,
                    shippingDifferent: data.shippingDifferent,
                    payment: data.paymentMethod
                },
                shippingAdress: data.shippingDifferent === "true" ?  {
                    name: data.shippingName,
                    email: data.shippingEmail,
                    phone: data.shippingPhone,
                    country: data.shippingCountry,
                    street1: data.shippingStreet1,
                    street2: data.shippingStreet2,
                    city: data.shippingCity
                } : null,
                items: cartProducts.cartItems,
                totalAmount: cartProducts.cartTotalAmount,
                totalQuantity: cartProducts.cartQuantityTotal,
                orderDate: new Date().toLocaleString(),
            }));
        }
    }

    return ( 
        <>
        <HeaderFive headerSlider />
        <main className="main-wrapper">
            <Section pClass="axil-checkout-area">
                {cartProducts.cartItems.length > 0 ? 
                <form onSubmit={handleSubmit(checkoutFormHandler)}>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="axil-checkout-billing">
                                <h4 className="title mb--40">Billing details</h4>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>First Name <span>*</span></label>
                                            <input type="text" {...register('firstName', { required: true })} placeholder="Adam" />
                                            {errors.firstName && <p className="error">First Name is required.</p>}
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>Last Name <span>*</span></label>
                                            <input type="text" {...register('lastName', { required: true })} placeholder="John" />
                                            {errors.lastName && <p className="error">Last Name is required.</p>}
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Company Name</label>
                                            <input type="text" {...register('companyName')} />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Country<span>*</span></label>
                                            <select {...register('country', { required: true })}>
                                                <option value="">Select a Country</option>
                                                <option value="Australia">Australia</option>
                                                <option value="Australia">England</option>
                                                <option value="New Zealand">New Zealand</option>
                                                <option value="Switzerland">Switzerland</option>
                                                <option value="United Kindom (UK)">United Kindom (UK)</option>
                                                <option value="United States (USA)">United States (USA)</option>
                                            </select>
                                            {errors.country && <p className="error">Country Name is required.</p>}
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Street Address <span>*</span></label>
                                            <input type="text" {...register('street1', { required: true })} placeholder="House number and street name"/>
                                            {errors.street1 && <p className="error">Street Address is required.</p>}
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Street Address</label>
                                            <input type="text" {...register('street2')} placeholder="Apartment, suite, unit, etc. (optonal)"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Town/ City <span>*</span></label>
                                            <input type="text" {...register('city', { required: true })} />
                                            {errors.city && <p className="error">Town/ City is required.</p>}
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Phone <span>*</span></label>
                                            <input type="number" {...register('phone', { required: true, maxLength: 11 })} />
                                            {errors.phone && <p className="error">Please enter 11 digit phone number.</p>}
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Email Address <span>*</span></label>
                                            <input type="email" {...register('email', { required: true })} />
                                            {errors.email && <p className="error">Email is required.</p>}
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group input-group">
                                        <input {...register("createAccount")} id="accountCreate" type="checkbox" value="true" />
                                        <label htmlFor="accountCreate">Create an account</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group shippng-form-toggle">
                                            <input {...register("shippingDifferent")} id="shippingDifferent" type="checkbox" value="true" 
                                            onClick={ShippingInfoHandler} />
                                            <label htmlFor="shippingDifferent">Ship to a different address?</label>
                                        </div>
                                    </div>
                                    {openShippingForm && 
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Country<span>*</span></label>
                                            <select {...register('shippingCountry', { required: true })}>
                                                <option value="">Select a Country</option>
                                                <option value="Australia">Australia</option>
                                                <option value="Australia">England</option>
                                                <option value="New Zealand">New Zealand</option>
                                                <option value="Switzerland">Switzerland</option>
                                                <option value="United Kindom (UK)">United Kindom (UK)</option>
                                                <option value="United States (USA)">United States (USA)</option>
                                            </select>
                                            {errors.shippingCountry && <p className="error">Country Name is required.</p>}
                                        </div>
                                        <div className="form-group">
                                            <label>Street Address <span>*</span></label>
                                            <input type="text" {...register('shippingStreet1', { required: true })} placeholder="House number and street name"/>
                                            {errors.shippingStreet1 && <p className="error">Street Address is required.</p>}
                                        </div>
                                        <div className="form-group">
                                            <label>Street Address</label>
                                            <input type="text" {...register('shippingStreet2')} placeholder="Apartment, suite, unit, etc. (optonal)"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Town/ City <span>*</span></label>
                                            <input type="text" {...register('shippingCity', { required: true })} />
                                            {errors.shippingCity && <p className="error">Town/ City is required.</p>}
                                        </div>
                                        <div className="form-group">
                                            <label>Name <span>*</span></label>
                                            <input type="text" {...register('shippingName', { required: true })} placeholder="Adam" />
                                            {errors.shippingName && <p className="error">Name is required.</p>}
                                        </div>
                                        <div className="form-group">
                                            <label>Phone <span>*</span></label>
                                            <input type="number" {...register('shippingPhone', { required: true, maxLength: 11 })} />
                                            {errors.shippingPhone && <p className="error">Please enter 11 digit phone number.</p>}
                                        </div>
                                        <div className="form-group">
                                            <label>Email Address <span>*</span></label>
                                            <input type="email" {...register('shippingEmail', { required: true })} />
                                            {errors.shippingEmail && <p className="error">Email is required.</p>}
                                        </div>
                                    </div>
                                    }
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Other Notes (optional)</label>
                                            <textarea rows="2" {...register('notes')} placeholder="Notes about your order, e.g. speacial notes for delivery."></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="axil-order-summery order-checkout-summery">
                                <h5 className="title mb--20">Your Order</h5>
                                <div className="summery-table-wrap">
                                    <table className="table summery-table">
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>Subtotal</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cartProducts.cartItems.map((items, index) => (
                                                <tr className="order-product" key={index}>
                                                    <td>{items.title} <span className="quantity">x{items.cartQuantity}</span></td>
                                                    <td>${items.salePrice ? items.salePrice : items.price}</td>
                                                </tr>
                                            ))}
                                            <tr className="order-subtotal">
                                                <td>Subtotal</td>
                                                <td>${cartProducts.cartTotalAmount}</td>
                                            </tr>
                                            <tr className="order-shipping">
                                                <td colSpan={2}>
                                                    <div className="shipping-amount">
                                                        <span className="title">Shipping Method</span>
                                                        <span className="amount">$35.00</span>
                                                    </div>
                                                    <div className="input-group">
                                                        <input type="radio" id="radio1" name="shipping" defaultChecked />
                                                        <label htmlFor="radio1">Free Shippping</label>
                                                    </div>
                                                    <div className="input-group">
                                                        <input type="radio" id="radio2" name="shipping" />
                                                        <label htmlFor="radio2">Local</label>
                                                    </div>
                                                    <div className="input-group">
                                                        <input type="radio" id="radio3" name="shipping" />
                                                        <label htmlFor="radio3">Flat rate</label>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="order-total">
                                                <td>Total</td>
                                                <td className="order-total-amount">${cartProducts.cartTotalAmount}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="order-payment-method">
                                    <div className="single-payment">
                                        <div className="input-group">
                                            <input type="radio" {...register("paymentMethod")} id="bank" value="bank" />
                                            <label htmlFor="bank">Direct bank transfer</label>
                                        </div>
                                        <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                                    </div>
                                    <div className="single-payment">
                                        <div className="input-group">
                                            <input type="radio" {...register("paymentMethod")} id="cash" value="cash" />
                                            <label htmlFor="cash">Cash on delivery</label>
                                        </div>
                                        <p>Pay with cash upon delivery.</p>
                                    </div>
                                    <div className="single-payment">
                                        <div className="input-group justify-content-between align-items-center">
                                            <input type="radio" {...register("paymentMethod")} id="paypal" value="paypal" />
                                            <label htmlFor="paypal">Paypal</label>
                                            <Image 
                                                src="/images/others/payment.png" 
                                                height={28}
                                                width={156}
                                                alt="Paypal payment"
                                            />
                                        </div>
                                        <p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p>
                                    </div>
                                </div>
                                <button type="submit" className="axil-btn btn-bg-primary checkout-btn">Process to Checkout</button>
                            </div>
                        </div>
                    </div>
                </form>
                : 
                <div className="text-center">
                    <h4>There is no item for checkout</h4>
                    <Link href="/shop" className="axil-btn btn-bg-primary">Back to shop</Link>
                </div>                            
                }
            </Section>
            <ServiceTwo />
        </main>
        <FooterTwo />
        </>
    );
}
 
export default Checkout;