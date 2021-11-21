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
      if(window.ethereum){
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

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
        <Navbar/>
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
