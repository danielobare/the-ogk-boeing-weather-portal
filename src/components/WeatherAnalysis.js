import { useState } from "react";
import Comments from "./Comments";

const WeatherAnalysis = () => {
  const [date, setDate] = useState("");
  const [temperatureC, setTemperatureC] = useState("");
  const [summary, setSummary] = useState("");


  //trying to convert date,temperatureC and summary back to json and add it back to existing json
//   let state = {
//     {date} : "",
//     {temperatureC} : "",
//     {summary} : "Some text here."
// }
// console.log(state);
// console.log(JSON.stringify(state));
  
  const handleSubmit = (e) => {
    // e.preventDefault();
    const blog = { date, temperatureC, summary };

    fetch("", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log("New weather comment added");
      return <Comments />
    })
  }

  // date + temperatureC + summary = 

  return (
    <form className="new-poem-form" onSubmit={handleSubmit}>
      <input
        placeholder="Add date using 2001-01-01 format"
        value={date}
        type="text"
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        placeholder="Temperatures recorded"
        value={temperatureC}
        type="text"
        onChange={(e) => setTemperatureC(e.target.value)}
      />
      <textarea
        placeholder="Comments"
        rows={5}
        value={summary}
        type="text"
        onChange={(e) => setSummary(e.target.value)}
      />
      <button className="button2"><em>Add weather analysis / Report</em></button>
      <p>
      <em>{<Comments />} {date } {temperatureC } {summary }</em> 
      </p>

      <p className="jsonreturn">

      </p>
    </form>

  );
};

export default WeatherAnalysis;

// POST request did not exactly work for me here but I made something happen atleast