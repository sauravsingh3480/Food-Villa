import { useOutletContext } from "react-router-dom";

const SearchPage = () =>{
    const cards  = useOutletContext();
    // console.log("IN SeachPage")
    // console.log(cards);
    return (
        
        <div id="searchContainer">
            <h1>chalo khojte h</h1>
            <h1>chalo khojte h</h1>
            <h1>chalo khojte h</h1>
            <h1>chalo khojte h</h1>
            <h1>chalo khojte h</h1>
        </div>
    );
}
export default SearchPage;