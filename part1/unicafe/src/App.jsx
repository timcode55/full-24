import { useState } from "react";

const Statistics = ({ stat }) => {
  return <p>{stat}</p>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h1>Statistics</h1>
      {all > 0 ? (
        <>
          <Statistics stat={`good ${good}`} />
          <Statistics stat={`neutral ${neutral}`} />
          <Statistics stat={`bad ${bad}`} />
          <Statistics stat={`all ${all}`} />
          <Statistics stat={`average ${all / 3}`} />
          <Statistics stat={`positive ${good / all}`} />
        </>
      ) : (
        "No feedback given"
      )}
    </div>
  );
};

export default App;
