
import { IMG_CDN_URL } from "../config";

// Using props to get properties

// const RestaurantCard = (props) => {
//   console.log(props);
//   return (
//       <div className="card">
//           <img alt="logo" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+
//       props.restaurant.data?.cloudinaryImageId} />
//           <h2>{props.restaurant.data?.name}</h2>
//           <h3>{props.restaurant.data?.cuisines.join(", ")}</h3>
//           <h4>{props.restaurant.data?.lastMileTravelString}</h4>
//       </div>
//   );
// };

// Another way of props using, Destructing of props 

// const RestaurantCard = ({ restaurant }) => {
//   const {name,cuisines,lastMileTravelString,cloudinaryImageId} = restaurant.data;
//   return (
//       <div className="card">
//           <img alt="logo" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+
//       cloudinaryImageId} />
//           <h2>{name}</h2>
//           <h3>{cuisines.join(", ")}</h3>
//           <h4>{lastMileTravelString}</h4>
//       </div>
//   );
// };


const RestaurantCard = ({name,cuisines,lastMileTravelString,cloudinaryImageId}) => {
    return (
        <div className="card">
            <img alt="logo" src={
            IMG_CDN_URL +
        cloudinaryImageId} />
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{lastMileTravelString}</h4>
        </div>
    );
  };

export default RestaurantCard;