import { Link } from 'react-router-dom';
import { linkStartPart } from '../constant';

const TopRestroCard = ({name, cloudinaryImageId, cuisines, avgRatingString, sla, aggregatedDiscountInfoV3, cta }) => {
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
            <div className='topRestroCard'>
                <div className="topRestroImg">
                    <img src={linkStartPart + cloudinaryImageId} alt='' />
                    <span>{header + " " + subHeader}</span>
                </div>
                <div className='topRestroInfo'>
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
const TopRestro = ({card}) => {
    const obj = card?.card?.card;
    return (
        <div id="topRestro">
            <span>{obj?.header?.title}</span>
            <div id='topRestroList'>
                {
                    obj?.gridElements?.infoWithStyle?.restaurants.map((restaurant) => {
                        return <TopRestroCard {...restaurant?.info} key={restaurant?.info?.id} />;
                    })
                    // <TopRestroCard {...obj.gridElements.infoWithStyle.restaurants[1].info} />
                }
            </div>
        </div>
    );
}

export default TopRestro;