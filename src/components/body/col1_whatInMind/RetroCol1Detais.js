import { useParams } from "react-router-dom";
import Shimmer from "../../../../shimmer";
import { useCo1RestroCollection } from "./useCol1RestroCollection";

import { RestroCard } from "../col5_allRestaurant/allRestro";   //importing because same UI need

const RestaurantCol1Details = () => {
    const params = useParams();
    const { id}  = params;
    let code = null;  //code is unique code given to each collection
    if(id.length==5)
    {
        code = id;
    }
    else{
        code = id.substring(14, 19);
    }
    const cards = useCo1RestroCollection(code); //pass code of collection returns collection

    if (!cards || cards.length == 0) return <Shimmer />
    return (
        <div id="col1-allRestros">
            <div id="col1-allRestros-Details">
                <span id="col1-restros-title">{cards[0]?.card?.card?.title}</span>
                <span id="col1-restros-desc">{cards[0]?.card?.card?.description}</span>
            </div>
            <div id='restroList'>
                {
                    cards.map((restaurant) => {
                        if (restaurant?.card?.card?.info != null) {
                            return <RestroCard {...restaurant?.card?.card?.info} key={restaurant?.card?.card?.info?.id} />;
                        }
                    })
                }
            </div>
        </div>
    );
}
export default RestaurantCol1Details;