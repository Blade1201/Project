import React from "react";
import loadingGif from "../images/loading/loading-arrow.gif";

const Loading = () => {
  return (
    <div className="loading">
      <h4>Szobák betöltése ...</h4>
      <img src={loadingGif} alt="loading gif" />
    </div>
  );
}

export default Loading;