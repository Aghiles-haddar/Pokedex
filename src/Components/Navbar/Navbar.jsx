import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import logo from "../../Assets/Logo.svg"
import burgerBtn from "../../Assets/BurgenBtn.svg"

function Navbar(){
    const [activeLink, setActiveLink] = useState("Home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const handleLinkClick = (link) => {
        setActiveLink(link);
    }
    
    const handleBurgerClick = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    
    return(
        <div className="container-navbar">

            <div className="container-left-navbar">
                <img className="logo-navbar" src={logo} alt="" />
            </div>

            <div className={`container-right-navabr ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li className={activeLink === "Home" ? "navbar-link active" : "navbar-link"} > <Link onClick={() => handleLinkClick("Home")} to="/Home">Home</Link> </li>
                    <li className={activeLink === "Pokédex" ? "navbar-link active" : "navbar-link"} > <Link onClick={() => handleLinkClick("Pokédex")} to="/test">Pokédex</Link> </li>
                    <li className={activeLink === "Legendaries" ? "navbar-link active" : "navbar-link"} > <Link onClick={() => handleLinkClick("Legendaries")} to="/Legendaries">Legendaries</Link> </li>
                    <li className={activeLink === "Documentation" ? "navbar-link active" : "navbar-link"} > <Link onClick={() => handleLinkClick("Documentation")} to="/Error">Documentation</Link> </li>
                </ul>
            </div>

            <img className="burger" src={burgerBtn} alt="" onClick={handleBurgerClick} />
    
        </div>
    )
}

export default Navbar

