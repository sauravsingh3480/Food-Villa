
import { linkStartPart } from "../constant";

//exported to col1/RestroCol1Details
export const RestroCard = ({ name, cloudinaryImageId, cuisines, avgRatingString, sla, aggregatedDiscountInfoV3}) => {
    let header="";
    let subHeader="";
    if(aggregatedDiscountInfoV3!=null)
    {
        if(Object.keys(aggregatedDiscountInfoV3).length==2)
        {
          header = aggregatedDiscountInfoV3?.header;
          subHeader = aggregatedDiscountInfoV3?.subHeader;
        }
        else if(Object.keys(aggregatedDiscountInfoV3).length==1)
        {
            header = aggregatedDiscountInfoV3?.header;
        }
    }
    const time = sla?.slaString;

    return (
            <div className='restroCard'>
                <div className="restroImg">
                    <img src={linkStartPart + cloudinaryImageId} alt='' />
                    <span>{header + " " + subHeader}</span>
                </div>
                <div className='restroInfo'>
                    <span id='restroName'>{name}</span>
                    <ul>
                        <li>⭐{avgRatingString}</li>
                        <li>{time}</li>
                    </ul>
                    <div id='cuisines'>
                        {cuisines.join(", ")}
                    </div>
                </div>
            </div>
    );
}

const AllRestaurant = ({card}) =>{
    const obj1 = card?.card?.card;
    return(
            <div id='restroList'>
                {
                    obj1?.gridElements?.infoWithStyle?.restaurants?.map((restaurant) => {
                        return <RestroCard {...restaurant?.info} key={restaurant?.info?.id} />;
                    })
                }
            </div>
    );
}

export default AllRestaurant;