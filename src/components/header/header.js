import React from 'react'
import Logo from './img.png'
import searchLogo from './search_img.png'
import './Header.css'


const header = () => {
  return (
    
    <div>

<div class="header">
    {/* <!-- Logo --> */}
        <div class="logo">
            <img id="logo" src={Logo} />
        </div>
    {/* <!-- Other Links --> */}
    <nav>
        <ul>
            <a href="">Home</a>
            <a href="">Countries</a>
            <a href="">Services</a>
            <a href="">Contact Us</a>
          
        </ul>
    </nav>

    <div class="search-container">
  <input type="text" id="search" name="search" placeholder="Search..." />
  <button type="submit"><img src={searchLogo } alt="Search Icon" /></button>

</div>

    
</div>


    </div>

  )
}

export default header
