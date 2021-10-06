import React from "react"


const Navbar: React.FC = () => (
    <nav>
        <div className="nav-wrapper purple darken-2">
      <a href="/" className="brand-logo">React + typescript</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/">Sass</a></li>
        <li><a href="/">Components</a></li>
        
      </ul>
    </div>
    </nav>
)


export default Navbar