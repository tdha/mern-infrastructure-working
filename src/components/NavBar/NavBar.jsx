import { Link } from "react-router-dom";

function NavBar () {
    return (
        <nav>
            <Link to="/orders">Order History</Link>
            &nbsp; | &nbsp;
            <Link to="/orders/new">New Orders</Link>
        </nav>
    );
}

export default NavBar