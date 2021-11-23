import { useEffect, useState } from "react";
import Web3 from "web3";

import CollectionHeader from "./CollectionHeader/CollectionHeader";


function Collections(){

    return(
            <span>
                <CollectionHeader />
            </span>
        );
}

export default Collections;