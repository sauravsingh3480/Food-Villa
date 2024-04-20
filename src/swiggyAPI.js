import { useState,useEffect } from 'react';

const SwiggyApiCall = ({currLocation}) =>
{
    const [cards,setCards] = useState([]);
    
     //API CALL
    useEffect(()=>{
        if(currLocation!=null)
        {
          swiggyAPI({currLocation});
        }  
    },[currLocation]);
    async function swiggyAPI({currLocation})
    {
        const latitude = currLocation.latitude;
        const longitude = currLocation.longitude;
        console.log(latitude)
        console.log(longitude)
        let apiURL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2599333&lng=77.412615&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
        const data = await fetch(apiURL);
        const jsonData = await data.json();
        setCards(jsonData?.data?.cards);
    }
    
    return cards;
}   
export default SwiggyApiCall;