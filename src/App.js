import './App.scss';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header.js';
import SignUp from './components/SignUp/SignUp.js';
import Footer from './components/Footer/Footer.js';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<SignUp/>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
