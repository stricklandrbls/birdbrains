import Collection from "./Collection";
import "./CollectionsDisplay.css";
function CollectionsDisplay(){

    let collections = 9;

    return(
        <div class="collections-display w3-display-container w3-padding">
            <Collection />
            <Collection />
            <Collection />
            <Collection />
            <Collection />
            <Collection />
        </div>
    )
}

export default CollectionsDisplay;