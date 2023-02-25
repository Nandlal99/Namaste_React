import { useState, useEffect } from "react";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./Shimmer";
import NotFound from "./NotFound";
import {Link} from "react-router-dom";

// Pass individual props object, use ES6 spread opeartor it Destructing the props e.g {...restaurant} 
// Using map function to loop restaurant list 

function filterData(searchText, restaurants) {
    const filterData = restaurants?.filter((restaurant) => 
        restaurant?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase()));
    return filterData;
}


const Body = () => {

    const [filterRestaurants,setFilterRestaurants] = useState([]);
    const [allRestaurants,setAllRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    
    useEffect(() => {
        // API call..
        getRestaurant();
    }, []);

    async function getRestaurant(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7617317&lng=80.885655&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        //optional chaining..
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilterRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    return (allRestaurants?.length === 0) ? (<ShimmerUI/>) : (
        <>
            <div className="search">
                <input 
                    type="text" 
                    className="search-text" 
                    placeholder="Search for restaurant" 
                    value={searchText} 
                    onChange = { (e) => {
                        setSearchText(e.target.value);
                    }}
                />
                <button 
                    className="search-btn"
                    onClick={ () => {
                       const data= filterData(searchText,allRestaurants);
                       setFilterRestaurants(data);
                    }}
                    >
                        Search
                </button>
            </div>
            <div className="restaurant-list">
            {   (filterRestaurants?.length === 0) ? (<NotFound/>) :
                (filterRestaurants?.map((restaurant) => {
                return (
                    <Link to={"/restaurantDetails/"+restaurant.data.id} key={restaurant.data.id}>
                    <RestaurantCard {...restaurant.data} />
                    </Link>);
                }))
            }
            </div>
        </>
    );
};

export default Body;