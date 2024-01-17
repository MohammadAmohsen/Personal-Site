import React from "react";
import "../Styles/NavBar.css"
import ReorderIcon from "@mui/icons-material/Reorder"

function Navbar() {
  return (
    <React.Fragment>

    <header id="home">
       <nav class="navbar" id="nav-wrap">
        <div className="toggleButton">
            <button><ReorderIcon /></button>
        </div>
          <div className="links">
             <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
             <li><a className="smoothscroll" href="#about">About</a></li>
           <li><a className="smoothscroll" href="#resume">Resume</a></li>
             <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
             <li><a className="smoothscroll" href="#contact">Contact</a></li>
          </div>
       </nav>

       <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
       </p>

    </header>
    </React.Fragment>
  );
}

export default Navbar;
