import "./app.css";

import { useState } from "react";

export const App = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <h1>Hello World</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
};
