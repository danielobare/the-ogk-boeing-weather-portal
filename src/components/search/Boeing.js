import React from "react";

const Boeing = ({ data }) => {
  return <img src={`icons/${data.weather[0].icon}.png`} />;
};

export default Boeing;