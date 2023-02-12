//
import React from "react";
import ReactDOM  from "react-dom/client";

// const heading1 = React.createElement(
//     "h1",{
//         style:{
//             color:"bule",
//         },
//     },
//     "Hello World! from h1 from parcel!"
//     );

// const heading2 = React.createElement(
//     "h2", {
//         style:{
//             color:"bule",
//         },
//     },
//     "Hello World! from h2 from parcel"
// );
        
// const container = React.createElement(
//     "div",
//     {
//         id:"container",
//     },
//     [heading1,heading2]
// );


// Create a Nested header element using React.createElement(h1,h2,h3 inside a div with class "title") 

// const heading1 = React.createElement(
//     "h1",
//     {},
//     "Hi Everyone!"
// );

// const heading2 = React.createElement(
//     "h2",
//     {},
//     "My name is Nandlal"
// );

// const heading3 = React.createElement(
//     "h3",
//     {},
//     "I love Programming"
// );

// const container = React.createElement(
//     "div",
//     {
//         class:"title",
//     },
//     [heading1,heading2,heading3]
// );

//  Create the same element using JSX
// const header = (
//     <div className="title">
//         <h1>Hey Everyone!</h1>
//         <h2>My name is Nandlal</h2>
//         <h3>I love Programming</h3>
//     </div>
// );

// Create a function component of the same with jsx and pass attribute into the tag in jsx

// const HeaderComponent = () => {
//     return (
//         <div className="title">
//             <h1 id="h1" key={1}>Hey Everyone</h1>
//             <h2 id="h2" key={2}>My name is Nandlal</h2>
//             <h3 id="h3" key={3}>I love Programming and Development</h3>
//         </div>
//     );
// };

// // Composition of Component(Add component inside another)

// const Title = () => {
//     return (
//         <div>
//             <h1 id="title">Namaste React</h1>
//         </div>
//     );
// };

// const HeaderComponent2 = () => {
//     return (
//         <div>
//             {/* {Title} */}
//             {<Title/>}
//             {<Title></Title>}
//             <h2>Namaste React Function Component</h2>
//         </div>
//     );
// };

// const Logo = () => (
//     <div>
//         <img src="1.jpg" alt="logo" />
//     </div>
// );

// const SearchBar = () => (
//     <div>
//         <form action="#">
//                     <input type="text" placeholder="Search bar"  name="search" />
//                     <button>
//                         <i class="fas fa-search"></i>
//                     </button>
//         </form>
//     </div>
// );

// const UserLogo = () => (
//     <div>
//         <i class="fa-solid fa-user"></i>
//     </div>
// );

const Header = () => {
    return (
        <div className="header">
            <div className="log">
                <img className="logo" alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOhe7LuAkvtf8xR8MEMSiIeTtVYMaPMRwrAQ&usqp=CAU"/>
                <h2>Food Villa</h2>
            </div>
            <div className="search">
                <input type="text" placeholder="Seacrh bar" />
                <button>
                    <img height={10} src="https://www.kindpng.com/picc/m/33-336780_search-icon-grey-png-transparent-png.png" />
                </button>
            </div>
            <div>
                <img className="user" alt="user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBgZbchuTiUtA3Egi1arN4BEQeoTaUtutQ8A&usqp=CAU" />
            </div>
        </div> 
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

        
root.render(<Header />);