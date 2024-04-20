import { useOutletContext } from "react-router-dom";
import { useParams } from "react-router-dom";

const RestaurantCol4Details = () => {
    const params = useParams();
    const {id} = params;
    const { cards } = useOutletContext();
    const card4 = cards[4];
    return (
        <div id="col4-RestroDetails">
            <h1>RestaurantCol4Details</h1>
            <h1>RestaurantCol4Details</h1>
            <h1>RestaurantCol4Details</h1>
            <h1>RestaurantCol4Details</h1>
            <h1>RestaurantCol4Details</h1>
            <h1>RestaurantCol4Details</h1>
            <h1>RestaurantCol4Details {id}</h1>
            
        </div>
    );
}

export default RestaurantCol4Details;