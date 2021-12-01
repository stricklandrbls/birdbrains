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

    const initMetaMask = async () =>{
        if(window.ethereum?.isMetaMask){
            const accounts = await window.ethereum.enable();
            const address = await window.ethereum.request({ method: "eth_requestAccounts" });
            const network = await window.ethereum.request({ method: "net_version" });
            console.log(accounts[0], address[0], network);
            updateWalletData({ ...walletDataObj, account: address[0], network: network });
        }
        else{
            updateWalletData({...walletDataObj, error: "No MetaMask"});
        }
    }
    const initOnChanged = () => {
        if(window.ethereum?.isMetaMask){
            window.ethereum.on("accountsChanged", () =>{ window.location.reload(); });
            window.ethereum.on("chainChanged", () => { window.location.reload(); });
        }
        else{

        }
    }
    useEffect(() => {
        initMetaMask();
        initOnChanged();
    }, []);
    return(
        <div class="collection-banner w3-display-container w3-center w3-padding ">
            <br></br><br></br>
            <h1 class="w3-border-bottom">{params.collectionName}</h1>
            <div class="w3-border w3-round">
                <WalletStatus data={walletDataObj} connect={initMetaMask} />
            </div>
        </div>
    )
}

function WalletStatus(props){

    if (props.data.error = null){
        return( <div class="w3-border w3-round w3-padding w3-red">Can't Connect...</div> )
    }
    else if(props.data.account == null){
        return( <div class="w3-border w3-round w3-padding" onClick={props.connect}>Connect Wallet</div> )
    }
    else{
        let address = "";
        const address_len = props.data.account.length;

        address = props.data.account.substring(0, 6) + "..." + props.data.account.substring(address_len - 6, address_len);

        return ( <div class="w3-border w3-round w3-padding w3-green">{address}</div> )
    }
}
export default Collection;