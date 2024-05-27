import React, { useEffect, useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [sum, setSum] = useState(0);

  const addSum = (value) => {
    const number = Number(value);
    if (!isNaN(number)) {
      setSum(number + sum);
    } else {
      setSum(0);
    }
  };

  useEffect(() => {}, [sum]);

  return (
    <div className="main">
      {/* Do not remove the main div */}
      <h1>Sum Calculator</h1>
      <br />
      <input
        type="number"
        name="num"
        id="num"
        onChange={(e) => addSum(e.target.value)}
      />
      <br />
      <p>Sum : {sum}</p>
    </div>
  );
};

export default App;
