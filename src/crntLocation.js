import { useState,useEffect } from "react";


const CrntLocation = () =>
{
    const [currLocation,setCurrLocation] = useState(null);
    
    useEffect(() =>
    {
        geoLocation()
    },[])
    const geoLocation = () =>{
        navigator.geolocation.getCurrentPosition((position) =>{
            const locationObj = position.coords;
            setCurrLocation(locationObj);
            }
        )
    }
    return currLocation;
}

export default CrntLocation;