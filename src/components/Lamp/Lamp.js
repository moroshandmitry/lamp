import React, { useState } from "react";
import { StyledLamp } from "./styles";

export const Lamp = () => {
  const [on, setOn] = useState(false);

  const handleToggle = () => setOn(!on);

  return (
    <StyledLamp>
      <div onClick={() => handleToggle()}>
        {on ? (
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/ONbulb.jpg"
            alt="lamp"
          />
        ) : (
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg"
            alt="lamp"
          />
        )}
      </div>
    </StyledLamp>
  );
};
