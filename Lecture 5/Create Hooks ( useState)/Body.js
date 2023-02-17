import { useState } from "react";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";


// Pass individual props object, use ES6 spread opeartor it Destructing the props e.g {...restaurant} 
// Using map function to loop restaurant list 

function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) => 
        restaurant.data.name.includes(searchText));
    console.log(filterData);
    return filterData;
}


const Body = () => {

    const [restaurants,setRestaurants] = useState(restaurantList);
    const [searchText, setSearchText] = useState("");

    return (
        <>
            <div className="search">
                <input 
                    type="text" 
                    className="search-text" 
                    placeholder="Search" 
                    value={searchText} 
                    onChange = { (e) => {
                        setSearchText(e.target.value);
                    }}
                />
                <button 
                    className="search-btn"
                    onClick={ () => {
                       const data= filterData(searchText,restaurants);
                       setRestaurants(data);
                    }}
                    >
                        Search
                </button>
            </div>
            <div className="restaurant-list">
            {
                restaurants.map((restaurant) => {
                return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
                })
            }
            </div>
        </>
    );
};

export default Body;