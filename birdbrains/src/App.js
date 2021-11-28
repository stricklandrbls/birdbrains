import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import Index from "./components/Index";
import Navbar from './components/Navbar/Navbar';
import Collections from './components/Collections';
import Collection from "./components/CollectionPages/Collection"
import { useState, useEffect } from 'react';
import Web3 from "web3";

import './App.css';
import React from 'react';
const _walletInfo = {
  connected: false,
  status: null,
  account: null,
  contract: null,
  network: null
};

function App() {
  const [walletInfo, setWalletInfo] = useState(_walletInfo);
  const walletInfoDataHandler = (walletInfoData) =>{
    console.log("In App.js");
    setWalletInfo({
      connected: true,
      status: true,
      account: walletInfoData.account,
      network: walletInfoData.network
    });
    console.log(walletInfoData);
  }

  return (
    <span class="w3-container">
      <div class="w3-row ">
        <Navbar onWalletConnect={setWalletInfo} walletObj={walletInfo}/>
      </div>
      <br></br><br></br>
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/Collections" element={<Collections walletObj={walletInfo}/>} />
        <Route path="/Collections/:collectionName" element={<Collection />} />
      </Routes>
    </span>
  );
}

export default App;
