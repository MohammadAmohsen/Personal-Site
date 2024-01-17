import React from "react";

function Navbar() {
  return (
    <React.Fragment>

    <header id="home">
       <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
        <a className="mobile-btn" href="youtube.com" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
             <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
             <li><a className="smoothscroll" href="#about">About</a></li>
           <li><a className="smoothscroll" href="#resume">Resume</a></li>/
             <li><a className="smoothscroll" href="#portfolio">Works</a></li>
             <li><a className="smoothscroll" href="#contact">Contact</a></li>
          </ul>
       </nav>

       <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
       </p>

    </header>
    </React.Fragment>
  );
}

export default Navbar;