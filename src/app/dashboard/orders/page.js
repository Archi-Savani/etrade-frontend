import Link from "next/link";

const UserOrders = () => {
    return ( 
        <div className="axil-dashboard-order">
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Order</th>
                            <th scope="col">Date</th>
                            <th scope="col">Status</th>
                            <th scope="col">Total</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">#6523</th>
                            <td>October 16, 2023</td>
                            <td>Processing</td>
                            <td>$326.63 for 1 items</td>
                            <td>
                                <Link href="dashboard/orders/view" className="axil-btn view-btn">View</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
     );
}
 
export default UserOrders;