const OrderView = () => {
    return (
        <div className="axil-dashboard-order-view">
            <p>Order <strong>#6523</strong> was placed on <strong>October 16, 2023</strong> and is currently <strong>Processing</strong>.</p>
            <div className="order-details">
                <h2 className="block-title">Order details</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Asus Zenbook Laptop <strong>X 1</strong></td>
                            <td>$326.63</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Subtotal:</th>
                            <th>$326.63</th>
                        </tr>
                        <tr>
                            <th>Shipping:</th>
                            <th>Flat rate</th>
                        </tr>
                        <tr>
                            <th>Payment Method:</th>
                            <th>Cash</th>
                        </tr>
                        <tr>
                            <th>Total:</th>
                            <th>$326.63</th>
                        </tr>
                        <tr>
                            <th>Note:</th>
                            <th>Dolorum fugit cum r</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div className="order-address">
                <h2 className="block-title">Billing address</h2>
                <address>
                Winifred Holder <br />
                Gonzales Harmon Plc<br />
                60 East New Parkway<br />
                Neque vero quibusdam<br />
                Nulla iure blanditii<br />
                South wels<br />
                86444<br />
                Solomon Islands<br />
                <p className="address-phone"><i className="far fa-phone"></i> +1 (939) 635-2505</p>
                <p className="address-email"><i className="far fa-envelope"></i> vikutyqudy@mailinator.com</p>
                </address>
            </div>
            <div className="order-address">
                <h2 className="block-title">Shipping address</h2>
                <address>
                Winifred Holder <br />
                Gonzales Harmon Plc<br />
                60 East New Parkway<br />
                Neque vero quibusdam<br />
                Nulla iure blanditii<br />
                South wels<br />
                86444<br />
                Solomon Islands<br />
                <p className="address-phone"><i className="far fa-phone"></i> +1 (939) 635-2505</p>
                <p className="address-email"><i className="far fa-envelope"></i> vikutyqudy@mailinator.com</p>
                </address>
            </div>
        </div>
    );
}

export default OrderView;