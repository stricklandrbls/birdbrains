import "./Navbar.css";
import ConnectButton from "./Button/ConnectButton";
import logo from "../../assets/images/logo.svg";
import { useEffect, useState } from "react";
import Web3 from "web3";

let initialInfo = {
    connected: false,
    account: null,
    network: null,
    status: false
}
const account = null;
const network = null;
const contract = null;

function Navbar(){
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
        <div class="w3-top w3-center w3-white navbar">
            <div class="w3-row w3-padding w3-margin-top">
                <img src={logo} class="logo"></img>
            </div>
            <div class="w3-row w3-wide">
                <a class="w3-bar-item w3-button w3-hover-white" href="/">Home</a>
                <a class="w3-bar-item w3-button w3-hover-white" href="">About</a>
                <a class="w3-bar-item w3-button w3-hover-white" href="/Collections">Collections</a>
                <a class="w3-bar-item w3-button w3-hover-white" href="">Contact</a>
                <ConnectButton status={infoObj.status} onClick={connectWallet} text={infoObj.account} network={infoObj.network}/>
            </div>
        </div>
    )
}

export default Navbar;