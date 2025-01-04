'use client';
import { useSelector } from "react-redux";

const Dashboard = () => {
    const authInfo = useSelector((state) => state.auth);
    const users = authInfo.userData;
    return ( 
        <div className="axil-dashboard-overview">
            <div className="welcome-text">Hello {users.name} (not <span>{users.name}?</span> <a href="/sign-in">Log Out</a>)</div>
            <p>From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</p>
        </div>
     );
}
 
export default Dashboard;