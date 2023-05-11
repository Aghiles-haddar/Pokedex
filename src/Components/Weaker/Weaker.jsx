import React from "react";
import last from '../../Assets/last.png'

function Weaker(){
    return(
        <div className="container-global-legendarie">

            <div className="container-title-legendarie">
                <h1 className="legendarie-h1">Weaker</h1>
                <div className="lengendarie-separator"></div>
            </div>

            <div className="information-lengendarie">
                <div className="information-left-legendarie">
                    <img className="mewtwo" src={last} alt="" />
                </div>
                <div className="information-right-legendarie">
                    <h1 className="right-title">Flareon</h1>
                    <p className="right-paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br />
                        Aenean commodo ligula eget dolor. Aenean massa. Cum <br />
                        sociis natoque penatibus et magnis dis parturient montes, <br />
                        nascetur ridiculus mus. Donec quam felis, ultricies nec, <br />
                        pellentesque eu, pretium quis, sem. Nulla consequat massa <br />
                        quis enim. </p>
                    <div className="information-right-important-legendarie">

                        <div className="information-important-right">

                            <div className="information-first-important">
                                <p className="first-paragraph">Healthy Points</p>
                                <p className="second-paragraph">1000,000</p>
                                <div class="progress-bar"></div>

                            </div>

                            <div className="information-first-important">
                                <p className="first-paragraph">Healthy Points</p>
                                <p className="second-paragraph">1000,000</p>
                                <div className="progress-bar"></div>
                            </div>

                            <div className="information-first-important">
                                <p className="first-paragraph">Healthy Points</p>
                                <p className="second-paragraph">1000,000</p>
                                <div className="progress-bar"></div>
                            </div>

                        </div>

                        <div className="information-important-left">

                            <div className="information-first-important">
                                <p className="first-paragraph">Healthy Points</p>
                                <p className="second-paragraph">1000,000</p>
                                <div className="progress-bar"></div>
                            </div>

                            <div className="information-first-important">
                                <p className="first-paragraph">Healthy Points</p>
                                <p className="second-paragraph">1000,000</p>
                                <div className="progress-bar"></div>
                            </div>

                            <div className="information-first-important">
                                <p className="first-paragraph">Healthy Points</p>
                                <p className="second-paragraph">1000,000</p>
                                <div className="progress-bar"></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default Weaker
