import Records from "../records.json";

function Comments() {
  return (
    <div className="Comments">
      <em>Weather comments</em>
      <br /> <br />
      {Records.map((record) => {
        return (
          <div className="box" key={record.id}>
            <em>{record.date}  </em>
            <em>{record.temperatureC}  </em>
            <em>{record.summary}  </em>
            {/* <em>{record.temperatureF}  </em> */}
          </div>
        );
      })}
    </div>
  );
}

export default Comments;

//represents my implementation of a GET/fetch request to the json file
//component to display already existing data