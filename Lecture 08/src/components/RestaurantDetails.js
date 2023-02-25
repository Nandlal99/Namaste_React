import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import ShimmerUI from "./Shimmer";

const RestaurantDetails = () => {

    const param = useParams();
    const {id} = param;
    const [restaurantdetail, setRestaurantDetail] = useState(null);

    useEffect(() => {
        getRestaurant();
    },[]);

    async function getRestaurant(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=26.7617317&lng=80.885655&menuId="+id);
        const json = await data.json();
        console.log(json);
        setRestaurantDetail(json);
    }
    return (!restaurantdetail) ? <ShimmerUI/> : (
        <>
            <div className="restaurantDetails">
                <img  alt="logo" src={IMG_CDN_URL+restaurantdetail?.data?.cloudinaryImageId} />
                <div className="detail-item">
                    <h2>{restaurantdetail?.data?.name}</h2>
                    <h4>{restaurantdetail?.data?.cuisines?.join(", ")}</h4>
                    <h4>{restaurantdetail?.data?.locality
                            +", "+restaurantdetail?.data?.area}</h4>
                    <div className="detail-rating">
                        <div className="avgRating">
                            <h4>{restaurantdetail?.data?.avgRatingString}</h4>
                            <h4>{restaurantdetail?.data?.totalRatingsString}</h4>
                        </div>
                        <div  className="deliveryTime">
                            <h4>{restaurantdetail?.data?.sla?.slaString}</h4>
                            <h4>Delivery time</h4>
                        </div>
                        <div  className="costForTwo">
                            <h4>{restaurantdetail?.data?.costForTwoMsg}</h4>
                            <h4>Cost for two</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="restaurnatMenu">
                    <h2>Menu</h2>
                    <ul>
                        {
                            // console.log(Object.values(restaurantdetail?.data?.menu?.items))
                            Object.values(restaurantdetail?.data?.menu?.items).map((item)=> (
                                <li key={item.id}>{item.name}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    );
};

export default RestaurantDetails;