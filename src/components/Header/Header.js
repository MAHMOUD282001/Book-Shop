import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'


import "./Header.css"


function Header() {
  return (
    <section className='header'>
        <div className="container">
            <div className='logo'>
                <h4>Booksy</h4>
            </div>
            
            <div className='input'>
                <input type= "text"/>
                <FontAwesomeIcon icon={faSearch} className = "icon"/>
            </div>
            
            <div className='icons'>
                <div className='heart'><FontAwesomeIcon icon={faHeart} /></div>
                <div className='number'>0</div>
                <p>EN</p>
            </div>
        </div>
    </section>
  )
}

export default Header