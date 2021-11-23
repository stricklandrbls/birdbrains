import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import Index from "./components/Index";
import Navbar from './components/Navbar/Navbar';
import Collections from './components/Collections';
import { useState, useEffect } from 'react';
import Web3 from "web3";

import './App.css';
import React from 'react';
const initialInfo = {
  connected: false,
  status: null,
  account: "",
  contract: null,
  error: null
};

function App() {
  // const [info, setInfo] = useState(initialInfo);

  // const init = async () => {
  //     // Check if window has the metamask extension
  //     if(window.ethereum){
  //       // Async function to retrieve accounts from metamask
  //       const accounts = await window.ethereum.request({
  //         method: "eth_requestAccounts",
  //       });
  //       setInfo({...initialInfo, account: accounts[0]});

  //       // Async function to retrieve the active network on their wallet.
  //       const networkId = await window.ethereum.request({
  //         method: "net_version",
  //       });
        
  //       if(networkId == 80001){
  //         let web3 = new Web3(window.ethereum);
          
  //       }
  //       console.log(accounts);

  //     }
  //     else{
  //       alert("You need metamask to mint!");
  //     }
  // }
  // useEffect(() => {
  //     init();
  // }, []);
  return (
    <span class="w3-container">
      <div class="w3-row">
        <Navbar/>
      </div>
      <br></br><br></br>
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/Collections" element={<Collections/>} />
      </Routes>
    </span>
  );
}

export default App;
