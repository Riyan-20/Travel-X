import React from 'react'
import './Footer.css'
import Logo from './img.png'

const Footer = () => {
  const githubProfile = 'https://github.com/Riyan-20';
  const linkedinProfile = 'https://www.linkedin.com/in/rao-riyan-b886b1242/';
  const whatsappNumber = 'https://api.whatsapp.com/send/?phone=%2B923095802363&text&type=phone_number&app_absent=0'; 
  const facebookProfile = 'https://www.facebook.com/rao.riyan.3?mibextid=ZbWKwL';
  return (
    <footer class="footer">
        <div className="newsletter">
        <h1>Subscribe our Newsletter</h1>
        <h2>Want to know about our offers first?</h2>
        <form action="#" method="post">
          <input type="email" name="email" placeholder="Enter your email" required />
          <input type="submit" value="Subscribe" />
        </form>
      </div>
      <div class="logo">
            <img id="logo" src={Logo} />
      </div>

      <h3>Developed with ❤️ by Rao Riyan</h3>

      <div className="social-icons">
      <a href={githubProfile} className="icon-link" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
      <a href={linkedinProfile} className="icon-link" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
      <a href={whatsappNumber} className="icon-link" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
      <a href={facebookProfile} className="icon-link" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
      </div>

      <h4>©2023 Travel X</h4>

    </footer>
  )
}

export default Footer