import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import "./CollectionPages.css"

import Web3 from "web3";

const walletData = {
    account: null,
    network: null,
    focusContract: null,
    error: null
}

function Collection(){
    const params = useParams();
    const [walletDataObj, updateWalletData] = useState(walletData);

    const initMetaMask = () =>{
        if(window.ethereum?.isMetaMask){

        }
        else{
            updateWalletData({...walletDataObj, error: "No MetaMask"});
        }
    }

    useEffect(() => {
        initMetaMask();
    }, []);
    return(
        <div class="collection-banner w3-display-container w3-center w3-padding">
            <br></br><br></br>
            <div class="w3-cell-row">
                <div class="w3-cell"></div>
                <h1 class="w3-cell">{params.collectionName}</h1>
                <a class="w3-button w3-border">Connect Wallet</a>
            </div>
        </div>
    )
}

export default Collection;