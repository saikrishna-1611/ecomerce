import { LOGO } from "../constants/constants";
import {Link} from "react-router-dom";
const Header =() =>{
    return (
        <div className="header">
            <div className="logo-container">
            <img className="logo" src="https://banner2.cleanpng.com/20180519/jjs/avq0lgq0t.webp" alt="image logo"/>
            </div>

            <h1>E-commerce Application</h1>

            <div className="nav-items">
            <ul className="list">
                <li><Link to="/login">login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/profile">profile</Link></li>
                <li><Link to="/product">Products</Link></li>
                <li><Link to="/orders">Orders</Link></li>
            </ul>
            </div>
            
        </div>
    )
}

export default Header;