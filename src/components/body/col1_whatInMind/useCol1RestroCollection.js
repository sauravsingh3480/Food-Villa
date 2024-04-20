import { useState,useEffect } from "react";

//Hook that show column 1 restaurant collection
export const useCo1RestroCollection=(code) =>{   
    const [cards1, setCards1] = useState([])
    useEffect(() => {
        AllRestaurantsCol1();
    }, [])
    async function AllRestaurantsCol1() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2599333&lng=77.412615&collection=" + code + "?collection_id=" + code + "&search_context=pizza&tags=layout_CCS_Pizza&type=rcv2");
        const jsonData = await data?.json();
        setCards1(jsonData?.data?.cards);
    }
    return cards1;
}
