import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import { useEffect, useState } from "react";

function Navbar(props){
    const mobileMenuToggle = () =>{
        let x = document.getElementById("navbar-mobile-menu");
        if(x.className.indexOf("w3-show") == -1)
        {
            x.className = x.className.replace("w3-hide", "w3-show");
        }
        else{
            x.className = x.className.replace("w3-show", "w3-hide");
        }
    }

    return(
        <div class="w3-top w3-center w3-white navbar w3-mobile">
            <div class="navbar-desktop w3-row w3-padding w3-margin-top w3-mobile">
                <img src={logo} class="logo"></img>
            </div>
            <div class="navbar-desktop w3-row w3-wide w3-mobile">
                <a class="w3-bar-item w3-button w3-hover-white w3-mobile" href="/">Home</a>
                <a class="w3-bar-item w3-button w3-hover-white w3-mobile" href="">About</a>
                <a class="w3-bar-item w3-button w3-hover-white w3-mobile" href="/Collections">Collections</a>
                <a class="w3-bar-item w3-button w3-hover-white w3-mobile" href="">Contact</a>
                {/* <ConnectButton status={infoObj.status} onClick={connectWallet} text={infoObj.account} network={infoObj.network}/> */}
            </div>
            <div class="navbar-mobile w3-padding w3-margin-top w3-cell-row">
                <div class="w3-margin">
                    <img src={logo} class="logo w3-cell-middle w3-margin-right"></img>
                    <i class="w3-xxlarge fa fa-bars w3-cell-middle w3-padding-left" onClick={mobileMenuToggle}></i>
                </div>
                <div id="navbar-mobile-menu" class="w3-hide w3-margin-top w3-animate-opacity">
                    <a class="w3-bar-item w3-button w3-mobile w3-large">Home</a>
                    <a class="w3-bar-item w3-button w3-mobile w3-large">About</a>
                    <a class="w3-bar-item w3-button w3-mobile w3-large">Collections</a>
                    <a class="w3-bar-item w3-button w3-mobile w3-large">Contact</a>
                </div>
            </div>
        </div>


    )
}

export default Navbar;