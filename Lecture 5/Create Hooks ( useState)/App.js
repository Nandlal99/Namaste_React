
import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

/* const heading1 = React.createElement(
* Header
*   - Logo
*   - Navi List
*   - Cart
* Body
*   -RestaurantList
*   -Restaurant Card
*      -name
*      -cuisines
*      -rating
*      -img
* Footer
*/


const AppLayout = () => {
    return (
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
    );
};


const root = ReactDOM.createRoot(document.getElementById("root"));

        
root.render(<AppLayout/>);