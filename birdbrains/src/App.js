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
  const [data, getData] = useState(null);
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
  useEffect(() =>{
    fetch("/api")
    .then((res) =>{
      res = res.json()
      .then((data) =>{
        getData(data.message);
      })
    })
    // .then((data) => getData(data.message));
  }, [])
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

      <p>{!data ? "" : data}</p>
    </span>
  );
}

export default App;
