import { useState } from "react";
import Button from "./components/Button";
import StatisticLine from "./components/StatisticLine";

// const Statistics = ({ stat }) => {
//   return <p>{stat}</p>;
// };

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} value="good"></Button>
      <Button onClick={() => setNeutral(neutral + 1)} value="neutral"></Button>
      <Button onClick={() => setBad(bad + 1)} value="bad"></Button>
      <h1>Statistics</h1>
      {all > 0 ? (
        <>
          <StatisticLine stat={`${good}`} value="good" />
          <StatisticLine stat={`${neutral}`} value="neutral" />
          <StatisticLine stat={`${bad}`} value="bad" />
          <StatisticLine stat={`${all}`} value="all" />
          <StatisticLine stat={`${all / 3}`} value="average" />
          <StatisticLine stat={`${good / all}`} value="positive" />
        </>
      ) : (
        "No feedback given"
      )}
    </div>
  );
};

export default App;
