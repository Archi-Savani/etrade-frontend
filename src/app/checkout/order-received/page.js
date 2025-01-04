'use client';
import { useSelector } from "react-redux";
import Section from "@/components/elements/Section";
import FooterTwo from "@/components/footer/FooterTwo";
import HeaderFive from "@/components/header/HeaderFive";

const OrderReceived = () => {
    const orders = useSelector((state) => state.productData.orderItems);
    const latestOrder = orders[orders.length - 1];
    return ( 
        <>
        <HeaderFive />
            <main className="main-wrapper">
                <Section pClass="order-received">
                    {latestOrder && 
                        <>
                        <h1 className="thank-you-text">Thank you. Your order has been received.</h1>
                        <ul className="order-overview">
                            <li className="overview-item order-number">
                                ORDER NUMBER: <strong>1111</strong>
                            </li>
                            <li className="overview-item order-number">
                                DATE: <strong>{latestOrder.orderDate}</strong>
                            </li>
                            <li className="overview-item order-number">
                                EMAIL: <strong>{latestOrder.billingAddress.email}</strong>
                            </li>
                            <li className="overview-item order-number">
                                TOTAL: <strong>{latestOrder.totalAmount}</strong>
                            </li>
                            <li className="overview-item order-number">
                                PAYMENT METHOD: <strong>{latestOrder.billingAddress.payment}</strong>
                            </li>
                        </ul>
                        <div className="order-details">
                            <h5 className="block-title">Order details</h5>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {latestOrder.items.map((data, index) => (
                                        <tr key={index}>
                                            <td>{data.title} <strong>X {data.cartQuantity}</strong></td>
                                            <td>{data.salePrice ? data.salePrice : price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>Subtotal:</th>
                                        <th>{latestOrder.totalAmount}</th>
                                    </tr>
                                    <tr>
                                        <th>Shipping:</th>
                                        <th>Flat rate</th>
                                    </tr>
                                    <tr>
                                        <th>Payment Method:</th>
                                        <th>{latestOrder.billingAddress.payment}</th>
                                    </tr>
                                    <tr>
                                        <th>Total:</th>
                                        <th>{latestOrder.totalAmount}</th>
                                    </tr>
                                    <tr>
                                        <th>Note:</th>
                                        <th>{latestOrder.billingAddress.notes}</th>
                                    </tr>
                                </tfoot>
                            </table>

                        </div>
                        <div className="customer-details">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="customer-address">
                                    <h5 className="block-title">Billing address</h5>
                                        <address>
                                        {latestOrder.billingAddress.firstName + " " + latestOrder.billingAddress.lastName} <br/>
                                        {latestOrder.billingAddress.companyName}<br/>
                                        {latestOrder.billingAddress.street1}<br/>
                                        {latestOrder.billingAddress.street2}<br/>
                                        {latestOrder.billingAddress.city}<br/>
                                        {latestOrder.billingAddress.country}<br/>
                                        <p className="address-phone"><i className="far fa-phone"></i> {latestOrder.billingAddress.phone}</p>
                                        <p className="address-email"><i className="far fa-envelope"></i> {latestOrder.billingAddress.email}</p>
                                        </address>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="customer-address">
                                    <h5 className="block-title">Shipping address</h5>
                                            {latestOrder.billingAddress.shippingDifferent === "true" ?
                                            <address>
                                                {latestOrder.shippingAdress.name} <br/>
                                                {latestOrder.shippingAdress.street1}<br/>
                                                {latestOrder.shippingAdress.street2}<br/>
                                                {latestOrder.shippingAdress.city}<br/>
                                                {latestOrder.shippingAdress.country}<br/>
                                                <p className="address-phone"><i className="far fa-phone"></i> {latestOrder.shippingAdress.phone}</p>
                                                <p className="address-email"><i className="far fa-envelope"></i> {latestOrder.shippingAdress.email}</p>
                                            </address>
                                            : 
                                            <address>
                                                {latestOrder.billingAddress.firstName + " " + latestOrder.billingAddress.lastName} <br/>
                                                {latestOrder.billingAddress.companyName}<br/>
                                                {latestOrder.billingAddress.street1}<br/>
                                                {latestOrder.billingAddress.street2}<br/>
                                                {latestOrder.billingAddress.city}<br/>
                                                {latestOrder.billingAddress.country}<br/>
                                                <p className="address-phone"><i className="far fa-phone"></i> {latestOrder.billingAddress.phone}</p>
                                                <p className="address-email"><i className="far fa-envelope"></i> {latestOrder.billingAddress.email}</p>
                                            </address>
                                            }
                                    </div>
                                </div>
                            </div>
                        </div>
                        </>
                    }
                </Section>
            </main>
        <FooterTwo />
        </>
    );
}
 
export default OrderReceived;