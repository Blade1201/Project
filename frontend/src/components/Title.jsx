import React from "react";
import "../styles/components/title.css";

const Title = ({ title }) => {
  return (
    <div className="section-title">
      <h4>{title}</h4>
      <div />
    </div>
  );
}

export default Title;