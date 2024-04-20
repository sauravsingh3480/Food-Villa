import ReadMind from './col1_whatInMind/readMind';
import TopRestro from './col2_topRestro/topRestro';
import RestroOnline from './col3_restroOnline/openRestoHeading';
import AllRestaurant from './col5_allRestaurant/allRestro';
import { useOutletContext } from 'react-router';


const Body = () =>{
    const {cards} = useOutletContext();
    return(
        <main>
            <div id='mainComponent'>
                <ReadMind card={cards[0]}/>
                <TopRestro card={cards[1]}/>
                <RestroOnline card={cards[2]}/>
                <AllRestaurant card={cards[4]}/>
            </div>
        </main>    
    );
}
export default Body;