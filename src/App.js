import './App.scss';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './components/SignUp/SignUp';
import Header from './components/Header/Header.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<SignUp/>} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
