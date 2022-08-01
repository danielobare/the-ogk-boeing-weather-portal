import WeatherAnalysis from "./WeatherAnalysis";
import React from "react";

function AddComments(){
    let state = {
        name : "Example",
        age : "21",
        description : "Some text here."
    }
    console.log(state);
    console.log(JSON.stringify(state));
}

export default AddComments;