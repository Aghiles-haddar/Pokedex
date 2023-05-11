import React from "react";
import Legendarie from "../Components/Legendarie/Legendarie";
import Card from "../Components/Card/Card";
import Stronger from "../Components/Stronger/Stronger";
import CardStronger from "../Components/CardStronger/CardStronger";
import Weaker from "../Components/Weaker/Weaker";
import Footer from "../Components/Footer/Footer";

function Legendaries(){
    return(
        <div>
            <Legendarie/>
            <Card/>
            <Stronger/>
            <CardStronger/>
            <Weaker/>
            <CardStronger/>
            <Footer/>
        </div>
    )
}

export default Legendaries