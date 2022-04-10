import React from 'react'
import './Navbar.css';
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className='navbar'>
      <span className='logo'>Logo</span>
      <div className='links'>
        <Link to="/">Home</Link>
        <Link to="/albums">Albums</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  )
}
