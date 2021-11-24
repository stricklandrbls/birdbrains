import Web3 from "web3";
import ConnectButton from "../Navbar/Button/ConnectButton";
import { useEffect, useState } from "react";

let initialInfo = {
    connected: false,
    account: null,
    network: null,
    status: false
}
const account = null;
const network = null;
const contract = null;
function CollectionHeader(props){
    let [infoObj, setInfo] = useState(initialInfo);

    const init = async () =>{
        if(window.ethereum?.isMetaMask){

            setInfo({...initialInfo, status: true});

        }
        else{
            setInfo({...initialInfo});
        }
    }


    const connectWallet = async () =>{
        
        const account = await window.ethereum.request({ method: "eth_requestAccounts" });
        const network = await window.ethereum.request({ method: "net_version" });
        let web3 = new Web3(window.ethereum);
        // const contract = new web3.eth.Contract(contract.abi, contract.address);
        setInfo({account: account[0], network: network});
        // props.onWalletConnect({infoObj});
    }

    const initOnChanged = () => {
        if(window.ethereum?.isMetaMask){
            window.ethereum.on("accountsChanged", () =>{ window.location.reload(); });
            window.ethereum.on("chainChanged", () => { window.location.reload(); });
        }
        else{

        }
    }

    useEffect(() =>{
        init();
        initOnChanged();
    }, []);

    return(
        <div class="w3-cell-row w3-row w3-padding-32 w3-mobile w3-margin-top">
            <div class="w3-display-container w3-center w3-mobile w3-cell">
                <div class="w3-display-container">
                <h1>Collections Page</h1>
                {/* <button class="w3-display-right w3-margin-right">CLickmee</button> */}
                {/* <ConnectButton status={infoObj.status} onClick={connectWallet} text={infoObj.account} network={infoObj.network} /> */}

                <ConnectButton status={infoObj.status} onClick={connectWallet} text={infoObj.account} network={infoObj.network} />
                </div>
                <button class="w3-button w3-round w3-mobile" >Mint</button>
            </div>
        </div>
    )
}

export default CollectionHeader;