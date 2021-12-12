import Collection from "./Collection";
import "./CollectionsDisplay.css";
function CollectionsDisplay(){

    //TODO: Pull Collections list from database.
    let collections = 9;

    return(
        <div class="collections-display w3-display-container w3-padding">
            <div class="desktop">
                <Collection />
                <Collection />
                <Collection />
                <Collection />
                <Collection />
                <Collection />
            </div>
            <div class="mobile">
                <div class="w3-cell-row w3-mobile">
                    <Collection />
                </div>
            </div>
        </div>
    )
}

export default CollectionsDisplay;