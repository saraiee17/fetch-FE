import './App.scss';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header.js';
import SignUp from './components/SignUp/SignUp.js';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<SignUp/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
