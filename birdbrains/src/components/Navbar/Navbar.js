import "./Navbar.css";
import logo from "../../assets/images/logo.svg";
import { useEffect, useState } from "react";

function Navbar(props){
    return(
        <div class="w3-top w3-center w3-white navbar w3-mobile">
            <div class="w3-row w3-padding w3-margin-top w3-mobile">
                <img src={logo} class="logo"></img>
            </div>
            <div class="w3-row w3-wide w3-mobile">
                <a class="w3-bar-item w3-button w3-hover-white w3-mobile" href="/">Home</a>
                <a class="w3-bar-item w3-button w3-hover-white w3-mobile" href="">About</a>
                <a class="w3-bar-item w3-button w3-hover-white w3-mobile" href="/Collections">Collections</a>
                <a class="w3-bar-item w3-button w3-hover-white w3-mobile" href="">Contact</a>
                {/* <ConnectButton status={infoObj.status} onClick={connectWallet} text={infoObj.account} network={infoObj.network}/> */}
            </div>
        </div>
    )
}

export default Navbar;