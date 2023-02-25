import { Outlet } from "react-router-dom";
import React from "react";
import Profile from "./Profile";

class About extends React.Component{

    constructor(props){
        super(props);
        console.log("parent constructor");
    };

    componentDidMount(){
        console.log("parent DidMount");
    };


    render(){
        console.log("parent render");
        return (
            <div className="about">
                <h2>About us page</h2>
                <Profile name={"Nandlal"} />
            </div>
        );
    }
};

// const About = () => {
//     return (
//         <div className="about">
//             <h1>About us page</h1>
//             <h4>This is about us page, give information about this page.</h4>
//             <Profile name={"Nandlal"} />
//         </div>
//     );
// };

export default About;