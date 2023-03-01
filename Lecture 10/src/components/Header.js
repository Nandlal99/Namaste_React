import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
// const isLoggedIn = () => {
//     // API call to check login or logout
//     return true;
// };

const Header = () => {

    const [isLoggedIn,setIsLoggedIn] = useState(false);

    return (
        <div className=" bg-white fixed h-20 flex justify-between shadow-md w-full top-0 left-0 right-0 ">
            <div>
                <Link to="/">
                    <img className="logo-main h-20 px-3 mx-3 " alt="logo" src="https://img.freepik.com/free-vector/hand-drawn-spicy-logo-design_23-2149667267.jpg?w=740&t=st=1676620469~exp=1676621069~hmac=b80b433eaf18b73d5c684dcc2db8c01f4b381a1e7f42064e46e2eb2742fe6cad" />
                </Link>
            </div>
            <div className="nav-item">
                <ul className="flex p-3 m-3 font-semibold text-gray-600">
                    <li className="px-5 ">{ useOnline() ? <h3 className="useOnline text-green-500">Online</h3> : 
                                    <h3 className="useOffline text-gray-300">Offline</h3>
                        }</li>
                    <button className=" hover:bg-gray-300 rounded-md"><li className="px-5 "><Link to="/">Home</Link></li></button>
                    <button className=" hover:bg-gray-300 rounded-md"><li className="px-5"><Link to="/about">About</Link></li></button>
                    {/* <li className="px-3"><Link to="/contact">Contact</Link></li> */}
                    <button className=" hover:bg-gray-300 rounded-md"><li className="px-5"><Link to="/instamart">Instamart</Link></li></button>
                    <button className=" hover:bg-gray-300 rounded-md"><li className="px-5">Cart</li></button>
                    {
                        (isLoggedIn) ? <button className="px-5 hover:bg-gray-300 rounded-md" onClick={() => {setIsLoggedIn(false)}}>logout</button>
                         : <button className="px-5 hover:bg-gray-300 rounded-md" onClick={() => {setIsLoggedIn(true)}}>login</button>
                    }
                    
                </ul>
            </div>
        </div>
    );
};


export default Header;