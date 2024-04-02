import React from "react";
import Header from "./Header";
import Content from "./Content";

function Course({ course }) {
  return (
    <div>
      {course.map((item) => {
        return (
          <div key={item.id}>
            <Header title={item.name} />
            <Content content={item.parts} />
          </div>
        );
      })}
    </div>
  );
}

export default Course;
