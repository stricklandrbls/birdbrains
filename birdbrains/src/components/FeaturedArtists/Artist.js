import logo from "../../assets/images/image.png";
import { useState, useEffect } from 'react';
import "./Artist.css";

import Web3 from "web3";

function Artist(props){
    const [counter, setCounter] = useState(0);

    return(
        <td>
            <div class="w3-card w3-round-large w3-hover-shadow w3-white">
                <img src={logo} class="card_art w3-round-large" />
                <div class="w3-display-container w3-margin w3-large">
                    <h2>{props.name}</h2><br></br>
                    <div class="w3-display-bottomleft">
                        {props.socials.map(account => (<p>{account.instagram}</p>) )}
                    </div>
                </div>
            </div>
        </td>
    );
}

export default Artist;