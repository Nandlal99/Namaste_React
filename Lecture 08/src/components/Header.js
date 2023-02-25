import { useState } from "react";
import { Link } from "react-router-dom";
// const isLoggedIn = () => {
//     // API call to check login or logout
//     return true;
// };

const Header = () => {

    const [isLoggedIn,setIsLoggedIn] = useState(false);

    return (
        <div className="header">
            <div className="logo">
                <Link to="/">
                    <img className="logo-main" alt="logo" src="https://img.freepik.com/free-vector/hand-drawn-spicy-logo-design_23-2149667267.jpg?w=740&t=st=1676620469~exp=1676621069~hmac=b80b433eaf18b73d5c684dcc2db8c01f4b381a1e7f42064e46e2eb2742fe6cad" />
                </Link>
            </div>
            <div className="nav-item">
                <ul>
                    
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>Cart</li>
                    {
                        (isLoggedIn) ? <button onClick={() => {setIsLoggedIn(false)}}>logout</button>
                         : <button onClick={() => {setIsLoggedIn(true)}}>login</button>
                    }
                    
                </ul>
            </div>
        </div>
    );
};


export default Header;