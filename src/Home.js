import React from 'react'
import { useEffect, useState } from 'react';
import './App.css';
import SignIn from './SignIn';

const Home = () => {
    const [value, setValue] = useState({})
    useEffect(() =>{
      setValue(localStorage.getItem('userData'))
  })
    return (
        <div className='main-content'>
        {value ? <div>Hello World 🚀</div> : <div>Sign in to access</div>}
        </div>
    );
    }
export default Home