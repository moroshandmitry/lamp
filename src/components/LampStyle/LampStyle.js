import React, { useState } from "react";

export const LampStyle = () => {
  const [turnOn, setTurnOn] = useState(false);

  const handleToggle = () => setTurnOn(!turnOn);

  const onStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,200,0,.7)",
    width: 100,
    height: 100,
    borderRadius: "50px 50px 70px 70px",
    cursor: "pointer"
  };

  const offStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ccc",
    width: 100,
    height: 100,
    borderRadius: "50px 50px 70px 70px",
    cursor: "pointer"
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={turnOn ? onStyle : offStyle} onClick={() => handleToggle()}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "30px",
            backgroundColor: "rgba(255,255,255,.7)",
            width: "30px",
            height: "30px"
          }}
        ></div>
      </div>
    </div>
  );
};
