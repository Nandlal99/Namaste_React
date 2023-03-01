import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import ShimmerUI from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantDetails = () => {

    const param = useParams();
    const {id} = param;
    // const [restaurantdetail, setRestaurantDetail] = useState(null);

    const restaurantdetail= useRestaurant(id);

    

    return (!restaurantdetail) ? <ShimmerUI/> : (
        <div className="mt-24">
            <div className="restaurantDetails flex bg-slate-800 h-52 text-white">
                <img className=" mx-24 p-3 m-3 h-48 " alt="logo" src={IMG_CDN_URL+restaurantdetail?.data?.cloudinaryImageId} />
                <div className="detail-item m-5 p-5">
                    <h2 className="p-1">{restaurantdetail?.data?.name}</h2>
                    <h4 className="p-1">{restaurantdetail?.data?.cuisines?.join(", ")}</h4>
                    <h4 className="p-1">{restaurantdetail?.data?.locality
                            +", "+restaurantdetail?.data?.area}</h4>
                    <div className="detail-rating flex p-1 gap-5">
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
        </div>
    );
};

export default RestaurantDetails;