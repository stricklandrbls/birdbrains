import { useEffect, useState } from "react";
import Web3 from "web3";
import CollectionsDisplay from "./CollectionsDisplay/CollectionsDisplay";
import CollectionHeader from "./CollectionHeader/CollectionHeader";


function Collections(){

    return(
            <span>
                <CollectionHeader />
                <CollectionsDisplay />
            </span>
        );
}

export default Collections;