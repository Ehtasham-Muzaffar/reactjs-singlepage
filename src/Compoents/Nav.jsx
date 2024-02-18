import React from 'react';
import ReactLogo from '../assets/a.png';
import './Nav.css';

const Nav = () => {
  const menus =[
    {
      id:1,
      menu:"home"
    },
    {
      id:2,
      menu:"About"
    },
    {
      id:3,
      menu:"Services"
    },
    {
      id:4,
      menu:"Contact Us"
    }
    
  ]
  return (
    <>
    <div className="container">
        <div className="logo">
            <img src={ReactLogo} alt="Image svg" />
        </div>
        <div className="menus">
          <ul>
            {menus.map((e)=> <li key={e.id}>{e.menu}</li> )}
          </ul>
        </div>
        <div className="button">
          <button>Get A Quote</button>
        </div>
    </div>
    </>
  )
}

export default Nav