import logo from "../../assets/images/image.png";
import { useState, useEffect } from 'react';
import "./Artist.css";

import Web3 from "web3";

const initialInfo = {
    connected: false,
    status: null,
    account: null,
    contract: null,
}

function Artist(props){
    const [counter, setCounter] = useState(0);

    return(
        <td>
            <div onClick ={()=>setCounter(counter + 1)} class="w3-card w3-round-large w3-hover-shadow w3-white">
                <img src={logo} class="card_art w3-round-large" />
                <div class="w3-container w3-center">
                    <p>{props.name}</p>
                    <div>
                        Clicked {counter} time!
                    </div>
                </div>
            </div>
        </td>
    );
}

export default Artist;