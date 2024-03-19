import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-services'

function NavBar({ user, setUser }) {

    function handleLogOut() {
        userService.logOut(); // Delegate to the users-service
        setUser(null); // Update state will also cause a re-render
    }

    return (
        <nav>
            <span>Welcome {user.name}</span>
            &nbsp; | &nbsp;
            <Link to="/orders">Order History</Link>
            &nbsp; | &nbsp;
            <Link to="/orders/new">New Orders</Link>
            &nbsp; | &nbsp;
            <Link to="" onClick={ handleLogOut } >Log Out</Link>
        </nav>
    );
}

export default NavBar