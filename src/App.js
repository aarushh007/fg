import { useEffect, useState } from 'react';
import './App.css';
import SignIn from './SignIn';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Shop from './Shop';
import Players from './Players';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <SignIn />
    
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/shop" element={<Shop/>}>
        </Route>
        <Route path="/players" element={<Players />}>
        </Route>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
