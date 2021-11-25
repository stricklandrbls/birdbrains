import Web3 from "web3";
import ConnectButton from "../Navbar/Button/ConnectButton";
import contract from "../../contract/contract.json";

import { useEffect, useState } from "react";

let initialInfo = {
    connected: false,
    account: null,
    network: null,
    status: false,
    contract: null,
    web3: null
}
const account = null;
const network = null;
let web3 = null;
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
        
        const accounts = await window.ethereum.enable();
        // const account = await window.ethereum.request({ method: "eth_requestAccounts" });
        const network = await window.ethereum.request({ method: "net_version" });
        web3 = new Web3(window.ethereum);
        setInfo({account: accounts[0], network: network, contract: new web3.eth.Contract(contract.abi, contract.address)});
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
    const mint = async () => {
        console.log(infoObj.account);
        console.log(infoObj.contract);
        // try{
        //     web3.eth.getBalance(infoObj.account, (err, wei) =>{
        //         console.log(wei);
        //     })
        // }catch(err){
        //     console.log(err);
        // }
        const gas = await infoObj.contract.methods.mint(1).estimateGas();
        console.log(gas);
        // infoObj.contract.methods.mint(1).send({from: account, gas})
        // .then(result =>{
        //     console.log(result);
        // })
        // .catch(err =>{
        //     console.log(err);
        // })
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
                <button class="w3-button w3-round w3-mobile w3-border" onClick={mint}>Mint</button>
                <button class="w3-button w3-round w3-mobile w3-border" >Get NFTs</button>
                <button class="w3-button w3-round w3-mobile w3-border" >Withdraw</button>
            </div>
        </div>
    )
}

export default CollectionHeader;