import React from "react";


const RoomHero = ({ children, item }) => {
    const containerStyle = {
        backgroundImage: `url(${item})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: `60vh`,
    };
  
    return (
      <header style={containerStyle}>
        {children}
      </header>
    );
  };
  
  export default RoomHero;