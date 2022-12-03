import React, { useEffect, useState, useSyncExternalStore } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import './App.css';
import logo from './assets/logoNewsapi.png';

function App() {

  return (
    <>
      <div className="container-fluid">
        
          <h1 className='top_headline mt-5 pt-5'>
            Welcome to <span className='title'>NewsStack</span>
          </h1>
          <h6 className='sub_headline'>
            the truth is in your hand
          </h6>
          <Navbar/>
          {/* <marquee className="sub-top-head" width="100%" direction="right" height="100px">
              This is a sample scrolling text that has scrolls texts to right.
          </marquee> */}
          
        </div>
      
    </>
  )
}

export default App
