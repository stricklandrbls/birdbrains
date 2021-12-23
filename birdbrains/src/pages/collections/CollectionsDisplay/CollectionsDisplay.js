import { useEffect, useState } from "react";
import { api_uri } from "../../../utils/globals";
import Collection from "./Collection";
import "./CollectionsDisplay.css";
function CollectionsDisplay(){
    const [collectionsData, populateCollectionsData] = useState([]);

    //TODO: Pull Collections list from database.
    useEffect(()=>{
        fetch(api_uri+"collections")
        .then((results) =>{
            results.json()
            .then((data)=>{
                populateCollectionsData(data);
            })
        })
    },[])
    if(!collectionsData) return null;

    console.log(collectionsData);
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