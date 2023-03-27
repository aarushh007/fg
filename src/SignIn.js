import {auth, provider} from './config'
import React, { useEffect, useState } from 'react'
import {signInWithPopup} from 'firebase/auth';
import { Outlet, Link } from "react-router-dom";

import './SignIn.css'

function SignIn() {
    const [value, setValue] = useState('')
    const handleClick = () => {
        signInWithPopup(auth, provider).then(
            (data) => {
                setValue(data.user.email)
                localStorage.setItem("email", data.user.email)
                localStorage.setItem("userData", data)
                
                window.location.reload()
            }
        )
    }
    const logout = () => {
        console.log('logout')
        localStorage.clear();
        setValue(localStorage.getItem('email'));
        window.location.reload();
    }
    useEffect(() =>{
        setValue(localStorage.getItem('email'))
        console.log(localStorage.getItem('email'))
    })
    /*
  return (
    <div>
        <div>Sign In</div>
        {value == null ? <button onClick={handleClick}>Sign in with google</button>: <button onClick={logout}>logout</button>}
    </div>
  )
  */
 return (
    <div className='navbar'>
        <Link to='/' className='nav-item'>Home</Link>
        <Link to='/shop' className='nav-item'>Shop</Link>
        <Link to='/players' className='nav-item'>Players</Link>
        {value && <div className='nav-item end'><p>{value}</p><button onClick={logout}>logout</button></div>}
        {!value && <button className='nav-item end' onClick={handleClick}>Sign in</button>}
    </div>
 )
}

export default SignIn