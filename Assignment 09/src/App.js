
import React, { lazy, Suspense } from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantDetails from "./components/RestaurantDetails";
import Profile from "./components/Profile";
import ShimmerUI from "./components/Shimmer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// import Instamart from "./components/Instamart";

// Lazy loading
// code spliting
const Instamart = lazy(() => import("./components/Instamart"));

const About = lazy(() => import("./components/About"));

// const Contact = lazy(() => import("./components/Contact"));

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
            <Outlet />
            <Footer/>
        </>
    );
};


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children : [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <Suspense><About /></Suspense>,
                children : [
                    {
                        path: "profile",
                        element: <Profile />,
                    },
                ],
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/restaurantDetails/:id",
                element: <RestaurantDetails />,
            },
            {
                path: "/instamart",
                element: <Suspense fallback={ <ShimmerUI/> }><Instamart /></Suspense>,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

        
root.render(<RouterProvider router={appRouter} />);