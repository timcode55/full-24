// import Content from "./components/Content.jsx";
// import Header from "./components/Header.jsx";
// import Total from "./components/Total.jsx";

// const App = () => {
//   const course = {
//     name: "Half Stack application development",
//     parts: [
//       {
//         name: "Fundamentals of React",
//         exercises: 10,
//       },
//       {
//         name: "Using props to pass data",
//         exercises: 7,
//       },
//       {
//         name: "State of a component",
//         exercises: 14,
//       },
//     ],
//   };

//   const total = course.parts.reduce((sum, val) => {
//     return sum + val.exercises;
//   }, 0);

//   return (
//     <div>
//       <Header course={course.name} />
//       <Content parts={course.parts} />
//       <Total total={total} />
//     </div>
//   );
// };

// export default App;

import { useState } from "react";

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    setLeft((left) => left + 1);
    setTotal(left + right);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    setRight((right) => right + 1);
    let leftUpdate = left;
    let rightUpdate = right;
    setTotal(leftUpdate + rightUpdate);
  };

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(" ")}</p>
      <p>total {total}</p>
    </div>
  );
};

export default App;
