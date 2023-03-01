
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


const RestaurantCard = ({name,cuisines,costForTwoString,cloudinaryImageId,avgRating,slaString}) => {
    return (
        <div className="card shadow-lg p-2 m-2 w-60 hover:bg-gray-200">
            <img className="h-52 p-3 " alt="logo" src={
            IMG_CDN_URL +
        cloudinaryImageId} />
            <div className="card-item">
                <h3 className="card-title font-semibold  text-xl p-3 text-gray-800">{name}</h3>
                <h6 className="card-cuisine text-gray-400 px-3 w-3/4 text-sm">{cuisines.join(", ")}</h6>
            </div>
            <div className="font-semibold flex text-xs mt-2  py-2 px-3 pr-5 justify-between text-gray-700">
                <div className="rating-logo ">
                    <span>{avgRating}</span>
                </div>
                <h5>{slaString}</h5>
                <h5>{costForTwoString}</h5>
            </div>
        </div>
    );
  };

export default RestaurantCard;