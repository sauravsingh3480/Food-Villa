import { cards } from "../constant";

const RestroOnline = ({card}) =>{
    const obj = card?.card?.card;
    return (
        <div id="restroOnline">
            <span>{obj?.title}</span>
        </div>
    );
}

export default RestroOnline;