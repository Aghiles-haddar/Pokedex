import React from "react";
import left from '../../Assets/left.svg'
import right from '../../Assets/right.svg'
import boule from '../../Assets/boule.svg'
import mewtwo2 from '../../Assets/mewtwo2.png'
import pokemon2 from '../../Assets/pokemon2.png'
import pokemon3 from '../../Assets/pokemon3.png'
import pokemon4 from '../../Assets/pokemon4.png'
import pokemon5 from '../../Assets/pokemon5.png'
import pokemon6 from '../../Assets/pokemon6.png'
import './Card.css'

function Card(){
    return(
        <div className="container-global-cards">

            <div className="card-icon-left">
                <img src={left} alt="" />
            </div>
            <div className="cards">

                <div className="card is-active-card">
                    <div className="card-cover"></div>
                    <div className="card-top">
                        <img className="mewtwo2" src={mewtwo2} alt="" />
                    </div>
                    <div className="card-bottom">
                        <h5 className="card-bottom-h5">Mew</h5>
                        <img src={boule} alt="" />
                    </div>
                </div>

                <div className="card">
                    <div className="card-cover"></div>
                    <div className="card-top">
                        <img className="mewtwo2" src={pokemon2} alt="" />
                    </div>
                    <div className="card-bottom">
                        <h5 className="card-bottom-h5">Mew</h5>
                        <img src={boule} alt="" />
                    </div>
                </div>

                <div className="card">
                    <div className="card-cover"></div>
                    <div className="card-top">
                        <img className="mewtwo2" src={pokemon3} alt="" />
                    </div>
                    <div className="card-bottom">
                        <h5 className="card-bottom-h5">Mew</h5>
                        <img src={boule} alt="" />
                    </div>
                </div>

                <div className="card">
                    <div className="card-cover"></div>
                    <div className="card-top">
                        <img className="mewtwo2" src={pokemon4} alt="" />
                    </div>
                    <div className="card-bottom">
                        <h5 className="card-bottom-h5">Mew</h5>
                        <img src={boule} alt="" />
                    </div>
                </div>

                <div className="card">
                    <div className="card-cover"></div>
                    <div className="card-top">
                        <img className="mewtwo2" src={pokemon5} alt="" />
                    </div>
                    <div className="card-bottom">
                        <h5 className="card-bottom-h5">Mew</h5>
                        <img src={boule} alt="" />
                    </div>
                </div>

                <div className="card">
                    <div className="card-cover"></div>
                    <div className="card-top">
                        <img className="mewtwo2" src={pokemon6} alt="" />
                    </div>
                    <div className="card-bottom">
                        <h5 className="card-bottom-h5">Mew</h5>
                        <img src={boule} alt="" />
                    </div>
                </div>

            </div>

            <div className="card-icon-left">
                <img src={right} alt="" />
            </div>
            
        </div>
    )
}

export default Card