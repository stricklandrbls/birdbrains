import logo from "../../assets/images/image.png";
import { useState, useEffect } from 'react';
import "./Artist.css";

import Web3 from "web3";

function Artist(props){
    const [counter, setCounter] = useState(0);
    const link = "/Artist/" + props.name;
    return(
        <td>
            <a href={link} class=" featured-desktop artist w3-card w3-cell w3-round-large">
                <div class="w3-display-container w3-responsive">
                    <img src={logo} class="card_art w3-round-large" />
                    <div class="glass w3-display-bottomleft w3-padding-small w3-round-large w3-responsive">
                        <h3>{props.name}</h3><br></br>
                        <div class="w3-display-bottomleft w3-padding-small">
                            {props.socials.map(account => (<p>{account.instagram}</p>) )}
                        </div>
                    </div>
                </div>
            </a>
            <a href={link} class="featured-mobile artist w3-card w3-cell w3-round-large">
                <div class="w3-display-container w3-responsive">
                    <img src={logo} class="card_art w3-round-large" />
                    <h2 class="w3-padding">{props.name}</h2><br></br>
                    <div class="w3-display-bottomleft w3-padding">
                        {props.socials.map(account => (<p>{account.instagram}</p>) )}
                    </div>
                </div>
            </a>
        </td>
    );
}

function Social(props){
    const icon = null;

    if(props.type == "instagram"){
        icon = "fa fa-instagram"
    }

    return(
        <i class={icon}></i>
    )
}
export default Artist;