import React from "react";
import Logo from '../components/search/Boeing_logo.png';

function Title(){
    return(
        <>
        <img className="boeing-logo" src={Logo}/>
        <h4><em>Boeing</em></h4>
        <p><strong><em>The ogk Aviation</em></strong></p>
        <p><em>by Daniel Obare N</em></p>
        </>
    )
}

export default Title;