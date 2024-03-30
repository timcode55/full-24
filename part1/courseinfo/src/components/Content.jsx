import React from "react";
import Part from "./Part";

const Content = ({ parts }) => {
  console.log(parts, "PARTS");
  return (
    <div>
      {parts &&
        parts.map((item) => (
          <Part key={item.name} part={item.name} exercise={item.exercises} />
        ))}
    </div>
  );
};

export default Content;
