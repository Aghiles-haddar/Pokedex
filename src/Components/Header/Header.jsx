import React from "react";
import banner from '../../Assets/banner.svg'
import pika from '../../Assets/pika.png'
import './Header.css'

function Header() {
    return(
        <div className="container-header">
            <div className="container-global-header">

            
                <div className="container-left-header">
                    <h1 className="container-left-h1-header">Find <span> all your favorite </span> Pokemon</h1>
                    <h2 className="container-left-h2-header">You can know the type of Pokemon, its strengths, disadvantages and <br className="display" />
                     abilities</h2>
                    <button className="container-left-btn-header">See pokemons</button>
                </div>

                <div className="container-right-header">
                    <img className="banner" src={banner} alt="" />
                    <img className="pika" src={pika} alt="" />
                </div>
            </div>
            <div className="container-bottom-header">
                <h5>Ours Teams</h5>
                <h5>Make with ❤️ for the PokéSpartans team Platzi Master</h5>
            </div>  

        </div>
    )
}

export default Header;