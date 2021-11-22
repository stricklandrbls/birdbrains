import logo from './logo.svg';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Statement from './components/Statement/Statement';
import { useState, useEffect } from 'react';
import Web3 from "web3";

import './App.css';
import FeaturedArtists from './components/FeaturedArtists/FeaturedArtists';
import React from 'react';
const initialInfo = {
  connected: false,
  status: null,
  account: "",
  contract: null,
  error: null
};

function App() {
  const [info, setInfo] = useState(initialInfo);

  const init = async () => {
      // Check if window has the metamask extension
      if(window.ethereum){
        // Async function to retrieve accounts from metamask
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        })
        .then(() => {

          // Async function to retrieve the active network on their wallet.
          const networkId = window.ethereum.request({
            method: "net_version",
          });
        })
        .then(() =>{

          setInfo({...initialInfo, account: accounts[0]});

        })
        .catch((err) =>{

          setInfo({...initialInfo, connected: false, account: ""});

        });

        console.log(info);

      }
      else{
        alert("You need metamask to mint!");
      }
  }
  useEffect(() => {
      init();
  }, []);
  return (
    <span class="w3-container">
      <div class="w3-row">
        <Navbar account={info.account} error={info.error}/>
      </div>
      <br></br><br></br>
      <div class="w3-row">
        <Banner/>
      </div>
      <div class="w3-row">
        <Statement/>
      </div>
      <div class="w3-row featured_artists">
      <br></br>
        <FeaturedArtists />
      </div>
    </span>
  );
}

export default App;
