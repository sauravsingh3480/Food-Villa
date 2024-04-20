import { Link } from 'react-router-dom';
import {linkStartPart} from '../constant.js'



const ReadMindCard = ({imageId,action}) => {
     const text = action?.text;
    return (
        <div className="cards">
                <img src={linkStartPart + imageId} alt={text + " Image"} />
        </div>

    );
}
const ReadMind = ({card}) => {
    const obj = card?.card?.card;
    return (
        <div id="read-mind">
            
            <span>{obj?.header?.title}</span>
            <div id="read-mind-card">
                {
                    obj?.imageGridCards?.info?.map((restaurant) => {
                        if(restaurant?.entityId?.length==5)
                        {
                            return (
                                <Link to={'/collections/'+ restaurant?.entityId } key={restaurant?.id}><ReadMindCard {...restaurant} /></Link>
                            )
                        }
                        return (
                        <Link to={'/collections/'+ restaurant?.entityId.substring(22) } key={restaurant?.id}><ReadMindCard {...restaurant} /></Link>
                    );
                    })
                }
            </div>
        </div>
    );
};
export default ReadMind;