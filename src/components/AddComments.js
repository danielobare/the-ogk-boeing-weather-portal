import { useState } from "react";

const Create = () => {
  const [date, setDate] = useState("");
  const [temperatureC, setTemperatureC] = useState("");
  const [summary, setSummary] = useState("");
};

const handleSubmit = (e) => {
  e.preventDefault();
  const blog = { date, temperatureC, summary };

  fetch("", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      date: "",
      temperatureC: "",
      summary: "",
    }).then(() => {
      console.log("New  weather comment added");
    }),
  });
};





















// import React from 'react'
// import Comments from './Comments'

// fetch('../records.json', {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       date: '',
//       temperatureC: '',
//       summary: '',
//     })
//   })

// function AddComments(){
//     return(
//         <div>
//             <Comments />
//         </div>
//     )
// }

// export default AddComments;
