import React from 'react'
import './Home.scss';
import logo from '../../logo.svg';

export default function Home() {
  return (
    <div id='home'>
      <img src={logo} alt="" />
      <h1>Hi Reacthacker!</h1>
      <h3>Welcome to Sass 🎨</h3>
    </div>
  )
}
