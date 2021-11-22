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
  account: null,
  contract: null
};

function App() {
  const [info, setInfo] = useState(initialInfo);

  const init = async () => {
      // Check if window has the metamask extension
      if(window.ethereum){
        // Async function to retrieve accounts from metamask
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setInfo({...initialInfo, account: accounts[0]});

        // Async function to retrieve the active network on their wallet.
        const networkId = await window.ethereum.request({
          method: "net_version",
        });
        
        if(networkId == 80001){
          let web3 = new Web3(window.ethereum);
          
        }
        console.log(accounts);

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
        <Navbar account={info.account}/>
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
