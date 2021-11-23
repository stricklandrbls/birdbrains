import "./Navbar.css";
import logo from "../../assets/images/logo.svg";
import { useState } from "react";

let initialInfo = {
    connected: false,
    account: null,
    network: null
}

function Navbar(){
    let [infoObj, setInfo] = useState(initialInfo);

    return(
        <div class="w3-top w3-center w3-white navbar">
            <div class="w3-row">
                <img src={logo} class="logo"></img>
            </div>
            <div class="w3-row">
                <a class="w3-bar-item w3-button w3-padding w3-hover-white" href="/">Home</a>
                <a class="w3-bar-item w3-button w3-padding w3-hover-white" href="">About</a>
                <a class="w3-bar-item w3-button w3-padding w3-hover-white" href="/Collections">Collections</a>
                <a class="w3-bar-item w3-button w3-padding w3-hover-white" href="">Contact</a>
                <button class="w3-button w3-display-topright w3-round w3-margin-left w3-margin">Connect Wallet</button>
            </div>
        </div>
    )
}

export default Navbar;